import * as React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => (
	<div
		className={className}
		style={{
			backgroundColor: "#464b4b !important",
		}}
		dangerouslySetInnerHTML={{ __html: content }}
	/>
);

const Content = ({ content, className }) => (
	<div
		className={className}
		style={{
			backgroundColor: "#464b4b !important",
			color: "white",
		}}
	>
		{content}
	</div>
);

Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
