const Mobile = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card bg-base-100 shadow-xl p-3 m-1 static">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Comming Soon...</h2>
          <p>Thank you for waiting, I will upload very soon...</p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-primary"
              onClick={() => alert("Comming Soon")}
              target="_blank"
            >
              Please visit <i className="fa-solid fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
