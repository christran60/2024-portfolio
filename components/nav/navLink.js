// components/NavLink.js
import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 px-3 py-2 transition select-none"
    >
      {children}
    </Link>
  );
};

export default NavLink;
