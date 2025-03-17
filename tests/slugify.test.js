import { expect, test } from 'vitest'
import { JSONSchemaMarkdownDoc } from "json-schema-doc-ts";

test('slugify "test"', () => {
    expect((new JSONSchemaMarkdownDoc({})).slugify("test")).toBe("test");
});

test('slugify "test test"', () => {
    expect((new JSONSchemaMarkdownDoc({})).slugify("test test")).toBe("test-test");
});

test('slugify "test-test"', () => {
    expect((new JSONSchemaMarkdownDoc({})).slugify("test-test")).toBe("test-test");
});

test('slugify "test_test"', () => { 
    expect((new JSONSchemaMarkdownDoc({})).slugify("test_test")).toBe("test-test");
});

test('slugify "#test"', () => { 
    expect((new JSONSchemaMarkdownDoc({})).slugify("#test")).toBe("test");
});

test('slugify "test!"', () => {
    expect((new JSONSchemaMarkdownDoc({})).slugify("test!")).toBe("test");
});

test('slugify "test & test"', () => {
    expect((new JSONSchemaMarkdownDoc({})).slugify("test & test")).toBe("test-and-test");
});
