import React from "react";

function SkipToContent({ content = "main" }) {
  return (
    <React.Fragment>
      <a
        className="skip"
        href={"#" + content}
        aria-label="skip to the main content"
      >
        Skip to Content
      </a>
    </React.Fragment>
  );
}

export default SkipToContent;
