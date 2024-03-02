import React from "react";
import Icons from "../../assets/Icons";
export const applyMapper = (name) => {
  const value = Icons?.[name];
  return value ? value : () => {};
};
function Icon({ name, classes }) {
  const IconComponent = applyMapper(name)();
  return IconComponent ? <IconComponent className={classes} /> : null;
}

export default Icon;
