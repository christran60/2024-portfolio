import Experience from "@/components/experience/experience";
import ProjectList from "@/components/projects/projectList";
import OrderedList from "@/components/experience/orderedList";
export const metadata = {
  title: "Projects | Christopher Tran",
  description: "Projects page of Christopher Tran's Portfolio",
};
const projects = [
  {
    title: "GrainFreeze",
    description:
      "A granular synthesizer plugin in development, where I serve as the lead web developer.",
    link: "https://grainfreeze.vercel.app/",
  },
  {
    title: "Esports at UCD Showcase",
    description:
      "Showcasing the Esports at UC Davis staff and players, developed using Next.JS",
    link: "https://www.esportsatucdavis.com/",
  },
  {
    title: "Current Portfolio",
    description:
      "This website! This link redirects to the repo instead since you saw this already.",
    link: "https://github.com/christran60/2024-portfolio",
  },
  {
    title: "Nail Salon Website",
    description:
      "Support my mom's nail salon today! Developed using Next.js and ChakraUI",
    link: "https://californianailslincoln.com/",
  },
  {
    title: "First Website",
    description:
      "First website I've ever made, developed using React and MaterialUI.",
    link: "https://christophertran.netlify.app/",
  },
];

const eaucdNotes = [
  "Designed and implemented a web-based platform, using Next.js, and TailwindUI",
  "Deployed using Netlify",
  "Strengthened the club's presentation to attract sponsors and engage with school administration.",
];

const grainfreezeNotes = [
  "Developed using Next.js and TailwindUI, referencing our team's Figma designs to ensure a seamless and functional user experience.",
  "Integrated Firebase for authentication and Firestore for managing user accounts and data.",
  "Deployed using Vercel",
  "Implemented automated end-to-end testing using Cypress to validate core functionalities, ensuring a seamless user experience and reducing manual testing efforts.",
];

const californiaNailsNotes = [
  "Developed using Next.js and ChakraUI",
  "Deployed using Netlify",
];

const portfolioNotes = [
  "Developed using React and TailwindUI",
  "Deployed using Vercel",
];
const firstPortfolioNotes = [
  "Developed using React and MaterialUI",
  "Deployed using Netlify",
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-32 dark:text-white">
      <div className="mx-auto max-w-screen-sm px-7 flex justify-between flex-col">
        <section>
          <div className="flex flex-row justify-between items-center pb-6">
            <h1 className="text-md font-bold">Project Links</h1>
          </div>
          <ProjectList projects={projects} />
        </section>
        <section className="pt-12 space-y-16">
          <div>
            <h1 className="text-md font-bold pb-6">Project Descriptions</h1>{" "}
            <Experience
              title="GrainFreeze"
              name="Personal Project"
              dates="Dec 2024 - Present"
              blurb="GrainFreeze is a granular synthesizer audio plugin to be built and distributed by our small team of three. As the lead web developer, I built a majority of the website, focusing on functionality, performance, and deployment."
            />
            <OrderedList items={grainfreezeNotes} />
          </div>
          <div>
            <h1 className="text-md font-bold pb-6">Project Descriptions</h1>{" "}
            <Experience
              title="Esports at UCD Website"
              name="Esports at UC Davis"
              dates="Aug 2022 - Present"
              blurb="As the captain of one of the club's long-standing teams, I felt that we needed a better way to showcase our staff and teams. So, I created the website to highlight them! Today, I maintain communication with the club's current administration for regular updates to staff and team rosters."
            />
            <OrderedList items={eaucdNotes} />
          </div>
          <div>
            <Experience
              title="Portfolio Website"
              name="Personal Project"
              dates="Oct 2024 - Oct 2024"
              blurb="This is my second portfolio website, where I aimed to create a well-structured Next.js project. Building on the skills I've developed during my free time, I've implemented optimizations to enhance performance and usability, reflecting my growth as a developer."
            />
            <OrderedList items={portfolioNotes} />
          </div>
          <div>
            <Experience
              title="Nail Salon Website"
              name="California Nails"
              blurb="My mom has been seeking ways to boost PR for her nail salon, so I decided to create a website to attract more traffic from her younger clientele. Developing this site was my way of showing gratitude for everything she’s done for me!"
              dates="Jan 2023 - Jan 2023"
            />
            <OrderedList items={californiaNailsNotes} />
          </div>
          <div>
            <Experience
              title="First Website"
              name="Personal Project"
              blurb="My very first website, be warned of the faulty contact form and poor optimizations for some resolutions."
              dates="Nov 2021 - Dec 2021"
            />
            <OrderedList items={firstPortfolioNotes} />
          </div>
        </section>
      </div>
    </div>
  );
}
