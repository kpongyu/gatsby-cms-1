import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Wrapper from '../components/Wrapper'
import EditorsComponent from '../components/EditorsComponent'

const Other = () => {
  const data = useStaticQuery(query);
  // const student = data.allContentfulStudentTutorial.nodes[0];
  const {id,title,description} = data.allContentfulStudentTutorial.nodes[0]; 
  console.log(data);

  return (
    <Wrapper>
        <h1>{title}</h1>
       <p>{description.description}</p> 
       <EditorsComponent></EditorsComponent>
    </Wrapper>
  )
}

const query = graphql`
  query {
    allContentfulStudentTutorial {
      nodes {
        title
        description {
          id
          description
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default Other