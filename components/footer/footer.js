// components/Footer.js
import SocialLink from "../socials/socialLink";

export default function Footer() {
  return (
    <footer className="dark:bg-neutral-950 py-5 pt-32 pb-10 text-sm">
      <div className="mx-auto max-w-screen-sm px-6 flex justify-between items-center">
        <div>© 2024 Christopher Tran</div>
        <div className="flex space-x-8">
          <SocialLink
            href="https://github.com/christran60"
            imgSrc="https://simpleicons.org/icons/github.svg"
            alt="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/christophertran-dev"
            imgSrc="https://simpleicons.org/icons/linkedin.svg"
            alt="LinkedIn"
          />
        </div>
      </div>
    </footer>
  );
}
