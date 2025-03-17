import { expect, test } from 'vitest'
import { JSONSchemaMarkdownDoc } from "json-schema-doc";

test("hasAnyProperty name", () => {
    const schema = { name: "test" };
    expect(
        (new JSONSchemaMarkdownDoc(schema)).hasAnyProperty(schema, ["name"])
    ).toBe(true);
});

test("hasAnyProperty age (missing)", () => {
    const schema = { name: "test" };
    expect(
        (new JSONSchemaMarkdownDoc(schema)).hasAnyProperty(schema, ["age"])
    ).toBe(false);
});
