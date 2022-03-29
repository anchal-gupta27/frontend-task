import React from 'react'
import "./Requirements.css"

function Requirements() {

    var requirements = [
        {
            name: "Degree",
            info: "A four years Bachelor's degree in a related field from an accredited institution with a minimum of"

        },
        {
            name: "IELTS",
            info: "A minimum score of 6.5"
        },
        {
            name: "TOEFL iBT",
            info: "Acceptable Overall Score Range: 79-100"
        },
        {
            name: "General GRE",
            info: "A minimum of 300 is required to get into a reasonably good university. Top universities like Stanford require close to 330 range"
        },
        {
            name: "Statement of Purpose(SOP)",
            info: "2 SOPs"
        },
        {
            name: "Letter of Recommendation(LOR)",
            info: "Three letters of recommendation (including at least two academic references)"
        }

    ]

    return (
        <div className='requirements'>
            <div className='orange-line'>

            </div>
            <h4>Requirements</h4>
            <div className='requirements-criteria'>
                <table>
                    <tbody>
                        {
                            requirements.map(prop =>
                                <tr>
                                    <td style={{ textAlign: "center", fontWeight: 700, width: "15%" }}>{prop.name}</td>
                                    <td style={{ fontWeight: 400 }}>{prop.info}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Requirements