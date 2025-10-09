import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import "./top.css";

export default function Top() {
  return (
    <div className="top">
      <div className="top-contacts">
        <div className="top-item">
          <FaPhoneAlt size={12} />
          <p>(99) 90453-8839</p>
        </div>
        <span>|</span>
        <div className="top-item">
          <MdEmail size={16}/>
          <p>contato@genesistech.com.br</p>
        </div>
      </div>
      <div className="top-account">
        <FaRegUser size={16}/>
        <Link to="conta">Minha conta</Link>
      </div>
    </div>
  );
}
