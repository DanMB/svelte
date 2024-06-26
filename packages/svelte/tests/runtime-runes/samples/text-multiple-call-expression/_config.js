import { flushSync } from 'svelte';
import { test } from '../../test';
import { log } from './log.js';

export default test({
	before_test() {
		log.length = 0;
	},

	async test({ assert, target }) {
		const [b1, b2] = target.querySelectorAll('button');

		flushSync(() => {
			b1.click();
		});

		flushSync(() => {
			b2.click();
		});

		assert.deepEqual(log, ['x', 'y', 'x', 'y']);
	}
});
