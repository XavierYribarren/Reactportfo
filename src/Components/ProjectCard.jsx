import { useState } from "react"
import { Col } from "react-bootstrap"
import { Item } from "react-photoswipe-gallery"


export const DevCard = ({title, titleprecision, description, languages, imgUrl, orientation}) => {
return(

<Col className={title} sm={6} md={4}>
<div className={orientation === "mob" ? "proj-imgbx" : "proj-imgbx-desktop"}>
    <img src={imgUrl}/>
    <div className={orientation === "mob" ? "proj-txtx" : "proj-txtx-desktop"}>
        <h4>{title}</h4>
        <p>{titleprecision}</p>
        <span>{description}</span><br/>
        <span className="languages">Languages : {languages}</span>
    </div>
</div>

</Col>


)

}

