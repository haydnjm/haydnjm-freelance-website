import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col flex-1 text-muted-foreground hover:text-foreground"
    >
      <Card className="overflow-hidden flex-1">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover object-center transition-all hover:scale-105"
          />
        </div>
        <CardHeader className="">
          <h2 className="text-xl font-bold">{title}</h2>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 ">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button>
            <ExternalLink className="h-4 w-4" />
            Read more
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
