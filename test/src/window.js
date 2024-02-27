import test from 'ava';

import {range} from '@iterable-iterator/range';
import {zip} from '@iterable-iterator/zip';
import {list} from '@iterable-iterator/list';

import {window} from '#module';

test('compare to zip output', (t) => {
	const A = window(2, range(100));
	const B = zip(range(100), range(1, 100));
	t.deepEqual(list(A), list(B));
});

test('n !| N', (t) => {
	const C = window(3, range(4));
	t.deepEqual(list(C), [
		[0, 1, 2],
		[1, 2, 3],
	]);
});

test('window larger than input', (t) => {
	const D = window(3, range(2));
	t.deepEqual(list(D), [], 'empty');
});

test('string input', (t) => {
	const iterable = window(2, 'abcde');
	t.deepEqual(
		list(iterable),
		[
			['a', 'b'],
			['b', 'c'],
			['c', 'd'],
			['d', 'e'],
		],
		'empty',
	);
});
