import Experience from "@/components/experience/experience";
import ProjectList from "@/components/projects/projectList";
import OrderedList from "@/components/experience/orderedList";
export const metadata = {
  title: "Projects | Christopher Tran",
  description: "Projects page of Christopher Tran's Portfolio",
};
const projects = [
  {
    title: "Cowtown Customs",
    description:
      "A leaderboard and Elo tracking system for UC Davis' custom games and 10-man matches, built to enhance competitive gaming within the university community.",
    link: "https://cowtown-customs.vercel.app/",
  },
  {
    title: "GrainFreeze",
    description:
      "A granular synthesizer plugin in development, where I serve as a lead software engineer.",
    link: "https://grainfreeze.io/",
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
  "Led the development of the full-stack web platform, utilizing Next.js, Firebase, and Stripe to handle all user accounts, e-commerce, and product licensing.",
  "Bridged the web platform and the C++ desktop application by implementing Google Sign-In directly within the JUCE plugin, enabling seamless user authentication across web and native clients.",
  "Architected the automated sales and license-key fulfillment pipeline, using Stripe for payment processing and Cloud Functions to securely generate and deliver product licenses upon purchase.",
  "Implemented an end-to-end testing suite with Playwright, automating validation of the entire user journey from signup to payment, which reduced manual regression testing time by over 90%.",
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

const cowtownCustomsNotes = [
  "Built a full-stack Next.js 14 application with TypeScript, featuring server-side rendering and type-safe API routes",
  "Implemented Supabase (PostgreSQL) as the backend-as-a-service with comprehensive database schema including players, matches, teams, and ELO history tables",
  "Created automated PostgreSQL functions and triggers for real-time statistics calculation, ELO updates, and data consistency",
  "Developed a sophisticated ELO rating system with complete ELO history tracking, and automatic player statistics aggregation",
  "Built comprehensive player profiles with map-specific performance, daily/weekly statistics, and advanced Valorant metrics (ACS, ADR, KAST, etc.)",
  "Implemented responsive UI with Tailwind CSS, Framer Motion animations, and Lucide React icons for an engaging user experience",
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
              title="Cowtown Customs"
              name="UC Davis VALORANT"
              dates="Sep 2025"
              blurb="Developed a comprehensive Valorant ELO tracking system using Next.js 14, TypeScript, and Supabase (PostgreSQL) for UC Davis' custom games and 10-man matches. Features automated statistics calculation, detailed player profiles with map-specific performance, ELO history tracking, and a sophisticated database schema with triggers for real-time updates."
            />
            <OrderedList items={cowtownCustomsNotes} />
          </div>
          <div>
            <Experience
              title="GrainFreeze"
              name="Personal Project"
              dates="Dec 2024 - Jun 2025"
              blurb="GrainFreeze is a granular synthesizer audio plugin to be built and distributed by our small team of three. As the lead web developer, I built a majority of the website, focusing on functionality, performance, and deployment."
            />
            <OrderedList items={grainfreezeNotes} />
          </div>
          <div>
            <h1 className="text-md font-bold pb-6">Project Descriptions</h1>{" "}
            <Experience
              title="Esports at UCD Website"
              name="Esports at UC Davis"
              dates="Aug 2022 - Jun 2024"
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
