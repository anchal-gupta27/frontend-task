import React from 'react'
import Carnegie from "../../images/carnegie.png"
import Harvard from "../../images/harvard.png"
import mit from "../../images/mit.png"
import Princeton from "../../images/princeton.jpg"
import Stanford from "../../images/stanfordd.png"
import "./Universities.css"

function Universities() {

    var universities = [
        {
            name: "Stanford University",
            ranking: "1",
            fee: "$55,890 (approx 40.24 lakhs INR)",
            logo: Stanford
        },
        {
            name: "Massachusetts Institute of Technology",
            ranking: "2",
            fee: "$55,890 (approx 40.24 lakhs INR)",
            logo: mit
        },
        {
            name: "Carnegie Melon University",
            ranking: "3",
            fee: "$55,890 (approx 40.24 lakhs INR)",
            logo: Carnegie
        },
        {
            name: "Harvard University",
            ranking: "4",
            fee: "$55,890 (approx 40.24 lakhs INR)",
            logo: Harvard
        },
        {
            name: "Princeton University",
            ranking: "5",
            fee: "$55,890 (approx 40.24 lakhs INR)",
            logo: Princeton
        },
        // {
        //     name: "California Institute of Technology",
        //     ranking: "6",
        //     fee: "$55,890 (approx 40.24 lakhs INR)"
        // },
        // {
        //     name: "University of California, Los Angeles",
        //     ranking: "7",
        //     fee: "$55,890 (approx 40.24 lakhs INR)"
        // },
        // {
        //     name: "Cornell University",
        //     ranking: "8",
        //     fee: "$55,890 (approx 40.24 lakhs INR)"
        // },
        // {
        //     name: "Georgia Institute of Technology",
        //     ranking: "9",
        //     fee: "$55,890 (approx 40.24 lakhs INR)"
        // },
        // {
        //     name: "Columbia University",
        //     ranking: "10",
        //     fee: "$55,890 (approx 40.24 lakhs INR)"
        // }
    ]

    return (
        <div className='university'>
            <div className='orange-line'>

            </div>
            <h4>Top universties for MS in Computer Science in the USA</h4>
            <p>
                Here is a list of the top ten universities in the USA according to the Times
                Higher Education (THE) World Rankings 2020 for computer science courses. As per THE, the universities are ranked based on their teaching style, international outlook,
                industry income, and research facilities.
            </p>
            <table>
                <tbody>
                    <tr>
                        <th>UNIVERSITY</th>
                        <th>RANKING</th>
                        <th>FEE</th>
                    </tr>
                    {
                        universities.map(prop =>
                            <tr>
                                <td> <img src={prop.logo} alt="" width={15} /> {prop.name}</td>
                                <td>{prop.ranking}</td>
                                <td>{prop.fee}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Universities