import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function AdminPage() {
  const pendingResources = useQuery(api.resources.getPendingResources);
  const approveResource = useMutation(api.resources.approveResource);

  const handleApprove = async (id: string) => {
    await approveResource({ id });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Pending Resources</h2>
      <ul className="space-y-4">
        {pendingResources?.map((resource) => (
          <li key={resource._id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{resource.title}</h3>
            <p className="text-gray-600">{resource.description}</p>
            <button
              onClick={() => handleApprove(resource._id)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Approve
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}