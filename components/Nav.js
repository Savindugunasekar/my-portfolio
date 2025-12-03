// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiCpuChip,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "  home", path: "/", icon: <HiHome /> },
  { name: "  about", path: "/about", icon: <HiUser /> },
  { name: "  techskills", path: "/services", icon: <HiCpuChip /> },
  { name: "  work", path: "/work", icon: <HiViewColumns /> },
  { name: "  contact", path: "/contact", icon: <HiEnvelope /> },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav
      className="
        flex flex-col items-center gap-y-4 fixed z-50
        bottom-0 top-auto w-full h-[80px]   /* mobile/tablet */
        xl:top-0 xl:bottom-0 xl:right-[2%] xl:w-auto xl:h-screen /* desktop */
        xl:justify-center
      "
    >
      {/* inner */}
      <div
        className="
          flex w-full xl:inline-flex xl:flex-col items-center 
          justify-between xl:justify-center gap-y-6 
          px-4 md:px-40 xl:px-2 h-full xl:h-max py-6 
          bg-white/10 backdrop-blur-sm text-3xl xl:text-xl 
          xl:rounded-full transition-all duration-300
        "
      >
        {navData.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`
              group flex items-center justify-center 
              transition-all duration-300
              ${link.path === pathname ? "text-accent" : "text-white"}
            `}
          >
            <div
              className={`
                flex items-center 
                px-3 py-2 rounded-full
                bg-white/10 backdrop-blur-sm
                border border-white/10
                transition-all duration-300
                hover:bg-white/20
                overflow-hidden
              `}
            >
              {/* icon */}
              <span className="text-xl flex-shrink-0 flex justify-center min-w-[24px]">
                {link.icon}
              </span>

              {/* label expands on hover (XL only) */}
              <span
                className="
                  hidden xl:inline-block 
                  text-sm font-medium
                  overflow-hidden
                  max-w-0 opacity-0
                  group-hover:max-w-[120px]
                  group-hover:opacity-100
                  transition-all duration-300
                "
              >
                {link.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
