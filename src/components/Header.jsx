import Logo from '../assets/bulutlogo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Header(){
    return(
        <div className='fixed w-full h-24 flex items-center justify-between px-4 bg-[#E7AB79]'>
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className='h-20'/>   
            </div>

            {/*menu*/}
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/*Hamburger */}
            <div className='hidden'><FaBars /></div>

            {/*Mobile Menu*/}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>

            {/*social icons*/}
            <div className='hidden'></div>
        </div>
    )
}

export default Header; 