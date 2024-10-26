// components/SocialLink.js

export default function SocialLink({ href, imgSrc, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-xl bg-gray-800 transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-400" // Add padding and glowing effect
    >
      <img
        src={imgSrc}
        alt={alt}
        width={28}
        height={28}
        className="filter invert" // Make the image white
      />
    </a>
  );
}
