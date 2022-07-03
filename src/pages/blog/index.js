import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import lightPurple from "../../components/colors";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<div
					className="full-width-image-container margin-top-0"
					style={{
						backgroundImage: `url('/img/blog-cover.png')`,
					}}
				>
					<h1
						className="has-text-weight-bold is-size-1"
						style={{
							boxShadow:
								"0.5rem 0 0 #fff, -0.5rem 0 0 #fff",
							backgroundColor: "white",
							color: "#202121",
							padding: "1rem 2.5rem 1rem 2.5rem",
						}}
					>
						All Posts
					</h1>
				</div>
				<section className="section">
					<div className="container">
						<div className="content">
							<BlogRoll />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
