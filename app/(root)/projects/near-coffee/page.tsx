import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function UzxPage() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h1 className="text-4xl font-bold">
        Near Coffee - A promotion Website to a new Ethiopian coffee brand
      </h1>
      <p className="text-muted-foreground mt-2 mb-8 tracking-wide max-w-3xl">
        This is an elegant and modern website designed to promote a new
        Ethiopian coffee brand called Near coffee. The website features a clean
        and minimalist design.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Link href="#">
          <Card className="group h-full">
            <CardHeader className="py-3">
              <CardTitle>Frontend</CardTitle>
              <CardDescription className="py-2">
                Used React, Plain CSS, and Material UI to create a responsive
                and user-friendly interface. The design was created in Figma and
                implemented in javascript.
              </CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">Material UI</Badge>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <Card className="group h-full mt-8">
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1600}
              height={900}
              quality={100}
              src="/projects/near_coffee3.png"
            />
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
        <Link href="#">
          <Card className="group h-full">
            <div className="p-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src="/projects/near_coffee.png"
                />
              </div>
            </div>
          </Card>
        </Link>
        <ContactForm>
          <Card className="group relative overflow-hidden h-[300px] sm:h-full">
            <Sparkles
              className="absolute hidden lg:block text-muted-foreground/10 -right-[4rem] -bottom-[3rem]"
              size={300}
            />
            <Sparkles
              className="absolute text-muted-foreground/10 -left-[4rem] -top-[3rem]"
              size={180}
            />
            <Sparkles
              className="absolute text-muted-foreground/10 left-48 lg:left-[1rem] bottom-[1rem]"
              size={96}
            />
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="text-2xl mt-4 font-semibold">
                Are you interested?
              </h1>
              <p className="text-muted-foreground mt-1 text-center">
                Let&apos;s work together on your project.
              </p>
            </div>
          </Card>
        </ContactForm>
      </div>
      <Card className="group h-full mt-8">
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1600}
              height={900}
              quality={100}
              src="/projects/near_coffee2.png"
            />
          </div>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
