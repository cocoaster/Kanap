import React from "react";

function TagList(props) {
const { tags } = props;

return (
<ul className="tagList">
{tags.map((tag, index) => (
<li key={index}>{tag}</li>
))}
</ul>
);
}

export default TagList;




