import { useState } from "react"
import { Col } from "react-bootstrap"
import { Fullscreen } from "react-bootstrap-icons"

export const DevCard = ({title, titleprecision, description, languages, imgUrl}) => {
return(

<Col sm={6} md={4}>
<div className="proj-imgbx">
    <img src={imgUrl}/>
    <div className="proj-txtx">
        <h4>{title}</h4>
        <p>{titleprecision}</p>
        <span>{description}</span><br/>
        <span className="languages">Languages : {languages}</span>
    </div>
</div>

</Col>


)

}

export const ArtCard = ({softwares, imgUrl}) => {

    // const [imageSize, setImageSize] = useState(false)

    return(
    
    <Col sm={6} md={4}>
    <div className="proj-imgbx">
        <img src={imgUrl} 
        // onClick={setImageSize(!imageSize)} 
        />
            <span className="softwares">Softwares : {softwares}</span>
 
    </div>
    
    </Col>
    
    
    )
    
    }