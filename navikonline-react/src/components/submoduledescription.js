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
      "p",
      "div",
      "span",
      "ul",
      "ol",
      "li",
      "br",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "code",
      "pre",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    allowedAttributes: {
      a: ["href", "title", "class"],
      iframe: [
        "src",
        "width",
        "height",
        "frameborder",
        "allow",
        "allowfullscreen",
      ],
      oembed: ["url"],
      img: ["src", "alt", "title", "width", "height", "class"],
      p: ["class"],
      div: ["class"],
      span: ["class"],
      ul: ["class"],
      ol: ["class"],
      li: ["class"],
      table: ["class"],
      thead: ["class"],
      tbody: ["class"],
      tr: ["class"],
      th: ["class"],
      td: ["class"],
    },
  });

  const convertedDescription = convertContent(sanitizedDescription, baseUrl);

  return <div>{parse(convertedDescription)}</div>;
};

export default SubmoduleDescription;
