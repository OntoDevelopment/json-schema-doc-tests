import { expect, test } from 'vitest'
import { JSONSchemaMarkdownDoc } from "json-schema-doc-ts";

test("hasProperty name", () => {
    const schema = { name: "test" };
    expect((new JSONSchemaMarkdownDoc(schema)).hasProperty(schema, "name")).toBe(
        true
    );
});

test("hasProperty age (missing)", () => {
    const schema = { name: "test" };
    expect((new JSONSchemaMarkdownDoc(schema)).hasProperty(schema, "age")).toBe(
        false
    );
});
