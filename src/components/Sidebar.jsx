import { useEffect, useState } from "react";
import useUser from "../context/useUser";
import Style from "../styles/components/Sidebar.module.css";
import { NavLink, useLocation } from "react-router";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/solid";
import links from "../constants/links";

const Sidebar = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [active, setActive] = useState("/");
  const [activeLinks, setActiveLinks] = useState([]);
  const { user } = useUser((state) => state.user);
  const location = useLocation();
  useEffect(() => {
    if (
      user &&
      (String(user).toLowerCase().includes("lider") ||
        String(user).toLowerCase().includes("admin"))
    ) {
      setActiveLinks(links.lider);
    } else if (user && String(user).toLowerCase().includes("gerente")) {
      setActiveLinks(links.gerente);
    } else if (user && String(user).toLowerCase().includes("empleado")) {
      setActiveLinks(links.empleado);
    }
  }, [user]);
  useEffect(() => {
    setActive(location.pathname);
    setOpenMobile(false);
  }, [location]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggle = (link) => {
    setOpen(open === link.name ? null : link.name);
    setActive(link.path || location.pathname);
  };
  return (
    <>
      <nav id={Style.sidebar} className={openMobile ? Style.open : ""}>
        <picture>
          <img src="/brand.svg" alt="" />
        </picture>
        <ul className={Style.links}>
          {activeLinks.map((link) => (
            <li key={link.name}>
              {link.sublinks && link.sublinks.length > 0 ? (
                <button
                  type="button"
                  className={`${
                    active === link.path || open === link.name
                      ? Style.rotate
                      : ""
                  }`}
                  onClick={() => toggle(link)}
                >
                  <span>{link.name}</span>
                  <ChevronDownIcon width={24} height={24} />
                </button>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? Style.active : "")}
                >
                  {link.name}
                </NavLink>
              )}
              {link.sublinks && link.sublinks.length > 0 && (
                <ul
                  className={`${Style.sublinks} ${
                    active === link.path || open === link.name
                      ? Style.active
                      : ""
                  }`}
                >
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.name}>
                      <NavLink
                        to={sublink.path}
                        className={active === sublink.path ? Style.active : ""}
                      >
                        {sublink.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {isMobile && (
        <button
          type="button"
          id={Style.btnMenu}
          onClick={() => setOpenMobile(!openMobile)}
        >
          <Bars3Icon width={24} height={24} />
        </button>
      )}
    </>
  );
};

export default Sidebar;
