import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { DevCard, ArtCard } from "./ProjectCard";
import { YoutubeEmbed } from "./YoutubeEmbed";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from "../assets/img/ProjImgs/Narif.png"
import projImg2 from "../assets/img/ProjImgs/Nope.png"
import projImg3 from "../assets/img/ProjImgs/Emerga.png"
import artImg1 from "../assets/ArtImgs/pringle3x1.png"
import artImg2 from "../assets/ArtImgs/SkullRoom.png"
import artImg3 from "../assets/ArtImgs/tub-min.png"
import fourByFour from "../assets/img/ProjImgs/FourbyFour.gif"

export const Projects = () => {
  const devProj = [
    {
      title: "1st School Project",
      titleprecision : "(Week 3-4 of the course)",
      description: "Pretending there's a Native American Roulette Federation, it's basically a Russian Roulette with a bow. It was a fun exercise to show that something absurd with a serious shape could still work!",
      languages : "HTML, CSS, JavaScript",
      imgUrl: projImg1,
    },
    {
      title: "2nd School Project",
      titleprecision : "(Week 6-10 of the course)",
      description: "We had to create a React App and fetch some API informations. We then decided to create an alibi generator to turn down some propositions!",
      languages : "HTML, CSS, JavaScript, React",
      imgUrl: projImg2,
    },
    {
      title: "3rd School Project",
      titleprecision : "(Week 12-22 / External client)",
      description: "We worked on a webApp for EmerGa, a life-saving app allowing faster interventions and more precise information on an incident. We had to make both Frontend and Backend parts",
      languages : "HTML, CSS, JavaScript, React, Express, MySQL",
      imgUrl: projImg3,
    },
    {
      title: "Four by Four(WIP)",
      description: "Personnal project of making a 'Connect Four' on which you play on all 3 axes. The red arrows appearing are showing the 76 axes of calculations!",
      languages : "ThreeJS, Cannon-JS, React",
      imgUrl: fourByFour,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  const artProj = [
    {
      // title: "Pringles",
      // description: "Full Blender project",
      imgUrl: artImg1,
      softwares : "Blender"
    },
    {
      // title: "Business Startup",
      // description: "Design & Development",
      imgUrl: artImg2,
      softwares : "Blender"
    },
    {
      // title: "Business Startup",
      // description: "Design & Development",
      imgUrl: artImg3,
      softwares : "Blender"
    },
    // {
    //   // title: "Business Startup",
    //   // description: "Design & Development",
    //   imgUrl: artVid1,
    //   softwares : "Blender"
    // },
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>You'll find here some stuff I made !</p>
            <Tab.Container id="projects-tabs" defaultActiveKey='first'>
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-itemps-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Dev</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Art</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Music
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            devProj.map((project,index) => {
                                return(
                                    <DevCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                        {
                            artProj.map((project,index) => {
                                return(
                                    <ArtCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <YoutubeEmbed embedId="4ujgky1Vc3k"/>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  );
};
