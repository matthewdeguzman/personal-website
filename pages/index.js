import Head from "next/head";
import Project from "../components/project";
import { getSortedProjectsData } from "../lib/projects";

export function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
export default function Home({ allProjectsData }) {
  let left = true;
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta
          name="description"
          content="Matthew DeGuzman's personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Introduction Section */}
      <div>
        <p className="text-5xl font-sans font-bold">
          Hello. <br />
          My name is Matthew DeGuzman.
        </p>
      </div>

      {/* About me section */}
      <div className="flex justify-center border-2 border-black">
        <div className="flex-initial basis-1/3 text-center">
          <p>
            I am a second-year student at the University of Florida majoring in
            Computer Science and Minoring in Mathematics. I am a software
            engineer and have industry experience through two internships at
            Microsoft.
          </p>
        </div>
      </div>

      {/* Project Section */}
      <div>
        <h1 className="text-7xl font-bold tracking-tight text-gray-900 text-center">
          Projects
        </h1>
        <div className="grid mt-4 grid-rows-8 gap-16 md:gap-24 justify-center">
          {allProjectsData.map(
            ({ title, description, startTime, endTime, github }) => (
              <div key={github}>
                <Project
                  title={title}
                  description={description}
                  startTime={startTime}
                  endTime={endTime}
                  github={github}
                  left={left}
                />
                {(left = !left)}
              </div>
            )
          )}
        </div>
      </div>
      {/* Contact form*/}
    </>
  );
}
