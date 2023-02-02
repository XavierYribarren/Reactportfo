import { useState } from "react"
import { Col } from "react-bootstrap"


export const DevCard = ({title, titleprecision, description, languages, imgUrl}) => {
return(

<Col className={title} sm={6} md={4}>
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

    const [imageSize, setImageSize] = useState(false)

setImageSize? console.log(imageSize) : ''

    return(
    

    <div  onClick={() => setImageSize(!imageSize)} 
    className="artProjs">
        <img src={imgUrl} 
     className={imageSize ?  "full" :  "mini"}
        />
             <div className="softwares">Softwares :
             <span>{softwares}
             </span>
             </div>
 
    </div>

    
    
    )
    
    }