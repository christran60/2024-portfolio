import Link from "next/link";

const redirect = ({ buttonText, buttonLink }) => {
  return (
    <div>
      {buttonText && buttonLink && (
        <Link href={buttonLink}>
          <button className="relative text-white text-sm font-semibold focus:outline-none group">
            {buttonText}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 transition-transform duration-300 transform origin-left scale-x-0 group-hover:scale-x-100" />
          </button>
        </Link>
      )}
    </div>
  );
};

export default redirect;
