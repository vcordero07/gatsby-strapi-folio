import React from "react"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {" "}
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright &copy; {new Date().getFullYear()}|{" "}
          <span>
            <Link to="/" className="footer-slug">
              <span>CatDev</span>
            </Link>
          </span>{" "}
          | all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
