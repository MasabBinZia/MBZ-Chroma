import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getApprovedResources = query({
  handler: async (ctx) => {
    return await ctx.db.query("uiresources").filter((q) => q.eq(q.field("approved"), true)).collect();
  },
});

export const submitResource = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    link: v.string(),
    imageUrl: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("uiresources", {
      ...args,
      approved: false,
    });
  },
});

export const approveResource = mutation({
  args: { id: v.id("uiresources") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { approved: true });
  },
});