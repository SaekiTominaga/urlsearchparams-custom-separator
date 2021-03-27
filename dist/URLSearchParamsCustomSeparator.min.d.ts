/**
 * Support characters other than "&" as URL query separator
 */
export default class {
    #private;
    /**
     * @param {string} path - Full string or substring of URL (e.g. /hoge?foo=1&bar=2;baz=3)
     * @param {Array} separators - URL query separator
     */
    constructor(path: string, separators: string[]);
    /**
     * Returns a URL query with the separator unified to "&". (e.g. ?foo=1&bar=2;baz=3 → foo=1&bar=2&baz=3)
     *
     * @returns {string} - URL query
     */
    toString(): string;
    /**
     * Returns a `URLSearchParams` object.
     *
     * @returns {object} - `URLSearchParams` object
     */
    getURLSearchParamsObject(): URLSearchParams;
}
//# sourceMappingURL=URLSearchParamsCustomSeparator.d.ts.map