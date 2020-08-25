export declare interface NumberFormats {
    'en-US': NumberFormat;
    'en-GB': NumberFormat;
    'de-DE': NumberFormat;
    'fr-FR': NumberFormat;
    'en-IE': NumberFormat;
    'en-AU': NumberFormat;
    'en-NZ': NumberFormat;
    'en-CA': NumberFormat;
}

export declare interface NumberFormat {
    currency: NumberFormatOptions;
}

export declare interface NumberFormatOptions {
    style: 'currency';
    currency: 'GBP' | 'EUR' | 'AUD' | 'NZD' | 'CAD' | 'USD';
    currencyDisplay: 'symbol';
    currencySymbol: '£' | '$' | '€';
}

export declare const numberFormats: NumberFormats;