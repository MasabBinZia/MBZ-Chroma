import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  uiresources: defineTable({
    title: v.string(),
    description: v.string(),
    link: v.string(),
    imageUrl: v.string(),
    approved: v.boolean(),
    userId: v.string(),
  }),
});