import React from 'react';
import { menuItems } from './NavItems/menuItems';
import { Link } from 'react-router-dom';
import st from './Navbar.module.css';

function DropDown(props) {
  if (props.state) {
	return (<ul className={st.dropDown}>
		{(
			menuItems.map((item, index) => {
				return (
					<li className={st.navItems} key={index}>
					<Link to={item.path} className={st.navTags}>
						{item.title}
					</Link>
				</li>
				);
			})
		)}
	</ul>)
  }
  return <></>;
}

export default DropDown
