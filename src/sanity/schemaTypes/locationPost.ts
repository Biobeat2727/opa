import { defineField, defineType } from "sanity";

export const locationPost = defineType({
  name: "locationPost",
  title: "Truck location",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Where is the truck?",
      description: 'A short spot name people recognize, e.g. "Bonner Mall parking lot"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      description: "Street address — used for the map and the directions button",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "First day at this spot",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Last day at this spot",
      description: "Leave empty if you'll be here until further notice",
      type: "date",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      description: 'e.g. "11am – 7pm, closed Sunday"',
      type: "string",
    }),
    defineField({
      name: "note",
      title: "Anything else?",
      description: "Optional note — specials, weather plans, events",
      type: "text",
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "startDate" },
  },
});
