import MaxWidthWrapper from "./max-width-wrapper";
import { ContactForm } from "./contact-form";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Hero() {
  return (
    <MaxWidthWrapper className="mb-16 mt-16 sm:mt-32 flex flex-col items-center justify-center text-center">
      <ContactForm>
        <div className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
          </span>
          <span className="sm:hidden">Available for hire</span>
          <span className="hidden sm:inline font-mono">
            Available for work!
          </span>
        </div>
      </ContactForm>
      <h1
        className={cn(
          "max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl",
          font.className
        )}
      >
        {/* Hi I&apos;m a <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">Full Stack</span> developer
                creating modern web apps. */}
        Emran Kamil <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
          Full-Stack
        </span>{" "}
        Developer
      </h1>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A Full-stack developer and Computer Engineer, who&apos;s Passionate
        about building outstanding websites using the latest web technologies.
      </p>
      <div className="flex animate-delay-300 animate-fade-up items-center justify-center gap-4">
        <Link
          download="EmranKamilResume.pdf"
          href="/EmranKamilResume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-8 bg-[#5865f2] px-4 py-2 rounded-full flex items-center justify-center gap-1.5 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 size-4"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
            <g className="transform-gpu transition-transform ease-in-out group-hover:translate-y-0.5">
              <path d="M7 10L12 15 17 10"></path>
              <path d="M12 15L12 3"></path>
            </g>
          </svg>
          Get resume
        </Link>
        <Link
          href="https://www.linkedin.com/in/emran-kamil"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-8 bg-card border px-4 py-2 rounded-full flex items-center justify-center gap-1.5 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 size-4 transition-transform duration-300 ease-out group-hover:rotate-180"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
            <path d="M2 9H6V21H2z"></path>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
