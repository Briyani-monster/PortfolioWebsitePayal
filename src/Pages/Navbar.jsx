import React from "react";
import PYLink from "../components/Link";

function Navbar({ links }) {
  return (
    <nav className="flex gap-2 mx-2 my-3">
      {links?.map((item) => (
        <PYLink classes={"nav-link"} {...item} />
      ))}
    </nav>
  );
}

export default Navbar;
