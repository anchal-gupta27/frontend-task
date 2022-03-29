import React from 'react'
import amazon from "../../images/amazon.png"
import apple from "../../images/apple.svg"
import csc from "../../images/csc.png"
import deloitte from "../../images/deloitte.png"
import facebook from "../../images/facebook.webp"
import google from "../../images/google.webp"
import hp from "../../images/hp.png"
import intel from "../../images/intel.png"
import microsoft from "../../images/microsoft.webp"
import "./Companies.css"

function Companies() {

    var companies = [
        amazon,
        apple, csc,
        deloitte,
        microsoft,
        facebook,
        google,
        hp,
        intel
    ]

    return (
        <div className='companies'>
            <div className='orange-line'>

            </div>
            <h4>Top companies for the Computer Science in the USA</h4>
            <p>
                Here's a list of some of the popular comapnies for Computer Science in USA
            </p>
            <div className='company-list'>
                {
                    companies.map(prop =>
                        <div style={{ padding: "0 100px" }}>

                            <img src={prop} alt="" width={150} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Companies