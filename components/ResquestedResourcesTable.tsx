import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Link from "next/link";
import ReqImageViewer from "./ReqImageViewer";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Resource } from "@/types";
import { Id } from "@/convex/_generated/dataModel";


type ResquestedResourcesTableProps = {
  cards: Resource[];
  loading: boolean;
  handleApprove: (id: Id<"uiresources">) => void;
};

export default function ResquestedResourcesTable({
  cards,
  loading,
  handleApprove,
}: ResquestedResourcesTableProps) {
  return (
    <Table className="h-full mt-20">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Descrription</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Image</TableHead>
          <TableHead className="">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((resource: Resource) => (
          <TableRow key={resource.title}>
            <TableCell>{resource.title}</TableCell>

            <TableCell className="font-medium">
              {resource.description}1
            </TableCell>
            <TableCell><Link href={resource.link} className={cn(buttonVariants({ variant: "link" }),"text-blue-500")}>{resource.link}</Link></TableCell>
            <TableCell><ReqImageViewer imageUrl={resource.imageUrl} title={resource.title}/></TableCell>
            <TableCell>
              <Button
                onClick={() => handleApprove(resource._id as Id<"uiresources">)}
                disabled={loading}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
              >
                Approve
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
