import { useState } from "react"
import { Col } from "react-bootstrap"
import { Item } from "react-photoswipe-gallery"


export const DevCardMob = ({title, titleprecision, description, languages, imgUrl, orientation, refPage}) => {
    
const [closed, setClosed] = useState(true)

return(

 <Col className={title} sm={6} md={4}>
       <a href={refPage} >
    <div onClick={() => { setClosed(!closed); }} className='proj-imgbx'>
      <img src={imgUrl} />
      <div  className='proj-txtx' >
        {/* {!closed && ( */}
        <div className='bg-div visible'>
          <h4>{title}</h4>
          <p>{titleprecision}</p>
          <span>{description}</span>
          <br />
          <span className="languages">
            Languages :
            {languages}
          </span>
          {refPage &&(
            <span>
              Click
            </span>
          )}
        </div>
         {/* )}  */}
      </div>
    </div>
        </a>
  </Col>

)

}

export const DevCardDesktop = ({title, titleprecision, description, languages, imgUrl, orientation, refPage}) => {
    
  const [closed, setClosed] = useState(true)
  
  return(
  
   <Col className={title} sm={6} md={4}>
         <a href={refPage}>
      <div onClick={() => { setClosed(!closed); }} className='proj-imgbx-desktop'>
        <img src={imgUrl} />
        <div  className='proj-txtx-desktop'>
          {/* {!closed && ( */}
          <div className='bg-div visible'>
            <h4>{title}</h4>
            <p>{titleprecision}</p>
            <span>{description}</span>
            <br />
            <span className="languages">
              Languages :
              {languages}
            </span>
            {refPage &&(
              <span>
                Click
              </span>
            )}
          </div>
           {/* )}  */}
        </div>
      </div>
          </a>
    </Col>
  
  )
  
  }
  