import { Link } from "gatsby"
import React from "react"

export default function Header({ selected }) {
  return (
    <div
      className="sticky-inner"
      style={{
        display: "flex",
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginLeft: 50,
        }}
      >
        <Link to="/" className="headerLink">
          Kai Mihata
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginRight: 50,
        }}
      >
        <Link
          to="/"
          className={
            selected === "Home" ? "headerLink selectedHeaderLink" : "headerLink"
          }
        >
          Projects
        </Link>
        {/* <Link
          to="/experience"
          className={
            selected === "Experience"
              ? "headerLink selectedHeaderLink"
              : "headerLink"
          }
        >
          Experience
        </Link> */}
        {/* <Link
          to="/publications"
          className={
            selected === "Publications"
              ? "headerLink selectedHeaderLink"
              : "headerLink"
          }
        >
          Publications
        </Link> */}
        <Link
          to="/about"
          className={
            selected === "About"
              ? "headerLink selectedHeaderLink"
              : "headerLink"
          }
        >
          About
        </Link>
        <Link
          to="/contact"
          className={
            selected === "Contact"
              ? "headerLink selectedHeaderLink"
              : "headerLink"
          }
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
