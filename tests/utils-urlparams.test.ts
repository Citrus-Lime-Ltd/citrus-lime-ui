import { core } from '@/utils/Core';
import 'jest';

const TESTPARAMNAME = 'doesthiswork';
const TESTPARAMVALUE = 'yes';
const TESTURL = `https://www.citruslime.com/?${TESTPARAMNAME}=${TESTPARAMVALUE}`;

describe('Test URL Param Function', () => {

    test('Is present in core import', () => {
        expect(core.UrlParams).toBeTruthy();
    });

    test('Function returns the correct value', () => {
        expect(core.UrlParams(TESTURL, TESTPARAMNAME)).toBe(TESTPARAMVALUE);
    });

    test('Function returns empty string when param not in url', () => {
        expect(core.UrlParams(TESTURL, 'notinurl')).toBe('');
    });

});