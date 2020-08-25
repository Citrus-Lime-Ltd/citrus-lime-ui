import { NumberFormats } from '@/types/Core/NumberFormats';

const numberFormats: NumberFormats = {
    'en-US': {
        currency: {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol',
            currencySymbol: '$'
        }
    },
    'en-GB': {
        currency: {
            style: 'currency',
            currency: 'GBP',
            currencyDisplay: 'symbol',
            currencySymbol: '£'
        }
    },
    'de-DE': {
        currency: {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol',
            currencySymbol: '€'
        }
    },
    'fr-FR': {
        currency: {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol',
            currencySymbol: '€'
        }
    },
    'en-IE': {
        currency: {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol',
            currencySymbol: '€'
        }
    },
    'en-AU': {
        currency: {
            style: 'currency',
            currency: 'AUD',
            currencyDisplay: 'symbol',
            currencySymbol: '$'
        }
    },
    'en-NZ': {
        currency: {
            style: 'currency',
            currency: 'NZD',
            currencyDisplay: 'symbol',
            currencySymbol: '$'
        }
    },
    'en-CA': {
        currency: {
            style: 'currency',
            currency: 'CAD',
            currencyDisplay: 'symbol',
            currencySymbol: '$'
        }
    }
};

export default numberFormats;
