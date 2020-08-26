export declare interface Translations {
    'en-GB': Translation;
    'de-DE': Translation;
    'fr-FR': Translation;
}

export declare interface Translation {
    message: TranslationOptions;
}

export declare interface TranslationOptions {
    hello: string;
    help: string;
    howto: string;
    support: string;
    feedback: string;
    website: string;
    login: string;
    logout: string;
}

export declare const translations: Translations;
