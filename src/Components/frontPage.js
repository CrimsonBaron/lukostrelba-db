import React, { useRef, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from "framer-motion"

import cards from "../json/cards.json"


const FrontPage = () => {

      
      

    return (
      <Container fluid style={{padding: "0"}}>
          <div className="backGroundPageImg d-flex justify-content-center align-items-center backGround">
          
                <div className='logo d-flex  align-items-center '>
                    <img
                    className="d-inline-block align-top"
                    alt=""
                    src="/Logo.svg"
                    width="50%"
                    height="50%"
                    />
                    <h1 >Lukostřelba Dolní Bousov </h1>
                    
                </div>
             
          </div>

          <Container className="aboutUsWrapper d-flex justify-content-center align-items-center me-auto ">
                <Container className="aboutUs" id='aboutUs'>
                   <h2>O nás</h2>
                </Container>
                <Container className='aboutUsText me-auto '>
                      <Container className='text'>
                          <p>Vítám vás na stránkách lukostřelby v Dolním Bousově.</p>
                          <p>Zapsaný spolek Lukostřelba Dolní Bousov  . vznikl proto, aby si lidé mohli osvojit i tento sport u nás, pobavit se tímto sportem,  zkusit si vystřelit. Areál střelnice se nachází v Dolním Bousově viz mapka.</p>
                          <p>Lukostřelbu vám představí  a předvede  Oskar Kišš, který se lukostřelbou zabývá už řadu let.Je členem 1.Královského lukostřeleckého spolku Praha.</p>
                          <p>Nejprve střílel několik let z olympijského luku, poté ho oslovil luk kladkový. V roce 2020, 2021 i 2022 se stal mistrem ČR  v terčové lukostřelbě v kategorii seniorů.</p>
                          <p>Můžete si přijít vyzkoušet střelbu na terč. K dispozici máme olympijské i tradiční luky pro zápůjčku .</p>
                          <p>Můžete střílet buď jednorázově nebo pravidelně trénovat, vždy je nutné dohodnout termín s O. Kiššem.</p>
                          <p>V případě zájmu o tento sport poradíme jak a co si pořídit, případně rádi pro Vás zakoupíme. </p>
                      </Container>
                </Container>
          </Container>
          
          <Container className='gridCards' style={{marginTop:"20vh"}} >
            <Row>
               <Col  sm className='d-flex align-items-stretch'  >
               <Card  className='cardStyle' >
                    <Card.Body >
                      <Card.Title>{cards.cards[0].title}</Card.Title>
                      <Card.Text>
                        {
                             cards.cards[0].text
                        }
                      </Card.Text>
                      <Card.Link href={cards.cards[0].link} style = {{textDecoration: "none", color:"#32bbbf"}}>Více</Card.Link>
                    </Card.Body>
                  </Card>
               </Col>
               <Col sm={5} className='d-flex align-items-stretch'  >
               <Card  className='cardStyle' >
                    <Card.Body >
                      <Card.Title>{cards.cards[1].title}</Card.Title>
                      <Card.Text>
                        {
                              cards.cards[1].text
                        }
                      </Card.Text>
                      <Card.Link href={cards.cards[1].link} style = {{textDecoration: "none", color:"#32bbbf"}}>Více</Card.Link>
                    </Card.Body>
                  </Card>
               </Col>
               <Col  className='d-flex align-items-stretch '  >
               <Card  className='cardStyle'>
                    <Card.Body >
                      <Card.Title>{cards.cards[2].title}</Card.Title>
                      <Card.Text>
                        {
                              cards.cards[2].text
                        }
                      </Card.Text>
                      <Card.Link href={cards.cards[2].link} style = {{textDecoration: "none", color:"#32bbbf"}}>Více</Card.Link>
                    </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm className='d-flex align-items-stretch'  >
               <Card  className='cardStyle'>
                    <Card.Body >
                      <Card.Title>{cards.cards[3].title}</Card.Title>
                      <Card.Text>
                        {
                              cards.cards[3].text
                        }
                      </Card.Text>
                      <Card.Link href={cards.cards[3].link} style = {{textDecoration: "none", color:"#32bbbf"}}>Více</Card.Link>
                    </Card.Body>
                  </Card>
               </Col>
               <Col sm className='d-flex align-items-stretch'>
               <Card  className='cardStyle'>
                    <Card.Body >
                      <Card.Title>{cards.cards[4].title}</Card.Title>
                      <Card.Text>
                        {
                              cards.cards[4].text
                        }
                      </Card.Text>
                      <Card.Link href={cards.cards[4].link} style = {{textDecoration: "none", color:"#32bbbf"}}>Více</Card.Link>
                    </Card.Body>
                  </Card>
               </Col>
               <Col sm className='d-flex align-items-stretch'>
               <Card  className='cardStyle'>
                    <Card.Body >
                      <Card.Title>{cards.cards[5].title}</Card.Title>
                      <Card.Text>
                        {
                              cards.cards[5].text
                        }
                      </Card.Text>
                      <Card.Link href={cards.cards[5].link} style = {{textDecoration: "none", color:"#32bbbf"}}>Více</Card.Link>
                    </Card.Body>
                  </Card>
               </Col>
            </Row>  
          </Container>

          
         
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919 757.87"><clipPath id="clipping"><path  d="M1919,.14c-25.46-3.66-44.92,67.66-130,30.53-49.52-21.62-129.06-16.19-258,91.84-126.66,106.12-155.51,58.86-236,49.69-91-10.37-240-147.83-409-103.53-76.54,20.06-152,28.8-290,73.71-143,46.54-125,56.69-303.55-5.23C188.42,101.06,32.36,268.81,2,154.51c-.35-1.33-1.95-1-1.95.36L2,695.74a1.17,1.17,0,0,1,.86-1.21c87.66-14.83,218.34-76,356.68-103.74,235.27-47.24,321.73,22.89,449.43-26.6,148.37-57.5,467.8,230,619.1,72.2,85.72-89.41,167.13,86.31,360.76-76C1839.46,518,1883,411.22,1921,440.65Z"/></clipPath></svg>
          
      </Container>
     
    )
  }



export default FrontPage
