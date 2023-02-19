import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'



export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "Creative Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(Math.random()*5)
    const period = 200



useEffect(()=> {
    let ticker = setInterval(()=> {
        tick()
    }, delta)

    return () => {clearInterval(ticker)}
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

    setText(updatedText)

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true)
        setDelta(period)
    } else if(isDeleting && updatedText === ''){
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(200)
    }
}



    return(
        <section className="banner" id="home">
           
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                 
                    <span className="tagline">
                        Welcome !
                    </span>  
                     <div className="intro">
                    <div className="h1wrap">
                    <h1>{`Hi I'm Xavier Yribarren `}<br/><span className="wrap">{text}</span></h1></div>
                  <div className="pwrap">  <p>I'm a 27 Junior Developer, former student of the Wild Code School, actually living in <span>Lyon</span>.</p>
                    <p>Although I've learned fullstack development, I tend to prefer the Frontend & Creative development!</p></div></div>
                    <a href="https://www.linkedin.com/in/xavier-yribarren-9a8777173/"><button className="text-decoration-none ">Let's connect <defs><ArrowRightCircle className="arrowsvg" size={25}/></defs></button></a>
                </Col>
                <Col >
                    {/* <img src={headerImg} alt='header img' /> */}
                 
                </Col>

                </Row>
            </Container>
            


        </section>
    )
}