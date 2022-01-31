const NAME = "Vaishnavi Munjuluru";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "dp.jpeg", width: "300px" }),
	React.createElement(
		"p",
		null,
		" Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/Vaishnavi-Munjuluru", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));