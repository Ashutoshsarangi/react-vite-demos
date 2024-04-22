const Card = ({ icon, title, subtitle, recentlyAdded }) => {
  return (
    <div className="bg-white w-2xl h-52 p-3 shadow m-1 flex justify-between flex-col">
      <div className="h-[50px] w-[50px] rounded-full shadow bg-slate-400 flex justify-center items-center">
        <i className={`fa-solid fa-${icon} text-xl text-white`}></i>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <span className="text-2xl text-black font-bold">{title}</span>
          <p className="text-slate-500 text-sm">{subtitle}</p>
        </div>
        <span className="text-green-500">
          {recentlyAdded} <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  );
};

export default Card;
