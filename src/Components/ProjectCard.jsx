import { Col } from "react-bootstrap"

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

export const ArtCard = ({title, titleprecision, description, softwares, imgUrl}) => {
    return(
    
    <Col sm={6} md={4}>
    <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{titleprecision}</p>
            <span>{description}</span><br/>
            <span className="softwares">Softwares : {softwares}</span>
        </div>
    </div>
    
    </Col>
    
    
    )
    
    }