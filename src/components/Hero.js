import React from 'react'
import {AiFillGithub as GitHub} from 'react-icons/ai'
import Img from '../pics/hero.png'
function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                    <span>Improve</span> your front-end coding skills by building real projects
                    </h1>
                    <p>
                    Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 254,445 developers building projects, reviewing code, and helping each other get better.
                    </p>
                    <button>
                        Login with GitHub
                        <GitHub/>
                    </button>
                </div>
                <div className="hero-img">
                    <img src={Img}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
