import React from "react";
import { FaHome, FaSignInAlt, FaUser } from "react-icons/fa";

import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <a href="google.com.br">
        <FaHome size={24} />
      </a>
      <a href="twitch.tv">
        <FaUser size={24} />
      </a>
      <a href="youtube.com.br">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
