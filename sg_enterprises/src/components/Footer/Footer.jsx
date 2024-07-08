import st from "./Footer.module.css";

const Footer = function (props) {
	return (
		<footer className={st.footer}>
			<div className={st.footer_bottom}>
				<p className={st.copyright}>
					&copy; Copyright @{new Date().getFullYear()} reserved to SG
					Enterprises.
				</p>
			</div>

			<div className={st.footer_container}>
				<h3 className={st.footer_title}>Contact Us</h3>
				<div className={st.footer_div1}>
					<div className={st.footer_div2}>
						<p>123 Industrial Avenue</p>
						<p>Industrial City, IN 12345.</p>
					</div>
					<div className={st.footer_div3}>
						<p className={st.icon}>
							<span className="material-symbols-outlined icon">call_log</span>
						</p>
						<p> sg_enterprises_contact@gmail.com</p>
						<p>Phone: (+91) 9673992485</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
