import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Github,Linkedin} from "lucide-react";
import { Section, Container } from "@/components/craft";
import Logo from "@/public/logo.svg";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 h-20  w-20"
              ></Image>
            </Link>
            <p>
              <Balancer>
              MBZ Chroma is a platform that showcases the best free UI resources for developers.
              </Balancer>
            </p>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Link href={"https://github.com/MasabBinZia"} className={cn(buttonVariants({variant:"outline",size:"icon"}),"h-10 w-10")}>
              <Github className="h-5 w-5" />
            </Link>
            {/* <Link href={""} className={cn(buttonVariants({variant:"outline",size:"icon"}),"h-10 w-10")}>
              <Twitter className="h-5 w-5" />
            </Link> */}
            <Link href={"https://www.linkedin.com/in/masabbinzia"} className={cn(buttonVariants({variant:"outline",size:"icon"}),"h-10 w-10")}>
              <Linkedin className="h-5 w-5"  />
            </Link>
          </div>
          <p className="text-muted-foreground">
          Made with ❤️ by Masab Bin Zia
          </p>
        </Container>
      </Section>
    </footer>
  );
}
