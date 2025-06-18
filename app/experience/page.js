import Experience from "@/components/experience/experience";
import OrderedList from "@/components/experience/orderedList";
export const metadata = {
  title: "Experience | Christopher Tran",
  description: "Experience page of Christopher Tran's Portfolio",
};
export default function Work() {
  const olcResponsibilities = [
    "Accelerated a critical modernization project by implementing multithreading during the migration from Silverlight to WPF, delivering a key sprint two months ahead of schedule.",
    "Enhanced application performance by over 50%, earning positive feedback directly from customers on the system's improved speed and responsiveness.",
    "Re-architected core components to a modern MVVM design pattern, eliminating a class of recurring stability bugs and creating a more maintainable, modular codebase.",
    "Ensured 99.9% uptime for mission-critical legislative systems by resolving production issues and creating new documentation for the support team.",
  ];

  const ariaResponsibilities = [
    "Led the full-stack modernization of a legacy customer application, migrating it from Visual Basic to a .NET MVC 	architecture, which boosted average page load speed by 40% and cut deployment time for new features in half.",
    "Spearheaded a targeted webpage revamp that propelled our site from the second page to the top 3 results on Google for key search terms, directly leading to a significant and measurable increase in user traffic.",
  ];

  const schoolItems = [
    "Worked in a team of 3 to develop a granular sampler, utilizing the Hybrid Demucs machine learning model to allow for users to control the distribution of stems in real time. Developed utilizing JUCE and Python.",
    "Developed a full-stack website as part of a 3-person team, utilizing GitHub for version control, Node.js for back-end logic, React.js for an interactive front-end, and SQLite for data storage, while incorporating responsive design and HTTP requests for data processing and user interactions.",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 pt-32 dark:text-white">
      <div className="mx-auto max-w-screen-sm px-7 flex flex-col">
        <h1 className="text-md font-bold">Work Experience</h1>
        <section className="pt-8 space-y-16">
          <div>
            <Experience
              title="Software Engineer"
              name="State of California, Office of Legislative Counsel"
              dates="Jun 2024 - Present"
              blurb="As a part of the Enterprise Applications team, I am responsible for developing and maintaining web applications for the California State Legislature."
            />
            <OrderedList items={olcResponsibilities} />
          </div>
          <div>
            <Experience
              title="Software Engineer"
              name="Aria Communications"
              dates="Nov 2021 - Jun 2024"
              blurb="I contributed to various projects focusing on modernizing legacy systems and enhancing web application functionality."
            />
            <OrderedList items={ariaResponsibilities} />
          </div>
        </section>
        <h1 className="text-md font-bold pt-24">Education</h1>
        <section className="pt-8 ">
          <Experience
            title="Bachelors of Science, Computer Engineering"
            name="University of California, Davis"
            dates="Sep 2020 - Jun 2024"
            blurb="Gained foundational knowledge in software engineering, including principles of software design, development methodologies, algorithm analysis, data structures, system architecture, and effective collaboration in team environments through hands-on projects and coursework."
          />
          <OrderedList items={schoolItems} />
        </section>
      </div>
    </div>
  );
}
