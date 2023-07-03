import React from "react";
import { FaHome, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <Link to="google.com.br">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUser size={24} />
      </Link>
      <Link to="youtube.com.br">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
