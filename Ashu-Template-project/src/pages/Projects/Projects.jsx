import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl static">
      <div className="card-body">
        <h2 className="card-title">Projects</h2>
        <p>
          I possess the capability to deliver both mobile applications and
          web-based applications.
        </p>
        <p>
          Utilizing the latest technologies, I ensure that you can rest assured
          about the quality and innovation of the solutions provided.
        </p>
        <div className="flex justify-between items-center mt-8">
          <Link
            to="/projects/web"
            className="flex items-center border p-2 m-2 bg-blue-500 text-slate-200"
          >
            <i className="fa-solid fa-arrow-left mr-3"></i>
            Web Applications
          </Link>
          <Link
            to="/projects/mobile"
            className="flex items-center border p-2 m-2 bg-orange-500 text-slate-200"
          >
            Mobile Applications
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
