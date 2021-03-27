/**
 * Support characters other than "&" as URL query separator
 */
export default class {
	#search = '';

	/**
	 * @param {string} path - Full string or substring of URL (e.g. /hoge?foo=1&bar=2;baz=3)
	 * @param {Array} separators - URL query separator
	 */
	constructor(path: string, separators: string[]) {
		const searchIndex = path.indexOf('?');
		if (searchIndex === -1) {
			return;
		}

		let search = path.substring(searchIndex + 1);
		if (search === '') {
			return;
		}

		for (const separator of separators) {
			search = search.replace(new RegExp(separator, 'g'), '&');
		}
		this.#search = search;
	}

	/**
	 * Returns a URL query with the separator unified to "&". (e.g. ?foo=1&bar=2;baz=3 → foo=1&bar=2&baz=3)
	 *
	 * @returns {string} - URL query
	 */
	toString(): string {
		return this.#search;
	}

	/**
	 * Returns a `URLSearchParams` object.
	 *
	 * @returns {object} - `URLSearchParams` object
	 */
	getURLSearchParamsObject(): URLSearchParams {
		return new URLSearchParams(this.#search);
	}
}
