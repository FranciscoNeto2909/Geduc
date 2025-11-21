import Top from "../top/Top";
import { Link } from "react-router-dom";
import { routes } from "../../variables";
import { useLocation } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { pathname } = useLocation();
  const [currRoute, setCurrRoute] = useState(pathname);
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverTree, setHoverTree] = useState(false);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const [openedMenu, setOpenedMenu] = useState(false);

  function handleOpenHoverOne(i: number) {
    setMenuIndex(i);
    setHoverOne(!hoverOne);
    if (hoverOne == false) {
      setHoverTwo(false);
      setHoverTree(false);
      setMenuIndex(null);
    }
  }

  function handleOpenHoverTwo() {
    setHoverTwo(!hoverTwo);
  }
  function handleOpenHoverTree() {
    setHoverTree(!hoverTree);
  }

  function handleOpenMenu() {
    setOpenedMenu(!openedMenu);
  }

  function handleNavigate() {
    setMenuIndex(null);
    setOpenedMenu(false);
  }

  useEffect(() => {
    setCurrRoute(pathname);
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setOpenedMenu(true);
    } else {
      setOpenedMenu(false);
    }
  }, []);
  return (
    <div className="header">
      <Top />
      <div className="header-container">
        <div className="header-logo">
          <Link className="header-logo-img" to="/">
            <img
              src="https://geduc.com.br/wp-content/uploads/2025/04/Logo-1.png"
              alt="logo"
              className="header-img"
            />
          </Link>
        </div>
        <button
          type="button"
          className="header-menu-button"
          onClick={handleOpenMenu}
        >
          {openedMenu ? (
            <AiOutlineClose size={26} />
          ) : (
            <AiOutlineMenu size={26} />
          )}
        </button>
        <div className={`header-nav ${!openedMenu && "hide-nav"}`}>
          <nav className="header-nav-routes">
            {routes.map((route, i) =>
              !route?.hasOptions ? (
                <div onClick={handleNavigate} className={`route-item`} key={i}>
                  <Link
                    className={`route-item-link ${
                      route?.to === currRoute && "route-item--selected"
                    }`}
                    to={route?.to || ""}
                  >
                    {route?.name}
                  </Link>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => handleOpenHoverOne(i)}
                    className={`route-item route-item--list ${
                      i == menuIndex && "route-item--selected"
                    }`}
                  >
                    {route.name}
                  </button>
                  <ul
                    className={`route-item-options ${
                      !(!hoverOne && i == menuIndex) && "route-item-hidden"
                    }`}
                  >
                    {i == menuIndex &&
                      route.options.map((item, i) => (
                        <li className="route-item-option">
                          <button
                            type="button"
                            className="route-item-option-button"
                            onClick={
                              i == 0 ? handleOpenHoverTwo : handleOpenHoverTree
                            }
                          >
                            {item.name}
                          </button>
                          <ul>
                            {(i == 0 ? hoverTwo : hoverTree) &&
                              item.items.map(op => (
                                <li className="route-item-option-secItem">
                                  <a href={op.to} target="_blank">
                                    {op.name}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </div>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
