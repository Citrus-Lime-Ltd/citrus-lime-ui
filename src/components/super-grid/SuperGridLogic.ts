import { FilterMethod } from '@/types/FilterMethod';
import { FilterArgs, FilterRequest } from '@/types/FilterRequest';
import { FilterResponse } from '@/types/FilterResponse';
import { GridColumn } from '@/types/GridColumn';
import { defaultFilterMethod, defaultStringFilterMethod, filterMethods } from '@/utils/FilterMethods';
import { FilterOperation } from '@/utils/FilterOperation';
import { computed, defineComponent, onMounted, reactive, toRefs, watch } from 'vue';

interface SuperGridState {
    gridColumns: GridColumn[];
    loading: boolean;
    filterRequest: FilterRequest;
}

export default defineComponent({
    name: 'SuperGrid',
    props: {
        data: {
            type: Object as () => FilterResponse<object>,
            required: true
        },
        status: {
            type: Object as () => FilterRequest,
            required: true
        },
        columns: {
            type: Array as () => GridColumn[],
            required: true
        }
    },
    emits: {
        'get-data': null
    },
    setup (props, { emit }) {
        const localState = reactive<SuperGridState>({
            gridColumns: props.columns,
            loading: false,
            filterRequest: props.status
        });
        const totalPages = computed(() => Math.ceil(props.data.totalRecords / localState.filterRequest.take));
        const pageNumbers = computed(() => {
            const calculatedPageNumbers: number[] = Array.from(Array(totalPages.value + 1).keys());
            let results: number[] = [];

            calculatedPageNumbers.shift();

            if (calculatedPageNumbers.length) {
                let startPage = 0;
                let endPage = 3;

                if (localState.filterRequest.pageNumber === totalPages.value || localState.filterRequest.pageNumber === totalPages.value - 1) {
                    startPage = totalPages.value - 3;
                }
                else {
                    startPage = localState.filterRequest.pageNumber - 1;
                }

                endPage = startPage + 3;

                results = calculatedPageNumbers.slice(startPage, endPage);
            }

            return results;
        });
        const pageSizes = [10, 20, 50, 100];

        watch(() => props.data, () => {
            localState.loading = false;
        }, {
            deep: true
        });

        function SetRequestFilters (): void {
            localState.gridColumns.forEach((column: GridColumn) => {
                if (typeof column.filter !== 'undefined' && typeof column.field !== 'undefined' && column.filter !== '') {
                    const defaultFilterOperation: FilterOperation = column.type === 'string' ? FilterOperation.CONTAINS : FilterOperation.EQUAL;

                    localState.filterRequest.filters.push({
                        filterOnColumn: column.field,
                        filterMethod: column.filterOperation ? column.filterOperation : FilterOperation[defaultFilterOperation],
                        filterOperation: column.filterOperation ? FilterOperation[column.filterOperation?.toUpperCase() as keyof typeof FilterOperation] : defaultFilterOperation,
                        filterValue: column.filter.toString()
                    });
                }
            });
        }

        function ApplyFilters (): void {
            localState.filterRequest.filters.forEach((filter: FilterArgs) => {
                const index: number = localState.gridColumns.findIndex(c => c.field === filter.filterOnColumn);

                if (index >= 0) {
                    localState.gridColumns[index].filter = filter.filterValue;
                }
            });
        }

        function GetGridData (): void {
            localState.loading = true;

            setTimeout(() => {
                SetRequestFilters();

                emit('get-data', localState.filterRequest);
            }, 50);
        }

        function SetFilterOperation (column: GridColumn, value: string): void {
            column.filterOperation = value;

            GetGridData();
        }

        function SetSort (field: string | undefined): void {
            if (typeof field !== 'undefined') {
                if (localState.filterRequest.sortingDetails === null || localState.filterRequest.sortingDetails.sortOnColumn !== field) {
                    localState.filterRequest.sortingDetails = {
                        sortOnColumn: field,
                        sortByAscending: true
                    };
                }
                else if (localState.filterRequest.sortingDetails.sortOnColumn === field) {
                    if (localState.filterRequest.sortingDetails.sortByAscending === true) {
                        localState.filterRequest.sortingDetails.sortByAscending = false;
                    }
                    else {
                        localState.filterRequest.sortingDetails = null;
                    }
                }
                else {
                    localState.filterRequest.sortingDetails = null;
                }

                GetGridData();
            }
        }

        function SetPage (pageNumber: number): void {
            localState.filterRequest.pageNumber = pageNumber;

            GetGridData();
        }

        function SetPageSize (pageSize: number): void {
            localState.filterRequest.take = pageSize;
            localState.filterRequest.pageNumber = 1;

            GetGridData();
        }

        function ResetSortAndFilters (): void {
            localState.filterRequest.sortingDetails = null;
            localState.filterRequest.filters = [];

            localState.gridColumns.forEach((column: GridColumn) => {
                column.filter = undefined;
            });

            GetGridData();
        }

        function FindMatchingFilterMethod (column: GridColumn): FilterMethod {
            const fallbackFilterMethod: FilterMethod = column.type === 'string' ? defaultStringFilterMethod : defaultFilterMethod;
            const matchingFilterMethod: FilterMethod | undefined = typeof column.filterOperation !== 'undefined' ? filterMethods.find(f => f.method === column.filterOperation) : fallbackFilterMethod;

            return typeof matchingFilterMethod !== undefined ? matchingFilterMethod as FilterMethod : fallbackFilterMethod;
        }

        onMounted(() => {
            ApplyFilters();

            GetGridData();
        });

        return {
            ...toRefs(localState),
            pageNumbers,
            pageSizes,
            totalPages,
            filterMethods,
            FindMatchingFilterMethod,
            SetFilterOperation,
            SetSort,
            SetPage,
            SetPageSize,
            ResetSortAndFilters,
            getGridData: GetGridData
        };
    }
});
