import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser, FaLinkedin } from "react-icons/fa";
import "./top.css";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Top() {
  const { pathname } = useLocation();
  const [currRoute, setCurrRoute] = useState(pathname);

  useEffect(() => {
    setCurrRoute(pathname);
  }, [pathname]);

  return (
    <div className="top">
      <div className="top-bar"></div>
      <div className="top-items">
        <div className="top-contacts">
          <div className="top-item">
            <FaPhoneAlt size={12} />
            <p>(99) 90453-8839</p>
          </div>
          <span>|</span>
          <div className="top-item">
            <MdEmail size={16} />
            <p>contato@genesistech.com.br</p>
          </div>
        </div>
        <div className="top-social">
          <div className="top-social-icons">
            <Link target="_blank" to="https://www.instagram.com/geduc.educacao">
              <AiOutlineInstagram size={18} className="top-social-icon" />
            </Link>
            <Link
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=5585994323201"
            >
              <AiOutlineWhatsApp size={18} className="top-social-icon" />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/geduc-soluções/"
            >
              <FaLinkedin size={16} className="top-social-icon" />
            </Link>
          </div>
          <Link
            to="minha-conta"
            className={`top-account-link ${
              currRoute === "/minha-conta" && "top-account--selected"
            }`}
          >
            <FaRegUser className="top-account-icon" size={16} />
            Minha conta
          </Link>
        </div>
      </div>
    </div>
  );
}
