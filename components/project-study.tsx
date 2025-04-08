import { GLOBAL_LINK, RESEARCH_SYNC } from "@/config";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import MaxWidthWrapper from "./max-width-wrapper";

export default function ProjectStudy() {
  const project1 = RESEARCH_SYNC;
  const project2 = GLOBAL_LINK;
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold">Team Projects</h2>
      <p className="text-muted-foreground mt-1 mb-4">
        Innovative team-based projects I&apos;ve contributed to.
      </p>
      <div className="flex gap-8 flex-col">
        <Link href={project1.href}>
          <Card className="h-full group flex flex-col lg:flex-row justify-between">
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={project1.image}
                />
              </div>
            </div>
            <div className="lg:p-4 w-full lg:border-l lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{project1.title}</CardTitle>
                  <CardDescription>{project1.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {project1.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
          </Card>
        </Link>
        <Link href={project2.href}>
          <Card className="h-full group flex flex-col-reverse lg:flex-row justify-between">
            <div className="lg:p-4 w-full lg:border-r lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{project2.title}</CardTitle>
                  <CardDescription>{project2.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {project2.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={project2.image}
                />
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
