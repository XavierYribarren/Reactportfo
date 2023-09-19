import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css"
import blender from "../assets/img/SoftIcons/blender.svg"
import css3 from "../assets/img/SoftIcons/css3.svg"
import express from "../assets/img/SoftIcons/express.svg"
import html5 from "../assets/img/SoftIcons/html5.svg"
import javascript from "../assets/img/SoftIcons/javascript.svg"
import mysql from "../assets/img/SoftIcons/mysql.svg"
import nodejs from "../assets/img/SoftIcons/nodejs.svg"
import photoshop from "../assets/img/SoftIcons/photoshop.svg"
import react from "../assets/img/SoftIcons/react.svg"
import threejs from "../assets/img/SoftIcons/threejs.svg"


import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const iconsArr = [blender, css3, express, html5, javascript, mysql, nodejs, photoshop, react, threejs]

//     iconsArr.map((item,i) => console.log(item )+ <div className="item" key={i}>
//     <img src={item} alt="Image"/>
//     <h5>Tralalayoupi</h5>
// </div>)

      return(
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                    {/* <div className="skill-bx-wrap"> */}
                    {/* <div className="skill-bx"> */}
                        <h2>
                            Skills
                        </h2>
                        <p> You might recognize some logos of softwares or technologies I use !</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="skill-slider">
                        {iconsArr.map((item) => (
          <div className='item' key={item}>
             <img src={item} alt="Image"/>
          </div>
        ))}


                        </Carousel>
                    {/* </div> */}
                    {/* </div> */}
                    </Col>
                </Row>
            </Container>
<img className="background-image-left" src={colorSharp} alt="backgroundimg"/>

        </section>
      )
}