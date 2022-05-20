import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero-img.png"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Aristotle</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero-img.png"
          alt="catfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="catfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
