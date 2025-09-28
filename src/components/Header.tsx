import { NavLink, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import logo from "../assets/images/wp-fire-logo-removebg.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHashActive = (hash: string) =>
    location.pathname === "/" && location.hash === hash;

  const linkClassUnified = (
    { isActive }: { isActive?: boolean } = {},
    hash?: string
  ) => {
    let active = isActive || (hash && isHashActive(hash)) || false;
    if (
      location.pathname === "/" &&
      location.hash !== "" &&
      hash === undefined
    ) {
      active = false;
    }
    return clsx(
      "inline-block no-underline font-normal text-[1rem] hover:text-[#cf711f] active:text-[#b24f00] focus:outline-none focus:ring-0",
      active ? "text-[#cf711f]" : "text-[#333]"
    );
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (location.hash !== "") {
        navigate("/", { replace: true });
      }
    }
  };

  return (
    // always sticky, no transitions, solid white background
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="w-full max-w-[70rem] mx-auto px-[1rem] h-[10vh] flex items-center justify-between">
        <NavLink to="/">
          <img className="h-[9vh] block" alt="WP Fire logo" src={logo} />
        </NavLink>

        <nav className="flex items-center flex-grow justify-end pr-[2rem]">
          <ul className="list-none flex items-center gap-[3rem]">
            <li>
              <NavLink
                to="/"
                end
                className={(props) => linkClassUnified(props)}
                onClick={handleHomeClick}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={(props) => linkClassUnified(props)}
              >
                Services
              </NavLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#about-section"
                className={linkClassUnified({}, "#about-section")}
              >
                About
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#contact-section"
                className={linkClassUnified({}, "#contact-section")}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        <div className="flex gap-[1rem] items-center justify-center">
          <div className="border-l border-gray-400 h-[10px] mr-[2.5px]" />
          <ion-icon
            name="call-outline"
            style={{ fontSize: "2rem", color: "#e53935" }}
          />
          <div className="flex flex-col">
            <span className="text-[0.875rem] font-normal text-[#555]">
              CALL US NOW
            </span>
            <h2 className="text-[1.25rem] font-semibold">07211 555 432</h2>
          </div>
        </div>
      </div>
    </header>
  );
}
