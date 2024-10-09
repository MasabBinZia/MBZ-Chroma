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
import { useUser } from "@clerk/nextjs";

export default function RequestResourceModal() {
    const { user } = useUser();
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button >Request Resource</Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Credenza</CredenzaTitle>
          <CredenzaDescription>
            Welcome {user?.firstName}
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <ResourceForm/>
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button className="w-full">Close</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
