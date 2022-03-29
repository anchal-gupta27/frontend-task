import React from 'react'
import "./Specialization.css"

function Specialization() {

    var specialization = [
        "Artificial Intelligence",
        "Big Data",
        "Cloud Computing",
        "Computer Architecture",
        "Computer Graphics",
        "Computer Networks",
        "Cyber Security",
        "Data Structures",
        "Embedded Systems",
        "Information Management and Data Analytics",
        "Machine Learning",
        "Mobile and Web Computing",
        "Software Engineering"
    ]

    return (
        <div className='specialization'>
            <div className='orange-line'>

            </div>
            <h4>Popular Specializations</h4>
            <p>Below are some of the popular specializations of Computer Science</p>
            <div className='items'>
                {
                    specialization.map(prop =>
                        <div className='item-style' >{prop}</div>
                    )
                }
            </div>

        </div>
    )
}

export default Specialization