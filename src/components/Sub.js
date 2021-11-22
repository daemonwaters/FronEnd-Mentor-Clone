import React from 'react'
import {ReactComponent as SubLogo} from '../sub.svg'

function Sub() {
    return (
        <div className="sub">
            <div className="sub-content">
                <div className="sub-text">
                    <h3>
                    SUBSCRIBE TO OUR NEWSLETTER
                    </h3>
                    <p>
                    Stay up-to-date with new challenges, featured solutions, selected articles and Frontend Mentor latest news
                    </p>
                    <div className="sub-input">
                        <div>
                        <input type="checkbox" id="sub"/>
                        <label htmlFor="sub">
                        I am happy for Frontend Mentor to contact me by email
                        </label> </div>
                        <div>
                        <input type="text" name="sub-email" placeholder="email@example.com"/>
                        <button>
                            SUBSCRIBE
                         </button>
                         </div>
                    </div>
                </div>
                <div className="sub-img">
                    <SubLogo/>
                </div>
            </div>
        </div>
    )
}

export default Sub
