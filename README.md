# Support characters other than "&" as URL query separator.

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Furlsearchparams-custom-separator.svg)](https://badge.fury.io/js/%40saekitominaga%2Furlsearchparams-custom-separator)
[![Build Status](https://www.travis-ci.com/SaekiTominaga/urlsearchparams-custom-separator.svg)](https://www.travis-ci.com/SaekiTominaga/urlsearchparams-custom-separator)
[![Coverage Status](https://coveralls.io/repos/github/SaekiTominaga/urlsearchparams-custom-separator/badge.svg)](https://coveralls.io/github/SaekiTominaga/urlsearchparams-custom-separator)

The URL query separator uses "&", but needs to be escaped in HTML and XML. [HTML 4.01 - Appendix B.2.2](https://www.w3.org/TR/html4/appendix/notes.html#h-B.2.2) had recommended support the use of ";" in place of "&".

This feature supports arbitrary separators other than "&" and allows them to be used in [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) objects, etc.

## Examples

```JavaScript
import URLSearchParamsCustomSeparator from '@saekitominaga/urlsearchparams-custom-separator';

const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge?foo=1&bar=2;baz=3;qux=4:quux=5', [';', ':']);
urlSearchParamsCustomSeparator.toString(); // foo=1&bar=2&baz=3&qux=4&quux=5
urlSearchParamsCustomSeparator.getURLSearchParamsObject().get('baz'); // 3
```

## Constructor

```TypeScript
new URLSearchParamsCustomSeparator(path: string, separators: string[])
```

### Parameters

<dl>
<dt><code>path</code></dt>
<dd>Full string or substring of URL (e.g. /hoge?foo=1&bar=2;baz=3)</dd>
<dt><code>separators</code></dt>
<dd>URL query separator</dd>
</dl>

## Methods

<dl>
<dt><code>toString(): string</code></dt>
<dd>Returns a URL query with the separator unified to "&". (e.g. ?foo=1&bar=2;baz=3 → foo=1&bar=2&baz=3)</dd>
<dt><code>getURLSearchParamsObject(): URLSearchParams</code></dt>
<dd>Returns a `URLSearchParams` object.</dd>
</dl>
