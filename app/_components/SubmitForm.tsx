import { useState } from 'react';
import { useMutation } from 'convex/react';
import { useUser } from '@clerk/nextjs';
import { api } from '@/convex/_generated/api';

export default function SubmitForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const submitResource = useMutation(api.resources.submitResource);
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      await submitResource({
        title,
        description,
        link,
        imageUrl,
        userId: user.id,
      });
      setTitle('');
      setDescription('');
      setLink('');
      setImageUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <h2 className="text-2xl font-bold">Submit a Resource</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit Resource
      </button>
    </form>
  );
}