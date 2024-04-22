import { Link } from "react-router-dom";
import { useProgressiveImg } from "../../hooks/useProgressiveImg";

const WebProjectCard = ({
  lowResImage,
  highResImage,
  title,
  description,
  projectLink,
}) => {
  const [src, { blur }] = useProgressiveImg(lowResImage, highResImage);
  return (
    <div className="card bg-base-100 shadow-xl p-3 m-1 static">
      <figure>
        <img
          src={src}
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={projectLink} target="_blank">
            Please visit <i className="fa-solid fa-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebProjectCard;
