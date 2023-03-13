import fs from "fs";
import path from "path";

const projectsPath = path.join(
  process.cwd(),
  "projects-experience",
  "projects.json"
);

export function getSortedProjectsData() {
  const projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));
  return projects["projects"];
}
