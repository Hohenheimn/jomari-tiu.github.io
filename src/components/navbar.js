import React, { useState} from 'react'
import { Link } from 'react-scroll'
import './navbar.css';

export default function Navbar() {

	const [active, setActive] = useState(false)
	const [btn, setbtn] = useState(true)

	document.addEventListener('scroll', function () {
		if(window.scrollY > 10){
			setActive(true)
		}
		else{
			setActive(false)
		}
	})

  return (
	  <div>
			<Link to="head" smooth={true} duration={500}>
				<div className={`scrollUp ${ active ? 'scrollUpShow' : '' }`}>
					<div><i className="fas fa-chevron-up"></i></div>
				</div>
			</Link>
			<nav className={`${ active ? 'activeNav' : '' }`}>
				<div className="inner-nav">
					<h1 className="jomari" data-aos="fade-right"><Link to="head" smooth={true} duration={500}>I R A M O J</Link></h1>
					<div>
						<div className="desktopMenu">
							<Link to="head" className="nav-item" smooth={true} duration={500}>Home</Link>
							<Link to="project" className="nav-item"  smooth={true} duration={500}>Project</Link>
							<Link to="about" className="nav-item"  smooth={true} duration={500}>About</Link>
							<Link to="contact" className="nav-item"  smooth={true} duration={500}>Contact</Link>
						</div>
					</div>

					<button className="btn-phoneMenu" onClick={ ()=> setbtn(btn => !btn) } data-aos="fade-left"><i class="fas fa-ellipsis-v"></i></button>

					<div className={ `phoneMenu ${btn ? 'phoneMenu-hide' : '' }`}>
						<div>
							<Link to="head" className="nav-item-phone" onClick={ ()=> setbtn(btn => !btn) } smooth={true} duration={500}>Home</Link>
							<Link to="project" className="nav-item-phone" onClick={ ()=> setbtn(btn => !btn) }  smooth={true} duration={500}>Project</Link>
							<Link to="about" className="nav-item-phone" onClick={ ()=> setbtn(btn => !btn) }  smooth={true} duration={500}>About</Link>
							<Link to="contact" className="nav-item-phone" onClick={ ()=> setbtn(btn => !btn) }  smooth={true} duration={500}>Contact</Link>
						</div>
					</div>

				</div>
			</nav>
		</div>

  )
}
