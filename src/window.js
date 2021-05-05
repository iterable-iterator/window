import assert from 'assert';
import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {_take} from '@iterable-iterator/slice';
import {deque} from '@data-structure/deque';

/**
 * Yields tuples that contain the current element of the input iterable and the
 * next <code>n-1</code> elements of the input iterable.
 *
 * @example
 * window( 2, range( 100 ) ) ;
 * // is equivalent to
 * zip( range( 100 ) , range( 1 , 100 ) ) ;
 *
 * @param {number} n - The window size.
 * @param {Iterable} iterable - The input iterable.
 * @returns {IterableIterator<Array>}
 */
export default function* window(n, iterable) {
	assert(Number.isInteger(n) && n > 0);

	const iterator = iter(iterable);

	const tuple = deque(_take(iterator, n), n);

	if (tuple.length < n) return;

	yield list(tuple);

	for (const value of iterator) {
		tuple.append(value);
		yield list(tuple);
	}
}
