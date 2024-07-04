import { Button, buttonVariants } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 w-full h-[70px] mt-1">
      <div className="px-10 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* <div className="relative w-full">
              <Input
                className="pl-9 bg-[#333230] border-none rounded-full h-12 text-white focus-visible:border-white focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
                placeholder="Type something..."
              />
              <Search className="absolute left-0 top-[2px] m-2.5 h-6 w-6 text-white" />
            </div> */}

            <a
              key={"/dashboard"}
              className={cn(
                buttonVariants(),
                "flex items-center h-12 text-lg font-medium text-white rounded-full bg-primary cursor-pointer"
              )}
            >
              Dashboard
            </a>
            <Button
              variant="default"
              size={"icon"}
              className="w-12 h-12 rounded-full bg-[#333230] text-white"
            >
              <BellIcon />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#333230] border-none text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <a
        href="/"
        className="flex items-center gap-1 text-4xl font-bold text-white"
      >
        <img src="/salah-habit.svg" className="w-12 h-12" />
        Salah Habit
      </a>

      <nav className="gap-6 hidden lg:flex text-white">
        <a>Donate</a>
        <a>Features</a>
        <a>Leaderboard</a>
      </nav>
    </div>
  );
}
