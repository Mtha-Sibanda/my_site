import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className={`proj-imgbx ${isHovered ? "proj-imgbx-hover" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imgUrl} alt={"url"} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
