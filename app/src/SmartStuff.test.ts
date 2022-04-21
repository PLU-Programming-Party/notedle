import { expect, test } from '@jest/globals';
import { makePrettyColors } from './SmartStuff';


test('if its pretty', () => {
    expect(makePrettyColors(['A', 'B', 'C'], ['A', 'B', 'C'])).toEqual(['green', 'green', 'green']);
});

test('so close', () => {
    expect(makePrettyColors(['A', 'B', 'C'], ['A', 'B', 'D'])).toEqual(['green', 'green', 'grey']);
});

test('sorta kinda', () => {
    expect(makePrettyColors(['A', 'B', 'C'], ['A', 'A', 'A'])).toEqual(['green', 'grey', 'grey']);
});

test('sorta kinda sorta', () => {
    expect(makePrettyColors(['C', 'B', 'A'], ['A', 'A', 'A'])).toEqual(['grey', 'grey', 'green']);
});

test('nahhh', () => {
    expect(makePrettyColors(['A', 'B', 'C'], ['D', 'D', 'D'])).toEqual(['grey', 'grey', 'grey']);
});

test('bagbagbag', () => {
    expect(makePrettyColors(['B', 'A', 'G'], ['B', 'A', 'G'])).toEqual(['green', 'green', 'green']);
});

test('right place wrong time', () => {
    expect(makePrettyColors(['A', 'B', 'C'], ['B', 'C', 'A'])).toEqual(['yellow', 'yellow', 'yellow']);
});