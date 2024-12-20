import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import Link from 'next/link';
// import ReqImageViewer from "./ReqImageViewer";
import { Button } from './ui/button';
import { Resource } from '@/types';
import { Id } from '@/convex/_generated/dataModel';

type ResquestedResourcesTableProps = {
  cards: Resource[];
  loading: boolean;
  handleApprove: (id: Id<'uiresources'>) => void;
  handleReject: (id: Id<'uiresources'>) => void;
};

export default function ResquestedResourcesTable({
  cards,
  loading,
  handleApprove,
  handleReject,
}: ResquestedResourcesTableProps) {
  return (
    <Table>
      <TableCaption>A list of your UnApproved UI Resources</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((resource: Resource) => (
          <TableRow key={resource._id}>
            <TableCell>{resource.title}</TableCell>
            <TableCell className="line-clamp-1 w-[300px]">
              {resource.description}
            </TableCell>
            <TableCell>
              <Link
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.link}
              </Link>
            </TableCell>
            <TableCell>img </TableCell>
            <TableCell>
              <Button
                onClick={() => handleApprove(resource._id as Id<'uiresources'>)}
                disabled={loading}
                className="mr-2 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
              >
                Approve
              </Button>
              <Button
                onClick={() => handleReject(resource._id as Id<'uiresources'>)}
                disabled={loading}
                className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
              >
                Reject
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
