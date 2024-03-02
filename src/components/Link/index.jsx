import React from "react";

function PYLink({ isOpenNewPage, url, label, classes }) {
  return (
    <a className={classes} target={isOpenNewPage ? "_blank" : ""} href={url}>
      {label}
    </a>
  );
}

export default PYLink;
