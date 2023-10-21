import {CgMenuRightAlt, CgClose} from "react-icons/cg"
import { useState } from "react"
import './mobile.css'
import { pages } from "../../logic"

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const hamburgerIcon =   <CgMenuRightAlt onClick={() => setOpen(!open)} className="hamburger" size="40px" color="white"/>

    const closeIcon =   <CgClose onClick={() => setOpen(!open)} className="hamburger" size="40px" color="white"/>
console.log(open);
    return ( 
        <div open={open} className="mobile-navigation">
          {open ? closeIcon : hamburgerIcon}{open && 
            <ul>
               {pages.map((page, index) => {
                  return(
                      <a key={index} href={page.ref}>
                        <li>{page.name}</li>
                      </a>
                  )
                })
              }
            </ul>
          }
        </div>
     );
}
 
export default MobileNavigation;