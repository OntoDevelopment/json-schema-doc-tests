import { expect, test } from 'vitest'
import { JSONSchemaMarkdownDoc } from "json-schema-doc-ts";

test("bold without id", () => {
    expect((new JSONSchemaMarkdownDoc({})).bold("test")).toBe("**test**");
});

test("bold with id", () => {
    expect((new JSONSchemaMarkdownDoc({})).bold("test", "test-id")).toBe(
        '<b id="test-id">test</b>'
    );
});

test("bold with id and useHtml false", () => {
    expect(
        (new JSONSchemaMarkdownDoc({})).setUseHtml(false).bold("test", "test-id")
    ).toBe("**test**");
});

test("underline without id", () => {
    expect((new JSONSchemaMarkdownDoc({})).underline("test")).toBe(
        '<u id="test">test</u>'
    );
});

test("underline with id", () => {
    expect((new JSONSchemaMarkdownDoc({})).underline("test", "test-id")).toBe(
        '<u id="test-id">test</u>'
    );
});

test("underline with id and useHtml false", () => {
    expect(
        (new JSONSchemaMarkdownDoc({}))
            .setUseHtml(false)
            .underline("test", "test-id")
    ).toBe("test");
});
