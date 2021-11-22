import React from 'react'
import {data} from './LateData'

function LateSec() {
    return (
        <div className="late">
            <h2>
            LATEST CHALLENGES
            </h2>
            <div className="late-grid">
                {data.map((item,index)=>{
                    return (
                        <div className="late-item" key={index}>
                            <div className="late-img">
                                <img src={item.img}/>
                            </div>
                            <div className="late-content">
                                <h3>
                                    {item.title}
                                </h3>
                                <h4>
                                    {item.level}
                                </h4>
                                <p>
                                    {item.info}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{
                color:'#000',
                cursor:'pointer'
            }}>
                view all challanges
            </h2>
        </div>
    )
}

export default LateSec
