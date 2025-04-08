import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-3">
          <div>
            <h2 className="text-4xl font-bold">About</h2>
            <p className="text-muted-foreground mt-1 mb-4">
              Some information about me.
            </p>
          </div>
          <p>
            My name is Emran Kamil, and I have been involved in Full-stack
            development for some time, specializing in Backend development.
            Throughout my career, I have developed a strong skill set in
            creating Robust, scale-able and user-friendly interfaces and have a
            deep understanding of these technologies.
          </p>
          <p>
            I am proficient in Python, go, JavaScript, and Java, and have
            expertise in frameworks like Nestjs, Nextjs, Django and flask.
          </p>
          <p>
            Additionally my active involvement with A2SV (African to Silicon
            Valley — backed by Google) has strengthened my understanding of
            advanced data structures and algorithms, solving over 800 problems
            on LeetCode and Codeforces.
          </p>
          {/* <p>
              One of my favorite projects that I&apos;ve worked on is a project
              called{" "}
              <Link
                href="https://drie.cz"
                className="underline underline-offset-2"
              >
                DRIE
              </Link>
              . I collaborate on it with friends, and we aim not only to offer
              web development but also to create modern tools and solutions for
              the online environment.
            </p> */}
          <p>
            I manage the entire development process, from gathering requirements
            to deploying the final product, ensuring quality and efficiency at
            every step.
          </p>
          <p>
            Currently, I am also exploring the exciting field of machine
            learning to expand my knowledge and expertise. Let's connect and
            explore potential collaborations!
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="p-4 border w-fit rounded-lg bg-gradient-to-b from-primary/10 from-60%">
            <Image
              src="/cartoon.me.png"
              className="rounded-lg"
              width={400}
              height={400}
              alt="Emran Kamil"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
