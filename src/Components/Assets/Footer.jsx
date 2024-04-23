import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (<>
   
    <footer className="footer">
    <div class="container container-fluid">
        <div class="row footer__links">
            <div class="col footer__col">
            <img className='logo' src="starbuks01.png" alt="Logo" fetchpriority="high" class="logo"></img>
                <div class="footer__title">MOONBUCKS</div>
                <ul class="footer__items clean-list">
                    <li class="footer__item"><a className="footerlink" href="/introduction">About Us</a></li>
                    <li class="footer__item"><a className="footerlink" href="nts">Our Heritage</a></li>
                    <li class="footer__item"><a className="footerlink" href="">Coffeehouse</a></li>
                    <li class="footer__item"><a className="footerlink" href="rdion">Our Company</a></li>
                    <li class="footer__item"><a className="footerlink" href="itions">Learn More</a></li>
                    </ul>
                    </div>
                    <div class="col footer__col">
                        <div class="cont">Community</div>
                        <ul class="footer__items clean-list">
                            <li class="footer__item"><a href=".com/questions/tagged/react-bootstrap" target="_blank" rel="noopener noreferrer" className="footerlink">Stack Overflow<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                            <li class="footer__item"><a href="fs9vpvRW" target="_blank" rel="noopener noreferrer" className="footerlink">order<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                            </ul>
                            </div><div class="col footer__col"><div class="cont">More</div><ul class="footer__items clean-list">
                                <li class="footer__item"><a href="act-bootstrap/react-bootstrap" target="_blank" rel="noopener noreferrer" className="footerlink">FAQs<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                                </ul> 
                                </div>
                          </div>
                                <div >
                                  <hr></hr>
                                  <div class="footer__copyright">Copyright © 2024 MoonSucks.</div></div></div>
                                
                                
                                </footer>
    </>
  )
}
