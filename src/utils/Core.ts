import { Core } from '@/types/Core';
import numberFormats from '@/utils/i18n/NumberFormats';
import translations from '@/utils/i18n/Translations';
import statusCodes from '@/utils/StatusCodes';

export function SetupBroadcastChannel (broadcastChannelName: string): BroadcastChannel {
    return new BroadcastChannel(broadcastChannelName);
}

export const core: Core = {
    i18n: {
        numberFormats: numberFormats,
        translations: translations
    },
    broadcastChannels: SetupBroadcastChannel,
    statusCodes: statusCodes
};