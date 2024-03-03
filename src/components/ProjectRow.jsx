import { useMemo, useRef, useState } from "react";
import Icon from "./Icon";
const ProjectRow = ({ name, description, image, index, isLast, link }) => {
  const [show, setShow] = useState(null);
  const itemRef = useRef(null);

  const height = useMemo(() => {
    return itemRef?.current?.getBoundingClientRect()?.height;
  }, [itemRef?.current]);
  return (
    <div
      ref={itemRef}
      onMouseMove={(e) => {
        const mid = itemRef?.current.getBoundingClientRect()?.width / 1.1;
        console.log(mid, e.clientX >= mid, e.clientX);
        if (e.clientX >= mid) setShow("left");
        else setShow(null);
      }}
      onMouseLeave={() => setShow(null)}
      style={{
        display: "flex",
        borderTop: "1px solid #838485",
        padding: "3.75rem 0",
        textAlign: "left",
        cursor: "pointer",
        ...(isLast ? { borderBottom: "1px solid #838485" } : {}),
      }}
      className={`content${show ? `--${show}` : ""}`}
      // className="content--left"
    >
      <a href={link} target="_blank">
        <div className="box flex">
          <div className="description">
            <h1 className="font-man-large">{name}</h1>
            <p className="font-man-normal text-light mt-1">{description}</p>
          </div>
        </div>
      </a>
      <div
        style={{
          width: "18rem",
          height: "15rem",
          borderRadius: "5%",
          overflow: "hidden",
          backgroundSize: "cover",
        }}
        className="example"
      >
        <a href={link} target="_blank">
          <img
            style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
            src={image}
            alt={name}
          />
        </a>
      </div>
      <div className="project-list-icon">
        <Icon name="NorthEast" classes="text-dark svg" />
      </div>
    </div>
  );
};

export default ProjectRow;
