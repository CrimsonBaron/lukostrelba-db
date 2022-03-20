import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 footerWrapper ">
        <div className="container-fluid text-center text-md-left" >
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Kde nás najdete</h5>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.2374770390776!2d15.1287275292612!3d50.4402272528438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea92bce5cf55f%3A0x9a57138c2fb4bc1f!2sLukost%C5%99elba%20Doln%C3%AD%20Bousov!5e1!3m2!1scs!2scz!4v1647640051649!5m2!1scs!2scz"  />
            </div>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
    
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Odkazy</h5>
                    <ul className="list-unstyled">
                        <li><a href="/StanovyLukostřelbaDolníBousovz.s..docx" download>Stanovy</a></li>
                    </ul>
                </div>
    
               
            </div>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2022 Copyright: TheCrimsonBaron
            
        </div>
    
    </footer>
    )
  }


export default Footer
