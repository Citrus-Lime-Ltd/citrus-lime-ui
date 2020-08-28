import { NumberFormats } from './NumberFormats';
import { StatusCodes } from './StatusCodes';
import { Translations } from './Translations';

export { numberFormats } from './NumberFormats';
export { translations } from './Translations';

export declare interface I18n {
    numberFormats: NumberFormats;
    translations: Translations;
}

export declare interface BroadcastChannels {
    (channelName: string): BroadcastChannel;
}

export declare interface Core {
    i18n: I18n;
    broadcastChannels: BroadcastChannels;
    statusCodes: StatusCodes;
    UrlParams(stringToSearch: string, paramToFind: string): string; 
}
export declare const core: Core;
