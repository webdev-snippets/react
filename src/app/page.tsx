import { Button } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button action='primary' size='md' disabled={false} tooltip="button" label="hello">
        hello
      </Button>
      <Button action='secondary' size='md' disabled={false} tooltip="button" label="test">
        hello
      </Button>
      <Button action='tertiary' size='md' disabled={false} tooltip="button">
        hello
      </Button>
      <Button action='error' size='md' disabled={false} tooltip="button">
        hello
      </Button>
      <Button action='primary' size='lg' disabled={true} tooltip="button">
        hello
      </Button>
      <Button action='secondary' size='lg' disabled={true} tooltip="button">
        hello
      </Button>
      <Button action='tertiary' size='lg' disabled={true} tooltip="button">
        hello
      </Button>
      <Button action='error' size='lg' disabled={true} tooltip="button">
        hello
      </Button>
    </div>
  );
}
