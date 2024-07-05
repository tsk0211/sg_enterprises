import logo from "../../assets/sg_logo.png";
import NavItems from "./NavItems/NavItems";
import st from "./Navbar.module.css";
import { useState } from "react";
import DropDown from "./DropDown.jsx";

const Navbar = () => {
	const [drop, setDrop] = useState(false);


	return (
		<nav className={st.navbarMain}>
			<div className={st.contactDiv}>
				<span className="material-symbols-outlined">call</span>
				+91 9673992485
				<span className="material-symbols-outlined icon">mail</span>
				sgk1970@gmail.com
			</div>
			<div className={st.navbar}>
				<div className={st.logoDiv}>
					<a href="./" className={st.siteAnchor}>
						<img src={logo} alt="logo" className={st.logoImg} />
						<p className={st.logoTxt}>S.G. Enterprises</p>
					</a>
				</div>

				<NavItems />

				<button className={st.menuBtn} onClick={() => {
					setDrop(!drop);
					 
				}}>
					<span className="material-symbols-outlined">menu</span>
				</button>

				<DropDown state={drop} />
			</div>
		</nav>
	);
}

export default Navbar;
