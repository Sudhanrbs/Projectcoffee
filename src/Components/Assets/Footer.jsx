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
                    <li class="footer__item"><a className="footerlink" href="/docs/getting-started/introduction">Getting Started</a></li>
                    <li class="footer__item"><a className="footerlink" href="/docs/layout/breakpoints">Layout</a></li>
                    <li class="footer__item"><a className="footerlink" href="/docs/forms/overview">Forms</a></li>
                    <li class="footer__item"><a className="footerlink" href="/docs/components/accordion">Components</a></li>
                    <li class="footer__item"><a className="footerlink" href="/docs/utilities/transitions">Utilities</a></li>
                    </ul>
                    </div>
                    <div class="col footer__col">
                        <div class="cont">Community</div>
                        <ul class="footer__items clean-list">
                            <li class="footer__item"><a href="https://stackoverflow.com/questions/tagged/react-bootstrap" target="_blank" rel="noopener noreferrer" className="footerlink">Stack Overflow<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                            <li class="footer__item"><a href="https://discord.gg/AKfs9vpvRW" target="_blank" rel="noopener noreferrer" className="footerlink">Discord<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                            </ul>
                            </div><div class="col footer__col"><div class="cont">More</div><ul class="footer__items clean-list">
                                <li class="footer__item"><a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank" rel="noopener noreferrer" className="footerlink">GitHub<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                                </ul> 
                                </div>
                          </div>
                                <div class="footer__bottom text--center"><div class="footer__copyright">Copyright © 2024 React Bootstrap. Built with Docusaurus.</div></div></div>
                                
                                <hr></hr>
                                </footer>
    </>
  )
}
