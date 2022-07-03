import * as React from "react";

import logo_green from "../img/logo_green.svg";

let currentYear = new Date().getFullYear();

const Footer = class extends React.Component {
	render() {
		return (
			<footer
				className="footer has-text-white-ter"
				style={{
					backgroundColor: "#202121",
				}}
			>
				<div
					className="content has-text-centered"
					style={{
						width: "100vw",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						src={logo_green}
						alt="Hear Journal"
						style={{
							width: "auto",
							height: "5.5rem",
							marginBottom: "1rem",
						}}
					/>
				</div>
				<div className="content has-text-centered has-text-white-ter">
					<div className="container has-text-white-ter">
						<div
							style={{ maxWidth: "100vw" }}
							className="columns"
						>
							<div
								style={{
									width: "95%",
									height: "auto",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginBottom: "2.5rem",
									// color: "#333",
								}}
							>
								Made with 🖥️ in Raleigh, NC. | ©️ 2021 -{" "}
								{currentYear}
							</div>
							{/* <div className="column is-4">
								<section className="menu">
									<ul className="menu-list">
										<li>
											<Link
												to="/"
												className="navbar-item"
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												className="navbar-item"
												to="/about"
											>
												About
											</Link>
										</li>
										<li>
											<Link
												className="navbar-item"
												to="/products"
											>
												Products
											</Link>
										</li>
										<li>
											<Link
												className="navbar-item"
												to="/contact/examples"
											>
												Form Examples
											</Link>
										</li>
										<li>
											<a
												className="navbar-item"
												href="/admin/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Admin
											</a>
										</li>
									</ul>
								</section>
							</div>
							<div className="column is-4">
								<section>
									<ul className="menu-list">
										<li>
											<Link
												className="navbar-item"
												to="/blog"
											>
												Latest Stories
											</Link>
										</li>
										<li>
											<Link
												className="navbar-item"
												to="/contact"
											>
												Contact
											</Link>
										</li>
									</ul>
								</section>
							</div> */}
							{/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div> */}
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
