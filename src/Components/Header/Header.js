import React from 'react'
import comapanyLogo from "../../images/Ubergrad_transparent-logo.png"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import "./Header.css"

function Header() {
    return (
        <div className='header-container'>
            <div className='header-items'>
                <div className='company-icon'>
                    <img src={comapanyLogo} alt="" />
                </div>
                <div className='navbar-list'>
                    <span>
                        Countries < MdOutlineKeyboardArrowDown />                    </span>
                    <span>
                        Universities <MdOutlineKeyboardArrowDown />
                    </span>
                    <span>
                        Courses <MdOutlineKeyboardArrowDown />
                    </span>
                    <span>
                        Exams <MdOutlineKeyboardArrowDown />
                    </span>
                    <span>
                        Events <MdOutlineKeyboardArrowDown />
                    </span>
                </div>
                <div className='btn-style'>
                    <button>
                        Store
                    </button>
                    <button>
                        TALK TO COUNSELLOR
                    </button>
                </div>
                <div className='external-links'>
                    <a href='#'>Login</a>
                    <a href='#'>Signup</a>
                </div>

            </div>
        </div>
    )
}

export default Header