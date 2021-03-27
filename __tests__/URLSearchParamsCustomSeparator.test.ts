import URLSearchParamsCustomSeparator from '../src/URLSearchParamsCustomSeparator';

describe('文字列取得', () => {
	test('区切り文字の設定', () => {
		const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge?foo=1&bar=2;baz=3;qux=4:quux=5', [';', ':']);
		expect(urlSearchParamsCustomSeparator.toString()).toBe('foo=1&bar=2&baz=3&qux=4&quux=5');
	});
	test('クエリー空', () => {
		const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge?', [';']);
		expect(urlSearchParamsCustomSeparator.toString()).toBe('');
	});
	test('クエリーなし', () => {
		const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge', [';']);
		expect(urlSearchParamsCustomSeparator.toString()).toBe('');
	});
});

describe('URLSearchParams() 取得', () => {
	test('区切り文字の設定', () => {
		const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge?foo=1&bar=2;baz=3;qux=4:quux=5', [';', ':']);
		expect(urlSearchParamsCustomSeparator.getURLSearchParamsObject().toString()).toBe('foo=1&bar=2&baz=3&qux=4&quux=5');
	});
	test('クエリー空', () => {
		const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge?', [';']);
		expect(urlSearchParamsCustomSeparator.getURLSearchParamsObject().toString()).toBe('');
	});
	test('クエリーなし', () => {
		const urlSearchParamsCustomSeparator = new URLSearchParamsCustomSeparator('/hoge', [';']);
		expect(urlSearchParamsCustomSeparator.getURLSearchParamsObject().toString()).toBe('');
	});
});
