// src/components/ExperienceTimeline.tsx
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { FiExternalLink } from "react-icons/fi";
import { Card } from "./ui/card";
import { ExperienceEntryType } from "@/types";
import { experienceData } from "@/config";
import { Badge } from "./ui/badge";
import Link from "next/link";

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-orange-400",
  "bg-cyan-400",
  "bg-rose-400",
  "bg-fuchsia-400",
  "bg-violet-400",
  "bg-emerald-400",
  "bg-teal-400",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const ExperienceEntry: React.FC<{
  entry: ExperienceEntryType;
  isLast: boolean;
}> = ({ entry, isLast }) => {
  return (
    <div className="relative pl-8 mb-4">
      {!isLast && (
        <div className="absolute left-2 top-6 bottom-2 h-full w-[0.1px] bg-gray-400"></div>
      )}
      {/* <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-gray-400"></div> */}
      <Card className="absolute left-0 top-1  translate-y-1/2 p-0.5">
        {
          <p className="text-sm text-gray-900 dark:text-gray-400">
            {entry.date}
          </p>
        }
      </Card>
      <div className="h-full p-4">
        <div className="my-8">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold ">{entry.role}</h3> -
            <Link
              className="text-lg font-semibold italic flex items-center"
              href={entry.companyUrl}
              target="_blank"
            >
              {entry.company}
              <FiExternalLink className="inline ml-1" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground my-1">
            {entry.description}
          </p>
          <div className="text-sm text-muted-foreground">
            {entry.roles.map((role, index) => (
              <div key={index} className="flex pt-1">
                <div className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide-icon lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>{" "}
                {role}
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {entry.skills.map((skill, index) => (
              <Badge variant="secondary" key={index}>
                <div
                  className={`${getRandomColor()} w-2 h-2 mr-2 rounded-full`}
                />
                <span className="font-mono">{skill}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <MaxWidthWrapper className="mb-16 mt-16 sm:mt-32 flex flex-col items-left justify-center text-left">
      <h2 className="text-4xl font-bold mb-4">Experience</h2>
      <div>
        {experienceData.map((entry, index) => (
          <ExperienceEntry
            key={index}
            entry={entry}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ExperienceTimeline;
