import Top from "../top/Top";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { routes } from "../../variables";
import { useLocation } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const [currRoute, setCurrRoute] = useState(pathname);

  useEffect(() => {
    setCurrRoute(pathname);
  }, [pathname]);

  return (
    <div className="header">
      <Top />
      <div className="header-container">
        <div className="header-logo">
          <div className="header-logo-img">
            <img src={logo} alt="logo" className="header-img" />
          </div>
          <div className="title">
            <h3 className="header-logo-title">Geduc</h3>
          </div>
        </div>
        <div className="header-nav">
          <nav className="header-nav-routes">
            {routes.map((route, i) => (
              <div
                className={`route-item ${
                 route.to === currRoute && "route-item--selected"
                }`}
                key={i}
              >
                <Link to={route.to}>{route.name}</Link>
              </div>
            ))}
          </nav>
        </div>
        <div className="header-contact">
          <button className="header-contact-button">
            <Link to="/contato">Entre em contato</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
