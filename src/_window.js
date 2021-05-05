import assert from 'assert';
import {_take} from '@iterable-iterator/slice';
import {deque} from '@data-structure/deque';

/**
 * Repeatedly yields the same deque that is updated to contain the current
 * element of the input iterable iterator and the next <code>n-1</code>
 * elements of the input iterable iterator.
 *
 * @example
 * window( 2, range( 100 ) ) ;
 * // is equivalent to
 * zip( range( 100 ) , range( 1 , 100 ) ) ;
 *
 * @param {number} n - The window size.
 * @param {IterableIterator} iterable - The input iterable.
 * @returns {IterableIterator}
 */
export default function* _window(n, iterator) {
	assert(Number.isInteger(n) && n > 0);

	const tuple = deque(_take(iterator, n), n);

	if (tuple.length < n) return;

	yield tuple;

	for (const value of iterator) {
		yield tuple.append(value);
	}
}
