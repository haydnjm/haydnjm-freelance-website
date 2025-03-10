import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BlogNav = ({
  previous,
  next,
}: {
  previous?: { title: string; slug: string };
  next?: { title: string; slug: string };
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {previous ? (
        <div className="w-full sm:w-64">
          <Link href={previous.slug}>
            <div className="rounded-md border w-full p-2 hover:scale-105 transition-all duration-300">
              <p>{previous.title}</p>
              <p className="text-xs text-gray-600">
                <ArrowLeft className="w-4 h-4 inline" /> Go to previous post
              </p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex-1" />
      )}
      {next && (
        <div className="w-full sm:w-64 text-right">
          <Link href={next.slug}>
            <div className="rounded-md border p-2 hover:scale-105 transition-all duration-300">
              <p>{next.title}</p>
              <p className="text-xs text-gray-600">
                Go to next post <ArrowRight className="w-4 h-4 inline" />
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogNav;
