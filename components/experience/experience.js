// components/experience.js

const experience = ({ title, name, dates, blurb }) => {
  return (
    <div className="flex flex-col">
      <h1 className="">{title}</h1>{" "}
      <h2 className="text-sm text-blue-300">{name}</h2>
      <h2 className="text-sm text-gray-400">{dates}</h2>
      <p className="pt-4 text-sm font-sans font-light">{blurb}</p>
    </div>
  );
};
export default experience;
