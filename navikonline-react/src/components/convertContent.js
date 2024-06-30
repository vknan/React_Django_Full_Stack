const convertContent = (html, baseUrl) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Convert oembed to iframe
  const oembedElements = doc.querySelectorAll("oembed");
  oembedElements.forEach((oembed) => {
    const url = oembed.getAttribute("url");
    const videoId = url.split("youtu.be/")[1];
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", "true");

    oembed.parentNode.replaceChild(iframe, oembed);
  });

  // Convert image src to full URL
  const imgElements = doc.querySelectorAll("img");
  imgElements.forEach((img) => {
    const src = img.getAttribute("src");
    if (src && !src.startsWith("http")) {
      img.setAttribute("src", `${baseUrl}${src}`);
    }
  });

  return doc.body.innerHTML;
};

export default convertContent;
