import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';

import _window from './_window.js';

/**
 * Yields arrays that contain the current element of the input iterable and the
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
const window = (n, iterable) => map(list, _window(n, iter(iterable)));
export default window;
