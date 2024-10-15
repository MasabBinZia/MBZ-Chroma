"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  link: z.string().url({
    message: "Please enter a valid URL.",
  }),
});

export default function ResourceForm() {
  const { user } = useUser();
  const addResource = useMutation(api.resources.submitResource);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
    },
  });

  const captureAndUploadScreenshot = async (url: string) => {
    try {
      const response = await axios.post("/api/capture-screenshot", { url });
      if (!response.data.imageUrl) {
        throw new Error("Failed to capture and upload screenshot");
      }
      return response.data.imageUrl;
    } catch (error) {
      console.error("Error capturing and uploading screenshot:", error);
      throw error;
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const capturedImageUrl = await captureAndUploadScreenshot(values.link);
      await addResource({
        ...values,
        imageUrl: capturedImageUrl,
        userId: "",
        requestedBy: user?.emailAddresses[0]?.emailAddress || "",
      });
      form.reset();
      toast.success("Resource Requested Successfully");
    } catch (error) {
      console.error("Error submitting resource:", error);
      toast.error("Error submitting resource");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input type="url" placeholder="Enter URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isSubmitting={form.formState.isSubmitting} />
      </form>
    </Form>
  );
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Add Resource"}
    </Button>
  );
}