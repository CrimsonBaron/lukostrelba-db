import React from 'react'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import pricing from "../json/pricing.json"

const Pricing = () => {

    const Navigate = useNavigate();
    const routeToContact = ()=>{
      let path = "/contact";
      Navigate(path);
    }


  return (
    <Container fluid className='pricingWrapper'>
            <div className="backGroundPageImg d-flex justify-content-center align-items-center backGround">
        
        <div className='title d-flex  align-items-center '>
            <h1 >Cenník </h1>
        </div>
     
  </div>
      
      <Container className='gridCards'>
          {
            pricing.pricing.map(memRow=>{
              return(
                <Row>
                  {
                    memRow.collum.map(coll=>{
                      return(
                        <Col className='d-flex align-items-stretch' >
                          <Card  className='cardStyle'>
                          <Card.Body>
                            <Card.Title>{coll.title}</Card.Title>
                            <Card.Text>
                                {coll.text}
                            </Card.Text>
                            <Card.Title>{coll.price}</Card.Title>
                            <Button variant="dark" onClick={routeToContact} className='buttonStyle'>To chci</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      )
                    })
                  }
                </Row>
              )
            })
          }
      </Container>

     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919 757.87"><clipPath id="clipping"><path  d="M1919,.14c-25.46-3.66-44.92,67.66-130,30.53-49.52-21.62-129.06-16.19-258,91.84-126.66,106.12-155.51,58.86-236,49.69-91-10.37-240-147.83-409-103.53-76.54,20.06-152,28.8-290,73.71-143,46.54-125,56.69-303.55-5.23C188.42,101.06,32.36,268.81,2,154.51c-.35-1.33-1.95-1-1.95.36L2,695.74a1.17,1.17,0,0,1,.86-1.21c87.66-14.83,218.34-76,356.68-103.74,235.27-47.24,321.73,22.89,449.43-26.6,148.37-57.5,467.8,230,619.1,72.2,85.72-89.41,167.13,86.31,360.76-76C1839.46,518,1883,411.22,1921,440.65Z"/></clipPath></svg>
    </Container>
  )
}

export default Pricing