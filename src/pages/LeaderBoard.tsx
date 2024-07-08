import PageLayout from "@/components/PageLayout";
import LeaderBoardTable from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function LeaderBoard() {
  return (
    <PageLayout className="justify-center">
      <section className="flex lg:w-1/2 flex-col justify-center text-center lg:p-10">
        <h1 className="text-5xl font-bold text-white ">
          Community <span className="text-primary">Leaderboards.</span>
        </h1>
        <div className="space-x-4 my-4">
          <Badge>Daily</Badge>
          <Badge>Weekly</Badge>
          <Badge>Monthly</Badge>
          <Badge>All Time</Badge>
        </div>
        <div className="relative w-full">
          <Input
            className="pl-9 bg-[#333230] border-none rounded-full h-12 text-white focus-visible:border-white focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
            placeholder="Search friends..."
          />
          <Search className="absolute left-0 top-[2px] m-2.5 h-6 w-6 text-white" />
        </div>
        <LeaderBoardTable />
      </section>
    </PageLayout>
  );
}
