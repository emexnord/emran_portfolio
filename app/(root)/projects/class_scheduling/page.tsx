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
        Automated class timetable generator
      </h1>
      <p className="text-muted-foreground mt-2 mb-8 tracking-wide max-w-3xl">
        This is a powerful platform designed to make class scheduling easier and
        more efficient. It helps schools and universities genrate class and exam
        timetables automatically, taking into account the availability of
        classrooms, teachers, and students. The platform also allows users to
        customize their timetables and share them with others.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Link href="#">
          <Card className="group h-full">
            <CardHeader className="py-3">
              <CardTitle>Backend</CardTitle>
              <CardDescription className="py-2">
                Used Django, DRF, and PostgreSQL to create a RESTful API for the
                platform. The API allows users to create, read, update, and
                delete timetables, classrooms, teachers, and students. The
                backend utilizes advanced algorithms like dfs and backtracking
                to generate the timetables automatically.
              </CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              <Badge variant="secondary">Django</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">DRF</Badge>
              <Badge variant="secondary">Docker</Badge>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <Card className="group h-full mt-8">
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            {/* <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1600}
              height={900}
              quality={100}
              src="/projects/research_sync.png"
            /> */}
            <div className="relative pb-[56.22254758418741%] h-0">
              <iframe
                src="https://www.loom.com/embed/dfdfc79926b544a590d4093ac8aef303?sid=071b7433-64a9-4e2c-b435-ee8b61e4cfb8"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
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
                  src="/projects/class_scheduling.png"
                />
              </div>
            </div>
          </Card>
        </Link>
        {/* <Link href="#" target="_blank"> */}
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

        {/* </Link> */}
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
              src="/projects/class_scheduling1.png"
            />
          </div>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
