import * as UIkit from 'uikit';
import * as icons from 'uikit/dist/js/uikit-icons';

UIkit.use(icons);

export { default as superGrid } from '@/components/SuperGrid/SuperGrid.vue';
export { core } from '@/utils/Core';
export { filterMethods } from '@/utils/FilterMethods';
export { FilterOperation } from '@/utils/FilterOperation';

export const uikit = UIkit;
