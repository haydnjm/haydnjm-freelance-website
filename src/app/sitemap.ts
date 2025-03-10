import { promises as fs } from "fs";
import path from "path";

async function getCaseStudySlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const caseStudiesDir = path.join(process.cwd(), "src", "app", "case-studies");
  const slugs = await getCaseStudySlugs(caseStudiesDir);

  const caseStudies = slugs.map((slug) => ({
    url: `https://haydnjm.com/case-studies/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/case-studies"].map((route) => ({
    url: `https://haydnjm.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...caseStudies];
}
