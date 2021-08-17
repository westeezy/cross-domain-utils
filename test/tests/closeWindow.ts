import { assert } from 'chai';

import { closeWindow } from '../../src';
import { getSameDomainWindow } from '../win';

describe('closeWindow', () => {
    it('will call window.close', () => {
        let fnCalled = false;
        const win = getSameDomainWindow({
            close: () => {
                fnCalled = true;
            }
        });
        const expectedResult = true;
        // @ts-ignore
        closeWindow(win);
        assert(
            // @ts-ignore expected result never changes. This test might not be doing anything
            fnCalled === expectedResult,
            `Expected window.close to be called`
        );
    });
});
