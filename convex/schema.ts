import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  uiresources: defineTable({
    title: v.string(),
    description: v.string(),
    link: v.string(),
    imageUrl: v.string(),
    approved: v.boolean(),
    userId: v.string(),
    requestedBy: v.string(),
    submittedBy: v.optional(v.string()),
    submittedByPfp: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
  }),
});
