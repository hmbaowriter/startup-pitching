import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

/**
 * Documentation 
 * https://www.sanity.io/docs/schema-field-types#e5642a3e8506
 * https://www.sanity.io/docs/schema-types
 * https://www.sanity.io/docs/internationalizing-plugins-ui#8bf4f69b2bde
 */
export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name"
    }
  }
});
