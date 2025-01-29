// components/Home.js
import Link from "next/link";
import Redirect from "@/components/home-page/redirect";
import Experience from "@/components/experience/experience";
import SocialLink from "@/components/socials/socialLink";
import ProjectList from "@/components/projects/projectList";
export const metadata = {
  title: "Home | Christopher Tran",
  description: "Home page of Christopher Tran&apos;s Portfolio",
};

const projects = [
  {
    title: "GrainFreeze",
    description:
      "A granular synthesizer plugin currently in the works. Currently the lead web developer",
    link: "https://grainfreeze.vercel.app/",
  },
  {
    title: "Esports at UCD Website",
    description:
      "Showcasing the Esports at UC Davis staff and players, developed using Next.JS",
    link: "https://www.esportsatucdavis.com/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-32 dark:text-white">
      <div className="mx-auto max-w-screen-sm px-7 flex justify-between flex-col">
        <section>
          <h1 className="text-lg font-bold">Christopher Tran </h1>
          <h2 className="text-md text-blue-300">Software Engineer</h2>
        </section>
        <section className="pt-6 text-sm font-sans font-light">
          <p>
            Hi all, my name is Chris, and I am a <i>Software Engineer</i> from
            Northern California! I graduated as a Computer Engineering major
            from UC Davis, but decided early on that software would be the path
            for me.
          </p>
          <br />
          <p>
            I currently work as a part of the{" "}
            <i>State of California, Office of Legislative Counsel</i>, where I
            specifically am part of the Enterprise Applications team. Outside of
            software, I love to spend time gaming, working on side projects, and
            cooking. I love learning new things as well, currently I am learning
            music production!
          </p>
          <br />
          {/* <Redirect
            buttonText="Learn more about me here!"
            buttonLink="/about-me"
          /> */}
        </section>

        <section className="pt-24">
          <div className="flex flex-row justify-between items-center pb-6 ">
            <h1 className="text-md font-bold">Experience</h1>
            <Redirect
              buttonText="See all experience"
              buttonLink="/experience"
            />
          </div>
          <div>
            <Experience
              title="Software Engineer"
              name="State of California, OLC"
              dates="Jun 2024 - Present"
              blurb="As a part of the Enterprise Applications team, I am responsible for developing and maintaining web applications for the California State Legislature."
            />
          </div>
        </section>
        <section className="pt-24">
          <div className="flex flex-row justify-between items-center pb-6 ">
            <h1 className="text-md font-bold">Projects</h1>
            <Redirect buttonText="See all projects" buttonLink="/projects" />
          </div>
          <ProjectList projects={projects} />
        </section>
        <section className="pt-24">
          <div>
            <h1 className="text-md font-bold">Interested in reaching out?</h1>
          </div>
        </section>
        <section className="pt-6 text-sm font-light font-sans">
          <p>
            Please feel free to reach out to me through any platform you choose!
            I prefer email, but my socials listed below are fine as well if
            you&apos;d like.
          </p>
          <br />
        </section>
        <div className="flex space-x-4 pb-4">
          <SocialLink
            href="https://github.com/christran60"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub"
            iconClass="filter invert brightness-0"
          />
          <SocialLink
            href="https://linkedin.com/in/christophertran-dev"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
          />
        </div>
        <Redirect
          buttonText="ctrandev@outlook.com"
          buttonLink="mailto:ctrandev@outlook.com"
        />
      </div>
    </div>
  );
}
