// components/Footer.js
import SocialLink from "../socials/socialLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark:bg-neutral-950 py-5 pt-32 pb-10 text-sm">
      <div className="mx-auto max-w-screen-sm px-6 flex justify-between items-center">
        <div>© {currentYear} Christopher Tran</div>
        <div className="flex space-x-8">
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
      </div>
    </footer>
  );
}
