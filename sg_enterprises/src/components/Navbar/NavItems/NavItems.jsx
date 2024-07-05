import st from "./NavItems.module.css";

function NavItems(props) {
	return (
		<ul className={st.navItemList}>
			<li className={st.navItems}>
				<a href="./" className={st.navTags}>
					<div>Home</div>
				</a>
			</li>
			<li className={st.navItems}>
				<a href="./" className={st.navTags}>
					<div>About Us</div>
				</a>
			</li>
			<li className={st.navItems}>
				<a href="#" className={st.navTags}>
					<div>Products</div>
				</a>
			</li>
			<li className={st.navItems}>
				<a href="#" className={st.navTags}>
					<div>Capabilities</div>
				</a>
			</li>
			<li className={st.navItems}>
				<a href="#" className={st.navTags}>
					<div>Contact</div>
				</a>
			</li>
			<button className={st.menuBtn}>
				<span class="material-symbols-outlined">menu</span>
			</button>
		</ul>
	);
}

export default NavItems;
