import { core } from '@/main';
import 'jest';

const TESTPARAMNAME: string = 'doesthiswork';
const TESTPARAMVALUE: string = 'yes';
const TESTURL: string = `http://www.citruslime.com/${TESTPARAMNAME}?=${TESTPARAMVALUE}`;

describe('Test URL Param Function', () => {

    test('Is present in core import', () => {
        expect(core.UrlParams).toBeTruthy();
    });

    test('Function returns the correct value', () => {
        expect(core.UrlParams(TESTURL, TESTPARAMNAME)).toEqual(TESTPARAMVALUE);
    });

    test('Function returns empty string when param not in url', () => {
        expect(core.UrlParams(TESTURL, 'notinurl')).toEqual('');
    });

});