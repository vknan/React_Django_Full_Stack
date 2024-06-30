import React from "react";
import sanitizeHtml from "sanitize-html";
import convertContent from "./convertContent";
import parse from "html-react-parser";

const SubmoduleDescription = ({ description, baseUrl }) => {
  const sanitizedDescription = sanitizeHtml(description, {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "iframe",
      "figure",
      "oembed",
      "img",
    ],
    allowedAttributes: {
      a: ["href"],
      iframe: [
        "src",
        "width",
        "height",
        "frameborder",
        "allow",
        "allowfullscreen",
      ],
      oembed: ["url"],
      img: ["src", "alt", "title", "width", "height"],
    },
  });

  const convertedDescription = convertContent(sanitizedDescription, baseUrl);

  return <div>{parse(convertedDescription)}</div>;
};

export default SubmoduleDescription;
