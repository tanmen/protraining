// 合否判定用
import {expect, test, vi, afterEach} from 'vitest'
import {step1_1, step1_2} from "../step1";

const mockLog = vi.fn();
global.console.log = mockLog;

afterEach(() => {
    mockLog.mockReset();
})

test('step1_1', () => {
    step1_1();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((datum, index) =>
        expect(mockLog).toHaveBeenNthCalledWith(index + 1, datum * 2));
});

test('step1_2', () => {
    step1_2();
    ['竹内', '田中', '鈴木'].forEach((datum, index) =>
        expect(mockLog).toHaveBeenNthCalledWith(index + 1, `${datum}様`))
})
