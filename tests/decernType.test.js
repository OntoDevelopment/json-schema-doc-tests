import { expect, test } from 'vitest'
import { JSONSchemaMarkdownDoc } from "json-schema-doc-ts";

test("determineType array", () => {
    const schema = { items: { type: "string" } };
    expect(new JSONSchemaMarkdownDoc(schema).determineType(schema)).toStrictEqual([
        "array",
    ]);
});

test("determineType number", () => {
    const schema = { maximum: 10 };
    expect(new JSONSchemaMarkdownDoc(schema).determineType(schema)).toStrictEqual([
        "number",
    ]);
});

test("determineType object", () => {
    const schema = { properties: { name: { type: "string" } } };
    expect(new JSONSchemaMarkdownDoc(schema).determineType(schema)).toStrictEqual([
        "object",
    ]);
});

test("determineType string", () => {
    const schema = { maxLength: 10 };
    expect(new JSONSchemaMarkdownDoc(schema).determineType(schema)).toStrictEqual([
        "string",
    ]);
});

test("determineType number, string", () => {
    const schema = { maxLength: 10, maximum: 10 };
    expect(new JSONSchemaMarkdownDoc(schema).determineType(schema)).toStrictEqual([
        "number",
        "string",
    ]);
});

test("determineType on custom-type", () => {
    const schema = { type: "custom-type" };
    expect(new JSONSchemaMarkdownDoc(schema).determineType(schema)).toStrictEqual([
        "custom-type",
    ]);
});

// there are no invalid types per json-schema
