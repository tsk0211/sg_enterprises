import st from "./NavItems.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, products, cap } from "./menuItems";

const NavItems = () => {
	const [drop, setDrop] = useState(false);
	const [drop1, setDrop1] = useState(false);

	return (
		<ul className={st.navItemList}>
			{menuItems.map((item, index) => {

				if (item.title.toLowerCase() === "products") {
					return (
						<div
							className={st.dropDiv}
							key={index}
							onMouseEnter={() => setDrop(true)}
							onMouseLeave={() => setDrop(false)}
						>
							<li className={st.navItems} key={index}>
								{console.log(item.path)}
								<Link to={item.path} className={st.navTags} key={index}>
									{item.title}
								</Link>
							</li>
							<div className={st.dummyBox}></div>

							{drop && (
								<ul className={st.dropdown}>
									{products.map((e, i) => {
										return (
											<li className={st.navItems} key={i}>
												<Link to={"./"} className={st.navTags} key={i}>
													{e.title}
												</Link>
											</li>
										);
									})}
								</ul>
							)}
						</div>
					);
				}
				
				if (item.title.toLowerCase() === "capabilities") {
					return (
						<div
							className={st.dropDiv}
							key={index}
							onMouseEnter={() => setDrop1(true)}
							onMouseLeave={() => setDrop1(false)}
						>
							<li className={st.navItems} key={index}>
								<Link to={item.path} className={st.navTags} key={index}>
									{item.title}
								</Link>
							</li>
							<div className={st.dummyBox}></div>

							{drop1 && (
								<ul className={st.dropdown}>
									{cap.map((e, i) => {
										return (
											<li className={st.navItems} key={i}>
												<Link to={e.path} className={st.navTags} key={i}>
													{e.title}
												</Link>
											</li>
										);
									})}
								</ul>
							)}
						</div>
					);
				}

				return (
					<li className={st.navItems} key={index}>
						<Link to={item.path} className={st.navTags}>
							{item.title}
						</Link>
					</li>
				);

			})}
			
		</ul>
	);
};

export default NavItems;
