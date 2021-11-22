import React from 'react'
import {ReactComponent as Logo} from '../logo.svg'
import {AiFillGithub as GitHub} from 'react-icons/ai'

export default function NavBar({handleModal , open}) {
    return (
        <header>
            <div className="logo">
                <Logo/>
            </div>
            <nav>
                <ul>
                    <li>challanges</li>
                    <li>solutions</li>
                    <li>recources</li>
                    <li>unlock</li>
                    <li>hire developers</li>
                    <li>
                     <button>
                        Login with GitHub 
                        <GitHub/>
                    </button>
                    </li>
                </ul>
            </nav>
            <i onClick={handleModal} className={open ?'fa fa-times bars':'fa fa-bars bars' }></i>
        </header>
    )
}
