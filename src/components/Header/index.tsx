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
import FlipLink from "../magicui/reveal-link";

export function SiteHeader() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 w-full h-[70px] mt-1">
      <div className="px-4 lg:px-10 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden lg:flex items-center space-x-2">
            <a
              href={"/dashboard"}
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
                <DropdownMenuItem>
                  <a href="/profile">Profile</a>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Button className="lg:hidden block">Sign In</Button>
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
        className="flex items-center gap-1 text-2xl lg:text-4xl font-bold text-white "
      >
        <img src="/salah-habit.svg" className="w-12 h-12" />
        Salah Habit
      </a>

      <nav className="gap-6 hidden lg:flex text-white">
        <FlipLink className="text-primary" href="/">Home</FlipLink>
        <FlipLink href="/donate">Donate</FlipLink>
        <FlipLink href="/#features">Features</FlipLink>
        <FlipLink href="/leaderboards">Leaderboard</FlipLink>
      </nav>
    </div>
  );
}
