import React from 'react'
import {ReactComponent as SlackLogo} from '../slack.svg'
import {ReactComponent as Stick} from '../stick.svg'

function Slack() {
    return (
        <div className="slack">
            <div className="slack-content">
                <SlackLogo/>
                <h2>
                JOIN OUR SLACK COMMUNITY
                </h2>
                <p>
                Join over 80,000 people taking the challenges, talking about their code, helping each other, and chatting about all things front-end!
                </p>
                <div className="email">
                    <input type="text" name="email" placeholder="email@example.com"/>
                    <button>
                        request invite
                    </button>
                </div>
                <Stick/>
            </div>

        </div>
    )
}

export default Slack
