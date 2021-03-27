var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _search;
/**
 * Support characters other than "&" as URL query separator
 */
export default class {
    /**
     * @param {string} path - Full string or substring of URL (e.g. /hoge?foo=1&bar=2;baz=3)
     * @param {Array} separators - URL query separator
     */
    constructor(path, separators) {
        _search.set(this, '');
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
        __classPrivateFieldSet(this, _search, search);
    }
    /**
     * Returns a URL query with the separator unified to "&". (e.g. ?foo=1&bar=2;baz=3 → foo=1&bar=2&baz=3)
     *
     * @returns {string} - URL query
     */
    toString() {
        return __classPrivateFieldGet(this, _search);
    }
    /**
     * Returns a `URLSearchParams` object.
     *
     * @returns {object} - `URLSearchParams` object
     */
    getURLSearchParamsObject() {
        return new URLSearchParams(__classPrivateFieldGet(this, _search));
    }
}
_search = new WeakMap();
//# sourceMappingURL=URLSearchParamsCustomSeparator.js.map