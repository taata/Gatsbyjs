import React from "react"
import { Link } from "gatsby"
import ImageTest from '../images/gatsby-astronaut.png';

const Home = () => (
    <div className="container-home">
        <h1> Título bonito</h1>
        <h4> Texto bonito embaixo</h4>
        <span className="span-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis eleifend lacus. Curabitur arcu dui, interdum eget ornare et, molestie et quam. Curabitur eget justo libero. Phasellus ut nunc lacinia, consequat purus sed, faucibus diam. Sed vitae massa sem. Nam condimentum lacus neque, sagittis porttitor magna accumsan ut. Quisque ac leo eu mi laoreet semper eget id felis.
        </span>
        <figure>
            <img src={ImageTest} alt="Imagem de um Astronauta" className="container-home__img-astronauta"/>
        </figure>

        <Link to="/page-2/">Página 2</Link>
    </div>
);

export default Home;
