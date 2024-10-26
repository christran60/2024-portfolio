import Experience from "@/components/experience/experience";
import OrderedList from "@/components/experience/orderedList";
export const metadata = {
  title: "Experience | Christopher Tran",
  description: "Experience page of Christopher Tran's Portfolio",
};
export default function Work() {
  const olcResponsibilities = [
    "Currently playing a key role in converting a customer-facing Microsoft Silverlight application to WPF using the MVVM design pattern to enhance user experience and architecture",
    "Provide technical production support, troubleshoot and resolve software/hardware issues for mission-critical systems.",
    "Collaborate with cross-functional teams to ensure accuracy, quality, and timely delivery of technical work.",
    "Develop and maintain complex .NET web applications to support legislative business functions.",
  ];

  const ariaResponsibilities = [
    "Created a .NET Core web API project that utilized the Identity authentication API to verify user credentials and return relevant data.    Conducted extensive testing using a REST client to ensure successful implementation.",
    "Led project to modernize legacy customer interface by migrating from Visual Basic to a .NET ecosystem, leveraging Razor Pages and MVC architecture with C#, resulting in improved performance and maintainability.",
    "Integrated the Stripe API to streamline payment processing, ensuring a seamless and secure transaction experience for users.",
    "Collaborated within an Agile sprint to identify bugs and deploy fixes, successfully meeting the target deadline for a webpage revamp aimed at improving Google search performance.",
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
