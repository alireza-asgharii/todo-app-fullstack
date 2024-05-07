import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ title, path }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <li className={`${currentPath === path ? "active" : ""}`}>
      <Link
        href={path}
        className="block hover:border-2 border-2 hover:border-done border-transparent  hover:opacity-[0.9] transition-colors my-3 py-2 px-2 rounded-md"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
