import { useRef, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import maillogo from "../assets/img/mailW.png"
import emailjs from '@emailjs/browser';


export const Contact = () => {

    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
      }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState('Send')

const onFormUpdate = (category, value) => {
   category.preventDefault()
   value.preventDefault()
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        setButtonText('Sending...')
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        form.current, 
        process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setButtonText('Sent')
            setTimeout(() => {
                setButtonText('Send')
            }, 2000);
            setFormDetails(formInitialDetails);
        }, (error) => {
            setButtonText('Oups')
        });
    };



    return(
        <section  className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={maillogo} className="mail-logo" alt="Contact me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Hit Me Up!</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.name}  onChange={(e) => onFormUpdate('name', e.target.value)} name="from_name" placeholder="Your name"/>
                                </Col>
                
                                <Col sm={6} className="px-1">
                                    <input type="email"  value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}name="from_email" placeholder="Your e-mail" />
                                </Col>
                          
                                <Col>
                                <textarea row="6" name="message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} placeholder="Your message..."></textarea>
                               <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                
                            </Row>
                       </form>
                    </Col>
                </Row>
            </Container>
        </section>



    )
}