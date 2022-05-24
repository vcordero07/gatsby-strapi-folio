import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                cols="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
