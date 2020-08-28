import superGridComponent from '@/components/super-grid/SuperGrid.vue';
import uikitCore from 'uikit';

export { core, Core } from './core';
export * from './core/StringExtensions';
export { FilterMethod, filterMethods } from './FilterMethod';
export { FilterOperation } from './FilterOperation';
export { FilterArgs, FilterRequest, SortArgs } from './FilterRequest';
export { FilterResponse } from './FilterResponse';
export { GridColumn } from './GridColumn';

declare type UIkit = typeof uikitCore;
export declare const uikit: UIkit;

declare type SuperGrid = typeof superGridComponent;
export declare const superGrid: SuperGrid;