import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getResources = query({
  handler: async (ctx) => {
    return await ctx.db.query("uiresources").collect();
  },
});

export const submitResource = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    link: v.string(),
    imageUrl: v.string(),
    userId: v.string(),
    requestedBy: v.string(),
  },
  handler: async (ctx, args) => {
    const existingResource = await ctx.db
      .query("uiresources")
      .filter((q) => q.eq(q.field("link"), args.link))
      .first();

    if (existingResource) {
      throw new ConvexError("A resource with this link already exists.");
    }

    await ctx.db.insert("uiresources", {
      ...args,
      approved: false,
    });
  },
});

export const getApprovedResources = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("uiresources")
      .filter((q) => q.eq(q.field("approved"), true))
      .collect();
  },
});

export const getUnApprovedResources = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("uiresources")
      .filter((q) => q.eq(q.field("approved"), false))
      .collect();
  },
});

export const approveResource = mutation({
  args: { id: v.id("uiresources") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { approved: true });
  },
});

export const rejectResource = mutation({
  args: { id: v.id("uiresources") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
