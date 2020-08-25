export declare interface FilterArgs {
    filterOnColumn: string;
    filterMethod: string;
    filterOperation: number;
    filterValue: string;
}

export declare interface SortArgs {
    sortOnColumn: string;
    sortByAscending: boolean;
}

export declare interface FilterRequest {
    filters: FilterArgs[];
    pageNumber: number;
    take: number;
    sortingDetails: SortArgs | null;
}