"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import axios from "axios";
import { useFormStatus } from "react-dom";
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
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

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
  const { isSignedIn, user } = useUser();
  if(!isSignedIn) {
  return <>  <SignedOut>
  <Button>
    <SignInButton />
  </Button>
</SignedOut></>
  }
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
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting resource:", error);
    }
  }

  return (
    <Form {...form}>
      <div className="flex justify-center items-center">x
        </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
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
        <SubmitButton />
      </form>
    </Form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Add Resource"}
    </Button>
  );
}
