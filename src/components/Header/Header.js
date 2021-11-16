import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import Image from "next/image";
// import logo from "/../../images/personal-logo.png"

// import logo from ""

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Img
} from "./HeaderStyles";
"../"

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a>
          <Img
            src="/images/logo.svg"
            priority="true"
            placeholder="blur"
            quality="100"
            style={{ height: 80, width: 80, borderRadius: "100%" }}
          />
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink style={{marginRight:0}}>About</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Kola92">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/adekola-olawale/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/olawale_adekola">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/kola.dev/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
