import { FilterMethod } from '@/types/FilterMethod';

export const defaultFilterMethod: FilterMethod = {
    method: 'equal',
    icon: '&equals;',
    description: 'Equals',
    allowedTypes: ['number', 'string']
};

export const defaultStringFilterMethod: FilterMethod = {
    method: 'contains',
    icon: 'a<strong>b</strong>c',
    description: 'Contains',
    allowedTypes: ['string']
};

export const filterMethods: FilterMethod[] = [
    defaultStringFilterMethod,
    {
        method: 'notcontains',
        icon: '<s>abc</s>',
        description: 'Does not contain',
        allowedTypes: ['string']
    },
    {
        method: 'startswith',
        icon: '<strong>ab</strong>c',
        description: 'Starts with',
        allowedTypes: ['string']
    },
    {
        method: 'endswith',
        icon: 'a<strong>bc</strong>',
        description: 'Ends with',
        allowedTypes: ['string']
    },
    defaultFilterMethod,
    {
        method: 'notequal',
        icon: '&#8800;',
        description: 'Does not equal',
        allowedTypes: ['number', 'string']
    },
    {
        method: 'lessthan',
        icon: '&lt;',
        description: 'Less than',
        allowedTypes: ['number']
    },
    {
        method: 'greaterthan',
        icon: '&gt;',
        description: 'Greater than',
        allowedTypes: ['number']
    },
    {
        method: 'equalorlessthan',
        icon: '&le;',
        description: 'Less than or equal',
        allowedTypes: ['number']
    },
    {
        method: 'equalorgreaterthan',
        icon: '&ge;',
        description: 'Greater than or equal',
        allowedTypes: ['number']
    }
];
