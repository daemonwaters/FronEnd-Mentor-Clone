import React from 'react'
import { createPortal } from 'react-dom'
import {AiFillGithub as GitHub} from 'react-icons/ai'
import { FaCode, FaGlobe, FaLaptop, FaLockOpen, FaUsers } from 'react-icons/fa'

function Modal({open}) {
    if(!open){
        return null;
    }
    return  createPortal(
        <div className="modal">
                 <ul>
                    <li><GitHub/>
                        Login with github</li>
                    <li><FaLaptop/>
                        challanges</li>
                    <li><FaCode/>
                        solutions</li>
                    <li><FaGlobe/>
                        recources</li>
                    <li><FaLockOpen/>
                        unlock
                        <span>
                            Pro
                        </span>
                        </li>
                    <li><FaUsers/>
                        hire developers</li>
                </ul>
        </div>,
        document.getElementById("portal")
    );
}

export default Modal
