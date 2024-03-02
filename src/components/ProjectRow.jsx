import { useMemo, useRef, useState } from "react";
import Icon from "./Icon";

export const ProjectRow = ({ name, description, image, index, isLast }) => {
  const [show, setShow] = useState(null);
  const itemRef = useRef(null);

  const height = useMemo(() => {
    return itemRef?.current?.getBoundingClientRect()?.height;
  }, [itemRef?.current]);
  return (
    <div
      ref={itemRef}
      onMouseMove={(e) => {
        const mid = itemRef?.current.getBoundingClientRect()?.width / 2;
        console.log(mid, e.clientX >= mid, e.clientX);
        if (e.clientX >= mid) setShow("left");
        else setShow(null);
      }}
      onMouseLeave={() => setShow(null)}
      style={{
        display: "flex",
        borderTop: "1px solid #838485",
        padding: "3rem 0",
        textAlign: "left",
        cursor: "pointer",
        ...(isLast ? { borderBottom: "1px solid #838485" } : {}),
      }}
      className={`content${show ? `--${show}` : ""}`}
      // className="content--left"
    >
      <div className="box flex">
        <div>
          <h1 className="font-man-large">{name}</h1>
          <p className="font-man-normal text-light mt-1">{description}</p>
        </div>
      </div>
      <div
        style={{
          width: "14rem",
          height: "14rem",
          borderRadius: "5%",
          overflow: "hidden",
        }}
        className="example"
      >
        <img
          style={{ width: "inherit", aspectRatio: "1/1" }}
          src={image}
          alt={name}
        />
      </div>
      <div className="project-list-icon">
        <Icon name="NorthEast" classes="text-dark svg" />
      </div>
    </div>
  );
};
