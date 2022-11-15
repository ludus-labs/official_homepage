import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

export default function Header() {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <Navbar className="color-nav" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <LogoImg src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger">
          <span>
            <FontAwesomeIcon icon={faBars} color="white" size="1x" />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto" />
          <Nav>
            <Nav.Link
              href="/people"
              className={path === "/people" ? "selected" : "not-selected"}
            >
              팀 소개
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const LogoImg = styled.img`
  height: 25px;
`;
