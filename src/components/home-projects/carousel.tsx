"use server";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { fetchPinnedRepos } from "./fetch-pinned-posts";
interface HomeProject {
  name: string;
  description: string;
  url: string;
  owner: string;
}

export default async function HomeProjectCards() {
  const pinnedRepos = await fetchPinnedRepos("haydnjm");

  const firstRowProjects = pinnedRepos.filter((_, index) => index % 2 === 0);
  const secondRowProjects = pinnedRepos.filter((_, index) => index % 2 === 1);

  return (
    <div className="w-full">
      <div
        className="overflow-x-auto pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full min-w-max">
          {/* First row with offset */}
          <div className="flex pl-[100px] mb-4">
            {firstRowProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {/* Second row */}
          <div className="flex">
            {secondRowProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: HomeProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-[300px] mx-4 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 pb-0">
      <CardHeader className="px-3 m-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
        </div>
      </CardHeader>
      <CardFooter className="px-3 m-0 flex-grow flex items-center justify-between border-t border-gray-200 py-5">
        <div className="text-xs text-muted-foreground pr-2">
          {project.description}
        </div>
        <Link href={project.url} target="_blank">
          <Button variant="outline" className="w-full">
            <Github />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
