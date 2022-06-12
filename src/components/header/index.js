import React from 'react'
import { Eventcreate, Headerlogo, Logo, Logreg, Side, Stheader, Sti } from './style';
import logoimg from "../images/logo/logo.png"

function Header() {
    return (
    <Stheader>
        <Side>
            <Headerlogo>
                <Logo src={logoimg} alt="logo"/>
            </Headerlogo>
            <div>
                <Sti className="fa-solid fa-phone"></Sti>
                +1 (678) 999 3323
            </div>
            <div>
                <Sti className="fa-solid fa-envelope"></Sti>
                info@EventTitans.com
            </div>
        </Side>
        <Side>
            <div>
                <Logreg>
                    <Sti className="fa-solid fa-user"></Sti>
                    login | register
                </Logreg>
            </div>
            <div>
                <Eventcreate>
                    <Sti className="fa-solid fa-star"></Sti>
                    create Event
                </Eventcreate>
            </div>
        </Side>
    </Stheader>
  )
}

export default Header;