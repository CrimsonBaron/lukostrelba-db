import React, {useRef} from 'react'
import { Container, Carousel } from 'react-bootstrap'
import arealJson from "../json/arealImgs.json"

const Areal = () => {

  let arealRef = useRef(null);
  let treningRef = useRef(null);

  return (
    <Container fluid className='pricingWrapper'>
        <div className="backGroundPageImg d-flex justify-content-center align-items-center backGround">
        
        <div className='title d-flex  align-items-center '>
            <h1 >Areál | Tréningy </h1>
        </div>
        </div>

        <Container className='aboutUsWrapper d-flex justify-content-center align-items-center me-auto' style={{marginBottom: "12vh"}}>

                 <Container className="aboutUs" ref={(ref) =>{arealRef = ref}}>
                   <h2>Areál</h2>
                </Container>

                <Container className='caroulselWrapper'>
                <Carousel className='carousel'>
                    {
                        arealJson.slides.map(slide=>{
                            return(
                                <Carousel.Item interval={1000}>
                                  <img
                                    className="d-block w-100"
                                    src={slide.img}
                                    alt={slide.title}
                                  />
                                  <Carousel.Caption>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.caption}</p>
                                  </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                </Container>

                <Container className="aboutUs" ref={(ref)=>{treningRef = ref}}>
                   <h2>Tréningy</h2>
                </Container>

                <Container className='calendar d-flex justify-content-center align-items-center me-auto'>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23353535&ctz=Europe%2FPrague&showTitle=0&showDate=1&showNav=1&showTz=0&showCalendars=0&src=bHVrb3N0cmVsYmFkb2xuaWJvdXNvdkBnbWFpbC5jb20&src=MWVsazZzZmtjMmx1N2ptaDY0cHY0dXUxMDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uY3plY2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23F09300&color=%230B8043" frameborder="0" scrolling="no"></iframe>
                </Container>
        </Container>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919 757.87"><clipPath id="clipping"><path  d="M1919,.14c-25.46-3.66-44.92,67.66-130,30.53-49.52-21.62-129.06-16.19-258,91.84-126.66,106.12-155.51,58.86-236,49.69-91-10.37-240-147.83-409-103.53-76.54,20.06-152,28.8-290,73.71-143,46.54-125,56.69-303.55-5.23C188.42,101.06,32.36,268.81,2,154.51c-.35-1.33-1.95-1-1.95.36L2,695.74a1.17,1.17,0,0,1,.86-1.21c87.66-14.83,218.34-76,356.68-103.74,235.27-47.24,321.73,22.89,449.43-26.6,148.37-57.5,467.8,230,619.1,72.2,85.72-89.41,167.13,86.31,360.76-76C1839.46,518,1883,411.22,1921,440.65Z"/></clipPath></svg>

    </Container>
  )
}

export default Areal