import uikit from 'uikit';
import { use } from 'uikit';
import * as icons from 'uikit/dist/js/uikit-icons';

uikit.use(icons);

export { default as superGrid } from '@/components/super-grid/SuperGrid.vue';
export { core } from '@/utils/Core';
export * from '@/utils/extensions/String';
export { filterMethods } from '@/utils/FilterMethods';
export { FilterOperation } from '@/utils/FilterOperation';
export { default as uikit } from 'uikit';
