"use client";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Button } from "./ui/button";
import ResourceForm from "./ResourceForm";
import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import { RainbowButton } from "./ui/rainbow-button";

export default function RequestResourceModal() {
  const { user, isSignedIn } = useUser();
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <RainbowButton className="fixed bottom-8 right-2 z-[99] lg:right-16">
          Request Resource
        </RainbowButton>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Credenza</CredenzaTitle>
          <CredenzaDescription>Welcome {user?.firstName}</CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>{isSignedIn && <ResourceForm />}</CredenzaBody>
        <CredenzaFooter>
          {!isSignedIn && (
              <SignInButton>
                <Button className="w-full">Sign In</Button>
              </SignInButton>
            
          )}

          {isSignedIn && (
            <CredenzaClose asChild>
              <Button className="w-full">Close</Button>
            </CredenzaClose>
          )}
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
