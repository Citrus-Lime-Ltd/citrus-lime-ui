import '@/utils/Core';
import 'jest';

describe('Test String Extensions', () => {

    test('Test camelcase to sentence case', () => {
        expect('iAmTestingThis'.CamelCaseToSentence()).toEqual('I Am Testing This');
    });

    test('Test trim characters', () => {
        expect('/test/'.TrimChar('/')).toEqual('test');
    });

    test('Test trim string to length (without ellipsis)', () => {
        expect('testing'.TrimToLength(4, false)).toEqual('test');
    });

    test('Test trim string to length (with ellipsis)', () => {
        expect('trim string to length with ellipsis'.TrimToLength(30, true)).toEqual('trim string to length with ...');
    });

    test('Test to title case', () => {
        expect('i am testing this'.ToTitleCase()).toEqual('I Am Testing This');
    });

});