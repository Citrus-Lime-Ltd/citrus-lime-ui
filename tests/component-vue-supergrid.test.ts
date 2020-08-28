import { mount } from '@vue/test-utils';

import { GridColumn } from '@/types/GridColumn';
import { FilterRequest } from '@/types/FilterRequest';
import { superGrid } from '@/main';
import 'jest';

jest.mock('uikit');

interface MockData {
    Uid: number;
    Title: string;
    AnotherString: string;
};
const MockTheData = () : Array<MockData> => {
    let arrToReturn : Array<MockData> = [];

    [...Array(50).keys()].forEach(element => {
        arrToReturn.push({
            Uid: element,
            Title: `The title ${element}`,
            AnotherString: `I am a longer string ${element}`
        });
    });

    return arrToReturn;
};
const MOCKDATA_ARR: Array<MockData> = [
    ...MockTheData()
];

const MOCKSTATUS: FilterRequest = {
    filters: [],
    pageNumber: 1,
    take: 10,
    sortingDetails: null
};

const MOCKCOLUMNS: GridColumn[] = [
    {
        field: 'Uid',
        caption: 'The ID',
        type: 'string'
    },
    {
        field: 'Title',
        caption: 'The Title',
        type: 'string'
    },
    {
        field: 'AnotherString',
        caption: 'The Other String',
        type: 'string'
    }
];

describe('Component', () => {
    
    test('Imports with main.ts file', () => {
        expect(superGrid).toBeTruthy();
    });

    test('SuperGrid can be mounted', () => {

        const mountOptions = {
            props: {
              data: {
                  results: MOCKDATA_ARR,
                  totalRecords: 50
              },
              status: MOCKSTATUS,
              columns: MOCKCOLUMNS
            }
          };

        const wrapper = mount(superGrid, mountOptions);

        expect(wrapper.findComponent(superGrid)).toBeTruthy();
    });

});