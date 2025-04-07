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

export default function UzxPage() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h1 className="text-4xl font-bold">
        ResearchSync - The Ultimate Collaboration Tool for Research Teams
      </h1>
      <p className="text-muted-foreground mt-2 mb-8 tracking-wide max-w-3xl">
        This is a powerful platform designed to make research easier and more
        collaborative. It helps teams manage tasks, collect and analyze data,
        and store all their resources in one place. Additionaly the platform
        allows users to create and distribute surveys with the help of AI,
        collect and analyze responses, and generate actionable insights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Link href="#">
          <Card className="group h-full">
            <CardHeader className="py-3">
              <CardTitle>Frontend</CardTitle>
              <CardDescription className="py-2">
                Used Next.js, Tailwind CSS, and shadcn/ui to create a responsive
                and user-friendly interface. The design was created in Figma and
                implemented in typescript. Additionaly we used Motion for
                animations and transitions.
              </CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Motion</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </CardFooter>
          </Card>
        </Link>
        <Link href="#">
          <Card className="group h-full">
            <CardHeader className="py-3">
              <CardTitle>Backend</CardTitle>
              <CardDescription className="py-2">
                Used Nest.js, Mongodb, and AWS to create a scalable and secure
                backend.
              </CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              <Badge variant="secondary">Nest.js</Badge>
              <Badge variant="secondary">MongoDb</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <p className="text-muted-foreground my-8 tracking-wide max-w-3xl">
        In this project, I was responsible for the backend development,
        including the implementation of the database and API endpoints. I also
        worked on the frontend development in the integration of the API and
        implementation of the AI survey generator, which allows users to create
        and distribute surveys with the help of AI. The AI survey generator
        collects and analyzes responses, and generates actionable insights.
      </p>
      <Card className="group h-full mt-8">
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1600}
              height={900}
              quality={100}
              src="/projects/research_sync.png"
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
                  src="/projects/research_sync.png"
                />
              </div>
            </div>
          </Card>
        </Link>
        <Link href="#" target="_blank">
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
              src="/projects/research_sync.png"
            />
          </div>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
