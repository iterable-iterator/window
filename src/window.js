import {iter} from '@iterable-iterator/iter';
import {range} from '@iterable-iterator/range';

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
	// Could have an implementation using a deque
	// that doesn't slice (and thus allocate a new
	// vector everytime). Though the yield object
	// could not be modified by the caller in that case.

	const iterator = iter(iterable);

	let tuple = [];

	// eslint-disable-next-line no-unused-vars
	for (const i of range(n)) {
		const current = iterator.next();

		if (current.done) {
			return;
		}

		tuple.push(current.value);
	}

	yield tuple;

	for (const value of iterator) {
		tuple = tuple.slice(1);
		tuple.push(value);
		yield tuple;
	}
}
