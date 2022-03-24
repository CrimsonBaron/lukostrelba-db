import React, {useRef, useState} from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'

const Contact = () => {

  
  const [from,setFrom] = useState('');
  const [msg,setMsg] = useState('');
  const [show,setShow] = useState(false);

  const handleOpem = () =>{setShow(true)}
  const handleClose = () =>{setShow(false)}

  const Send = async () =>{
    if(from !== '' && msg !== ''){
      let res = await fetch("/email",
      {
        method: "POST",
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
          "from": from,
          "msg": msg,
          "to":"kiss.o@seznam.cz"
        }),
      });

      setFrom('');
      setMsg('');
      
    }
    handleOpem();
  }


  return (
    <Container fluid className='pricingWrapper'>
        <div className="backGroundPageImg d-flex justify-content-center align-items-center backGround">
        
        <div className='title d-flex  align-items-center '>
            <h1 >Kontakt </h1>
        </div>
        </div>

        <Container className="aboutUsWrapper d-flex justify-content-center align-items-center me-auto ">
                <Container className="aboutUs2">
                   <h2>Kontakt</h2>
                </Container>
                <Container className='aboutUsText me-auto '>
                      <Container className='text2'>
                        <p>Lukostřelbu povede pan Kišš</p>
                        <p>Adresa – Palackého 131, Dolní Bousov </p>
                        <p>Telefonní číslo +420 607 528 761 </p>
                        <p>Za špatného počasí se střílí u něj v autoservisu,/na adrese trvalého pobytu/ dokud počasí dovolí, venku na lukostřelnici .Jde se k ní cestou za průmyslovým zbožím /ul.Požárníků/, sousedí s fotbalovým hřištěm. </p>
                        <p>Máme k dispozici 5 vlastních luků, tak může střílet vždy jen 5 střelců, v autoservisu 3. Objednání je možné na čtvrtek od 16 do 18hod. a na sobotu od 9. do 13. hod.</p>
                      </Container>
                </Container>
          </Container>

        <Container className='ContactForm  '>
        <h2 >Kontaktujte nás</h2>
        <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Emailová addressa</Form.Label>
           <Form.Control type="email" placeholder="PepicekKarluv356@email.com" onChange={(e)=>{setFrom(e.target.value)}} value={from}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Obsah</Form.Label>
           <Form.Control as="textarea" rows={3} onChange={(e)=>{setMsg(e.target.value)}} value={msg} />
         </Form.Group>
        </Form>
        <Button className='button' onClick={Send}>Poslat</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Zasláno</Modal.Title>
        </Modal.Header>
      </Modal>


        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919 757.87"><clipPath id="clipping"><path  d="M1919,.14c-25.46-3.66-44.92,67.66-130,30.53-49.52-21.62-129.06-16.19-258,91.84-126.66,106.12-155.51,58.86-236,49.69-91-10.37-240-147.83-409-103.53-76.54,20.06-152,28.8-290,73.71-143,46.54-125,56.69-303.55-5.23C188.42,101.06,32.36,268.81,2,154.51c-.35-1.33-1.95-1-1.95.36L2,695.74a1.17,1.17,0,0,1,.86-1.21c87.66-14.83,218.34-76,356.68-103.74,235.27-47.24,321.73,22.89,449.43-26.6,148.37-57.5,467.8,230,619.1,72.2,85.72-89.41,167.13,86.31,360.76-76C1839.46,518,1883,411.22,1921,440.65Z"/></clipPath></svg>
    </Container>
  )
}

export default Contact