import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import { Link } from "gatsby"
const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.localFile.publicURL}
      ></Seo>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
