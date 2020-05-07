import React from "react"
import { Link, StaticQuery } from "gatsby"
import { graphql } from "gatsby"
import ImageTest from "../assets/images/gatsby-astronaut.png"
import Img from "gatsby-image"

const Home = ({ data }) => (
  <div className="container-home">
    <h1> Primeira página com gatsby!!</h1>
    <p> O header fica em `gatsby-config.js`</p>
    <span className="span-block">
      - Inserir Imagem otimizada - Adicionar mais estilo - Graphql
    </span>
    <h4> Imagem otimizada </h4>
    <figure>
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "gatsby-astronaut.png" }) {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => <Img fixed={data.file.childImageSharp.fixed} />}
      />
    </figure>
    <h4> Imagem não otimizada </h4>
    <figure>
      <img
        src={ImageTest}
        alt="Imagem de um Astronauta"
        className="container-home__img-astronauta"
      />
    </figure>
    <Link to="/page-2/">Página 2</Link>
  </div>
)

export default Home
