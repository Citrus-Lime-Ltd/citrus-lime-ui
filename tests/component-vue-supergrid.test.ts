import { superGrid } from '@/main';
import 'jest';

jest.mock('uikit');

describe('Component', () => {
    test('Imports with main.ts file', () => {
        expect(superGrid).toBeTruthy();
    });
});