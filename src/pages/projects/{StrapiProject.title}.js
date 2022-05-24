import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  let projectURL = data.strapiProject.image.localFile.publicURL
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
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
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
