import Top from "../top/Top";
import { Link } from "react-router-dom";
import {
  publicRoutes,
  privateRoutes,
  routes,
  appTeacher,
  appStudent,
} from "../../variables";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { pathname } = useLocation();
  const [currRoute, setCurrRoute] = useState(pathname);
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedPlataforma, setOpenedPlataforma] = useState(false);
  const [openedPublic, setOpenedPublic] = useState(false);
  const [openedPrivate, setOpenedPrivate] = useState(false);
  const [openedDownApp, setOpenedDownApp] = useState(false);
  const [openedTLink, setOpenedTLink] = useState(false);
  const [openedSLink, setOpenedSLink] = useState(false);

  function handleOpenMenu() {
    setOpenedMenu(!openedMenu);
  }

  function handleNavigate() {
    setOpenedMenu(false);
  }

  function handleOpenPlataforma() {
    setOpenedPlataforma(!openedPlataforma);
  }

  function handleOpenPublic() {
    setOpenedPublic(!openedPublic);
  }
  function handleOpenPrivate() {
    setOpenedPrivate(!openedPrivate);
  }

  function handleOpenAppdownload() {
    setOpenedDownApp(!openedDownApp);
  }

  function handleOpenTLink() {
    setOpenedTLink(!openedTLink);
  }

  function handleOpenSLink() {
    setOpenedSLink(!openedSLink);
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
            {routes.map((route, i) => (
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
            ))}
            <div className="header-nav-plataforma">
              <button
                onClick={handleOpenPlataforma}
                className={`route-item ${
                  openedPlataforma && "route-item--selected"
                }`}
              >
                <span className="route-item-name">Plataforma</span>
                <FaChevronDown className="route-icon" size={12} />
              </button>
              {openedPlataforma && (
                <div className="nav-plataforma">
                  <div className="nav-plataforma-item">
                    <button
                      className={`route-item ${
                        openedPublic && "route-item--selected"
                      }`}
                      onClick={handleOpenPublic}
                    >
                      <span className="route-item-name">Rede Pública</span>
                      <FaChevronDown className="route-icon" size={12} />
                    </button>
                    {openedPublic && (
                      <ul className="route-item-lists">
                        {publicRoutes.map((item, i) => (
                          <li className="route-item-list" key={i}>
                            <a href={item.to}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="nav-plataforma-item">
                    <button
                      className={`route-item ${
                        openedPrivate && "route-item--selected"
                      }`}
                      onClick={handleOpenPrivate}
                    >
                      <span className="route-item-name">Rede Privada</span>
                      <FaChevronDown className="route-icon" size={12} />
                    </button>
                    {openedPrivate && (
                      <ul className="route-item-lists">
                        {privateRoutes.map((item, i) => (
                          <li className="route-item-list" key={i}>
                            <a href={item.to}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="header-nav-app">
              <button
                onClick={handleOpenAppdownload}
                className={`route-item ${
                  openedDownApp && "route-item--selected"
                }`}
              >
                <span className="route-item-name">Baixar App</span>
                <FaChevronDown className="route-icon" size={12} />
              </button>
              {openedDownApp && (
                <div className="nav-plataforma nav-donwload-app">
                  <div className="nav-plataforma-item">
                    <button
                      className={`route-item ${
                        openedPublic && "route-item--selected"
                      }`}
                      onClick={handleOpenTLink}
                    >
                      <span className="route-item-name">Professor</span>
                      <FaChevronDown className="route-icon" size={12} />
                    </button>
                    {openedTLink && (
                      <ul className="route-item-lists">
                        {appTeacher.map((item, i) => (
                          <li className="route-item-list" key={i}>
                            <a href={item.to}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="nav-plataforma-item">
                    <button
                      className={`route-item ${
                        openedPrivate && "route-item--selected"
                      }`}
                      onClick={handleOpenSLink}
                    >
                      <span className="route-item-name">Aluno</span>
                      <FaChevronDown className="route-icon" size={12} />
                    </button>
                    {openedSLink && (
                      <ul className="route-item-lists">
                        {appStudent.map((item, i) => (
                          <li className="route-item-list" key={i}>
                            <a href={item.to}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
