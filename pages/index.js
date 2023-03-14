import Head from "next/head";
import Navbar from "../components/navbar";
import Project from "../components/project";
import Contact from "../components/contact";
import { getSortedProjectsData } from "../lib/projects";
import homeStyles from "../styles/Home.module.css";

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

      <Navbar />
      {/* Introduction Section */}
      <div className="mt-16">
        <p className="text-5xl pl-2 md:text-7xl font-sans font-extrabold tracking-tight text-gray-900">
          Hello. <br />
          My name is Matthew DeGuzman.
        </p>
      </div>

      {/* About me section */}
      <div className="bg-black w-screen">
        <p className="mx-auto text-center text-gray-100 text-lg py-8 mt-2 w-fit sm:mt-4 sm:max-w-screen-sm">
          I am a software developer and currently attend the University of
          Florida where I am pursuing a BS in Computer Science and minoring in
          Mathematics. I have industry experience through two internships at
          Microsoft and continue to learn new technologies outside of school.
        </p>
      </div>

      {/* Project Section */}
      <div>
        <h1 className={homeStyles.headerMargin}>Projects</h1>
        <div className="grid grid-rows-8 gap-16 mt-4 md:gap-24 md:mt-16 justify-center">
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
      <h1 className={homeStyles.headerMargin}>Contact me</h1>
      <Contact />
    </>
  );
}
