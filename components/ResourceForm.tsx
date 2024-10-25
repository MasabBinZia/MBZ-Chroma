'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';
import axios from 'axios';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectList,
  type MultiSelectOption,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
  renderMultiSelectOptions,
} from '@/components/ui/multi-select';

import { Textarea } from './ui/textarea';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import { ConvexError } from 'convex/values';
import { Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { ALL_ITEMS, group, search } from '@/lib/utils';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  link: z.string().url({
    message: 'Please enter a valid URL.',
  }),
  tags: z.array(z.string(), {
    required_error: 'Please select at least one tag.',
  }),
});

export default function ResourceForm() {
  const { user } = useUser();
  const addResource = useMutation(api.resources.submitResource);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<MultiSelectOption[]>(() =>
    group(ALL_ITEMS),
  );

  const indexRef = useRef(0);

  const handleSearch = async (keyword: string) => {
    const index = ++indexRef.current;
    setLoading(true);
    const newOptions = await search(keyword);
    if (indexRef.current === index) {
      setOptions(newOptions);
      setLoading(false);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      link: '',
      tags: [],
    },
  });

  const captureAndUploadScreenshot = async (url: string) => {
    try {
      const response = await axios.post('/api/capture-screenshot', { url });
      if (!response.data.imageUrl) {
        throw new Error('Failed to capture and upload screenshot');
      }
      return response.data.imageUrl;
    } catch (error) {
      console.error('Error capturing and uploading screenshot:', error);
      throw error;
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let capturedImageUrl = '';
    try {
      const trimmedLink = values.link.replace(/\/$/, '');
      capturedImageUrl = await captureAndUploadScreenshot(trimmedLink);
      await addResource({
        ...values,
        imageUrl: capturedImageUrl,
        link: trimmedLink,
        userId: '',
        requestedBy: user?.emailAddresses[0]?.emailAddress || '',
        submittedBy: user?.fullName || '',
        submittedByPfp: user?.imageUrl || '',
      });
      form.reset();
      toast.success('Resource Requested Successfully');
    } catch (error) {
      const errorMessage =
        error instanceof ConvexError ? error.data : 'Unexpected error occurred';
      toast.error(errorMessage);
      if (errorMessage === 'A resource with this link already exists.') {
        try {
          const urlParts = capturedImageUrl.split('/');
          const publicId = urlParts[urlParts.length - 1].split('.')[0];
          await axios.post('/api/remove-cloudinary-image', { publicId });
          console.log('Cloudinary image deleted successfully');
        } catch (cloudinaryError) {
          console.error(
            'Error deleting image from Cloudinary:',
            cloudinaryError,
          );
        }
      }
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
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <MultiSelect
                onValueChange={field.onChange}
                defaultValue={field.value}
                onSearch={(keyword) => handleSearch(keyword ?? '')}
              >
                <FormControl>
                  <MultiSelectTrigger className="h-10">
                    <MultiSelectValue placeholder="Select tags" />
                  </MultiSelectTrigger>
                </FormControl>
                <MultiSelectContent>
                  <MultiSelectSearch />
                  <MultiSelectList>
                    {loading ? null : renderMultiSelectOptions(options)}
                    <MultiSelectEmpty>
                      {loading ? 'Loading...' : 'No results found'}
                    </MultiSelectEmpty>
                  </MultiSelectList>
                </MultiSelectContent>
              </MultiSelect>
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
      {isSubmitting ? (
        <span className="flex items-center gap-1">
          <Loader2 className="h-4 w-4 animate-spin" />
          Submitting...
        </span>
      ) : (
        'Add Resource'
      )}
    </Button>
  );
}
