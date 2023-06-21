import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

const EditorsComponent = () => {
    const data = useStaticQuery(query);
    // const oneOffs = data.allContentfulEditorsdesk.nodes[0];
    const editorData = data.allContentfulRichTextExample.nodes[0].richTextField;
    console.log(editorData)

    const options = {
      renderMark: {
        [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
      },

      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data

          return (

            <a href={uri} className="underline">

              {children}

            </a>

          )

        },

        [BLOCKS.HEADING_2]: (node, children) => {




          return <h2>{children}</h2>

        },

        [BLOCKS.EMBEDDED_ASSET]: (node,) => {

                const {gatsbyImageData, title } = node.data.target

                // console.log(node)

                return (

                 <GatsbyImage

                    image={getImage(gatsbyImageData)}

                    alt={title}

                  />

                )

             },

      },

    }

    const output = renderRichText(editorData, options);

    return(

    <div>
{/* 
      <h1>{oneOffs.title}</h1>
      <h2>{oneOffs.subtitle}</h2> */}
      {output}
      </div>

    )

}

const query = graphql`

  query {

  allContentfulRichTextExample {
    nodes {
      richTextField {
          raw
          references {
            ... on ContentfulAsset {
            __typename
            contentful_id
            title
            gatsbyImageData(width: 300)

          }
        
      }
    }
    }}}


`

export default EditorsComponent