import { expect, test } from "vitest";
import { JSONSchemaMarkdownDoc } from "json-schema-doc";

test("valueBool true", () => {
    expect(new JSONSchemaMarkdownDoc({}).valueBool(true)).toBe("true");
});

test("valueBool false", () => {
    expect(new JSONSchemaMarkdownDoc({}).valueBool(false)).toBe("false");
});

test('valueBool "true" (string)', () => {
    expect(new JSONSchemaMarkdownDoc({}).valueBool("true")).toBe("true");
});

test('valueBool "false" (string)', () => {
    expect(new JSONSchemaMarkdownDoc({}).valueBool("false")).toBe("false");
});

test("valueBool 1 (int)", () => {
    expect(new JSONSchemaMarkdownDoc({}).valueBool(1)).toBe("true");
});

test("valueBool 0 (int)", () => {
    expect(new JSONSchemaMarkdownDoc({}).valueBool(0)).toBe("false");
});
