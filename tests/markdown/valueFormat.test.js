import { expect, test } from 'vitest'
import { JSONSchemaMarkdownDoc } from "json-schema-doc";

test("valueFormat \"true\" (string | return boolValue)", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat("true")).toBe("*true*");
});

test("valueFormat \"false\" (string | return boolValue)", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat("false")).toBe("*false*");
});

test("valueFormat true (bool)", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat(true)).toBe("*true*");
});

test("valueFormat false (bool)", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat(false)).toBe("*false*");
});

test("valueFormat string", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat("test")).toBe("*\"test\"*");
});

test("valueFormat number", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat(10)).toBe("`10`");
});

test("valueFormat null", () => {
    expect((new JSONSchemaMarkdownDoc({})).valueFormat(null)).toBe("`null`");
});