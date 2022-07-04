import React from "react";
import { Link } from "gatsby";
import logo_black from "../img/logo_black.svg";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
		};
	}

	toggleHamburger() {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active",
					  })
					: this.setState({
							navBarActiveClass: "",
					  });
			}
		);
	}

	render() {
		return (
			<nav
				className="navbar is-transparent"
				role="navigation"
				aria-label="main-navigation"
				style={{
					color: "white",
					backgroundColor: "#6fb970",
					position: "fixed",
					top: "0",
					width: "100%",
				}}
			>
				<div className="container">
					<div
						className="navbar-brand"
						style={{
							alignItems: "center",
							backgroundColor: "#6fb970",
						}}
					>
						<Link
							to="/"
							className="navbar-item"
							title="logo_black"
						>
							<img
								src={logo_black}
								alt="HearJournal"
								style={{
									height: "clamp(2rem, 3rem, 4rem)",
									width: "auto",
									maxHeight: "4rem",
									marginLeft: "20px",
									marginRight: "20px",
									// padding: "0.5rem 0.5rem 1rem 0.5rem",
								}}
							/>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							role="menuitem"
							tabIndex={0}
							onKeyPress={() => this.toggleHamburger()}
							onClick={() => this.toggleHamburger()}
							style={{
								color: "#100823",
								marginRight: "10px",
							}}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}`}
						style={{
							backgroundColor: "#6fb970",
						}}
					>
						<div
							className="navbar-start has-text-centered"
							style={{
								textTransform: "uppercase",
							}}
						>
							<Link className="navbar-item" to="/about">
								About
							</Link>
							{/* <Link className="navbar-item" to="/products">
								Products
							</Link> */}
							<Link className="navbar-item" to="/blog">
								Posts
							</Link>
							<Link className="navbar-item" to="/contact">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
