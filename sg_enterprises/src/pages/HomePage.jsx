import "./styles.css";
import Footer from "../components/Footer/Footer";

function HomePage() {
	
	return (
		<div className="mainDiv">
			<div className="hr_line" />
			<main>
				<section id="home" className="hero-section">
					<div className="hero-content">
						<h2>Leading the Future of Industrial Innovation</h2>
						<p>
							Providing cutting-edge solutions for all your industrial needs.
						</p>
					</div>
				</section>

				<section id="about" className="about-section">
					<div className="about-container">
						<h2>About Us</h2>
						<p>
							Industrial Solutions Inc. has been a leader in the industrial
							sector for over 25 years. We specialize in providing high-quality
							products and services that meet the needs of various industries.
							Our team of experts is dedicated to innovation and excellence,
							ensuring that our clients receive the best solutions tailored to
							their specific requirements.
						</p>
					</div>
				</section>

				<section id="services" className="services-section">
					<div className="services-container">
						<h2>Our Services</h2>
						<div className="service-item">
							<h3>Consulting</h3>
							<p>Expert advice to optimize your industrial operations.</p>
						</div>
						<div className="service-item">
							<h3>Manufacturing</h3>
							<p>
								High-quality manufacturing solutions tailored to your needs.
							</p>
						</div>
						<div className="service-item">
							<h3>Maintenance</h3>
							<p>
								Comprehensive maintenance services to keep your operations
								running smoothly.
							</p>
						</div>
					</div>
				</section>

				<section id="projects" className="projects-section">
					<div className="projects-container">
						<h2>Our Projects</h2>
						<div className="project-item">
							<h3>Project Title 1</h3>
							<p>Brief description of the project and its impact.</p>
						</div>
						<div className="project-item">
							<h3>Project Title 2</h3>
							<p>Brief description of the project and its impact.</p>
						</div>
						<div className="project-item">
							<h3>Project Title 3</h3>
							<p>Brief description of the project and its impact.</p>
						</div>
					</div>
				</section>
			</main>


			<Footer />
		</div>
	);
}

export default HomePage;
