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
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover object-center transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="">
        <h3 className="text-xl font-bold">{title}</h3>
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
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Button>
              <ExternalLink className="h-4 w-4" />
              Read more
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
