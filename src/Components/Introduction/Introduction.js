import React from 'react'
import "./Introduction.css"

function Introduction() {
    return (
        <div className='introduction'>
            <div className='tagline'>
                <h3>MASTERS IN COMPUTER SCIENCE IN US</h3>
                <div className='orange-line'>

                </div>
                <h3 style={{ margin: 30, fontWeight: 400 }}>Grow Your Skills to Advance <br /> Your Career Path</h3>
            </div>
            <div className='intro-content'>
                <div className='orange-line'>

                </div>
                <h4>Introduction</h4>
                <p>
                    Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to practical disciplines (including the design and implementation of hardware and software).[2][3] Computer science is generally considered an area of academic research and distinct from computer programming.
                </p>
                <p>
                    Computer graphics and computational geometry address the generation of images. Programming language theory considers approaches to the description of computational processes, and database theory concerns the management of repositories of data. Human–computer interaction investigates the interfaces through which humans and computers interact, and software engineering focuses on the design and principles behind developing software.
                </p>
                <p>
                    Algorithms and data structures are central to computer science.[5] The theory of computation concerns abstract models of computation and general classes of problems that can be solved using them. The fields of cryptography and computer security involve studying the means for secure communication and for preventing security vulnerabilities.
                </p>

            </div>
        </div>
    )
}

export default Introduction