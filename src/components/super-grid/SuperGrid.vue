<script lang="ts" src="./SuperGridLogic.ts"></script>
<style scoped src="./SuperGrid.css"></style>

<template>
    <div class="uk-width-1-1 uk-margin-small-bottom uk-text-right">
        <button data-buttoncontext="clearfiltersgrid" class="uk-button uk-button-default uk-button-small" @click="ResetSortAndFilters">
            Clear Grid Options
        </button>
    </div>

    <div class="uk-width-1-1 grid-wrapper" style="overflow-x: auto;" :data-loading="loading">
        <table class="uk-table uk-table-divider uk-table-small uk-table-striped">
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index">
                        <span v-if="column.type !== 'slot'" class="pointer" @click="SetSort(column.field)">
                            {{ column.caption }}

                            <span v-show="filterRequest.sortingDetails && filterRequest.sortingDetails.sortOnColumn === column.field && filterRequest.sortingDetails.sortByAscending === true" uk-icon="icon: chevron-down;"></span>
                            <span v-show="filterRequest.sortingDetails && filterRequest.sortingDetails.sortOnColumn === column.field && filterRequest.sortingDetails.sortByAscending === false" uk-icon="icon: chevron-up;"></span>
                        </span>
                        <span v-else>
                            {{ column.caption }}
                        </span>
                    </th>
                </tr>

                <tr>
                    <th v-for="(column, index) in columns" :key="index">
                        <div class="uk-flex uk-width-1-1 border-d7 border-round-3">
                            <div v-if="column.type !== 'boolean' && column.type !== 'slot'" class="uk-inline uk-width-auto border-d7 removeborder-top removeborder-bottom removeborder-left uk-text-notransform">
                                <a class="grid-filter-icon removeborder-bottom"
                                   :title="(column.filterOperation ? FindMatchingFilterMethod(column).description : '')"
                                   uk-icon="settings"></a>

                                <div uk-dropdown="mode: hover">
                                    <strong>Current Filter Type:</strong>

                                    <div class="uk-margin-small-bottom">
                                        {{ FindMatchingFilterMethod(column).description }}
                                    </div>

                                    <strong>Available Filter Types:</strong>
                                    <br>
                                    <a v-for="(filterMethod, filterMethodIndex) in filterMethods.filter(e => e.allowedTypes.includes(column.type))"
                                       :key="filterMethodIndex"
                                       class="uk-display-block uk-text-notransform removeborder-bottom"
                                       :title="filterMethod.description"
                                       :data-selected="column.filterOperation === filterMethod.method"
                                       @click="SetFilterOperation(column, filterMethod.method)">{{ filterMethod.description }}</a>
                                </div>
                            </div>
                            <!-- Booleans -->
                            <select v-if="column.type === 'boolean'" v-model="column.filter" class="uk-select uk-width-expand removeborder-top removeborder-bottom removeborder-left removeborder-right" @change="getGridData">
                                <option :value="undefined"></option>

                                <option value="true">
                                    True
                                </option>

                                <option value="false">
                                    False
                                </option>
                            </select>
                            <!-- Numbers -->
                            <input v-else-if="column.type === 'number'"
                                   v-model="column.filter"
                                   class="uk-input uk-width-expand removeborder-top removeborder-bottom removeborder-left removeborder-right"
                                   type="number"
                                   @blur="getGridData">
                            <!-- Strings and numbers -->
                            <input v-else-if="column.type !== 'slot'"
                                   v-model="column.filter"
                                   class="uk-input uk-width-expand removeborder-top removeborder-bottom removeborder-left removeborder-right"
                                   type="text"
                                   @blur="getGridData">
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                <template v-if="data && data.results.length">
                    <tr v-for="(record, recordIndex) in data.results" :key="recordIndex">
                        <td v-for="(column, columnIndex) in columns" :key="columnIndex" :data-columnname="column.caption">
                            <!-- Slot contents -->
                            <slot v-if="column.type === 'slot'" :name="column.caption.replace(/\W/g, '')" v-bind="{ column, record }"></slot>
                            <!-- Booleans -->
                            <input v-else-if="column.type === 'boolean' && typeof column.field !== 'undefined'"
                                   class="uk-checkbox"
                                   type="checkbox"
                                   :checked="record[column.field]"
                                   disabled>
                            <!-- Strings and numbers -->
                            <template v-else-if="column.field">
                                {{ record[column.field] }}
                            </template>
                        </td>
                    </tr>
                </template>
                <tr v-else>
                    <td :colspan="columns.length">
                        <div class="uk-width-1-1 uk-text-center uk-margin-large-bottom uk-margin-large-top">
                            <div class="uk-margin-bottom">
                                <strong>No data to show</strong>
                            </div>
                            <div v-if="columns.filter(e => e.filter && e.filter !== '').length > 0"
                                 class="uk-margin-bottom">
                                We noticed you have some filters present. Please expand or clear your filters.
                            </div>
                            <div v-else
                                 class="uk-margin-bottom">
                                There's no data to show in this grid.
                            </div>
                            <div v-if="columns.filter(e => e.filter && e.filter !== '').length > 0"
                                 class="uk-width-1-1">
                                <button class="uk-button uk-button-default uk-button-small" @click="ResetSortAndFilters">
                                    Clear Grid Options
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="uk-width-1-1 uk-text-right">
        <div v-if="data && data.results.length && filterRequest"
             class="uk-width-auto uk-flex uk-float-right background-f4 uk-border-rounded border-eee uk-text-small uk-box-shadow-small">
            <ul class="uk-pagination uk-padding-small uk-float-left uk-margin-remove-left uk-margin-remove-top uk-margin-remove-bottom uk-text-small">
                <li class="uk-margin-remove-left">
                    <span href="#">Page {{ filterRequest.pageNumber }} of {{ totalPages }}: </span>
                </li>
                <li v-if="filterRequest.pageNumber > 1">
                    <a class="removeborder-bottom" @click.prevent="() => SetPage(1)">
                        <span uk-icon="chevron-double-left"></span>
                    </a>
                </li>
                <li v-if="filterRequest.pageNumber > 1">
                    <a class="removeborder-bottom" @click.prevent="() => SetPage(filterRequest.pageNumber - 1)">
                        <span uk-pagination-previous></span>
                    </a>
                </li>

                <li v-for="(pageNo, index) in pageNumbers"
                    :key="index"
                    :class="filterRequest.pageNumber === pageNo ? 'uk-active' : ''">
                    <a class="removeborder-bottom" @click.prevent="() => SetPage(pageNo)">{{ pageNo }}</a>
                </li>

                <li v-if="filterRequest.pageNumber < totalPages">
                    <a class="removeborder-bottom" @click.prevent="() => SetPage(filterRequest.pageNumber + 1)">
                        <span uk-pagination-next></span>
                    </a>
                </li>
                <li v-if="filterRequest.pageNumber < totalPages">
                    <a class="removeborder-bottom" @click.prevent="() => SetPage(totalPages)">
                        <span uk-icon="chevron-double-right"></span>
                    </a>
                </li>
            </ul>

            <ul class="uk-pagination uk-padding-small uk-float-left uk-margin-remove-left uk-margin-remove-top uk-margin-remove-bottom border-eee removeborder-top removeborder-bottom uk-text-small">
                <li class="uk-margin-remove-left">
                    <span href="#">Page size: </span>
                </li>
                <li v-for="(pageSize, index) in pageSizes"
                    :key="index"
                    :class="filterRequest.take === pageSize ? 'uk-active' : ''">
                    <a class="removeborder-bottom" @click.prevent="() => SetPageSize(pageSize)">
                        {{ pageSize }}
                    </a>
                </li>
            </ul>

            <span class="uk-padding-small uk-float-left">
                Total Records: {{ data.totalRecords }}
            </span>
        </div>
    </div>
</template>