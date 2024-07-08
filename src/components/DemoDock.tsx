import { Dock, DockIcon } from "@/components/magicui/dock";
import { Button } from "./ui/button";
import { Award, Plus, TrendingUp } from "lucide-react";

export function DockDemo() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <Dock>
        <DockIcon name="Status">
          <TrendingUp className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon name="Bagdes">
          <Award className="h-6 w-6 text-white" />
        </DockIcon>
        <Button className="rounded-full gap-0.5 text-xl h-12">
          <Plus /> Set Target
        </Button>
      </Dock>
    </div>
  );
}
