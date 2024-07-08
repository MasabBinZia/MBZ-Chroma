import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background:
      "https://images.unsplash.com/photo-1669657319250-f34ee98ea412?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI5MTk4MHw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: "",
  },
];

export default function Featured() {
  return (
    <BentoGrid className="mx-auto my-12 max-w-5xl">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
