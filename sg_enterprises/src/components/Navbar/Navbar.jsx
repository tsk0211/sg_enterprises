import logo from "../../assets/sg_logo.png";
import NavItems from "./NavItems/NavItems";
import st from "./Navbar.module.css";

function Navbar() {
	return (
		<nav>
			<div className={st.contactDiv}>
				<span class="material-symbols-outlined">call</span>
				+91 9673992485
				<span class="material-symbols-outlined">mail</span>
				sgk1970@gmail.com
			</div>
			<div className={st.navbar}>
				<div className={st.logoDiv}>
					<a href="./" className={st.siteAnchor}><img src={logo} alt="logo" className={st.logoImg} /> 
          <p className={st.logoTxt}>S.G. Enterprises</p></a>
				</div>

				<NavItems />
			</div>
		</nav>
	);
}

export default Navbar;
