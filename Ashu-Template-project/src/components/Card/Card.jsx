const Card = (props) => {
  return (
    <div className="bg-white w-2xl h-52 p-3 shadow m-1 flex justify-between flex-col">
      <div className="h-[50px] w-[50px] rounded-full shadow bg-slate-400 flex justify-center items-center">
        <i className="fa-solid fa-cart-shopping text-xl text-white"></i>
      </div>

      <div className="flex justify-between items-center">
        <p>
          <span className="text-2xl text-black font-bold">$45,2K</span>
          <p className="text-slate-500 text-sm">Total Profit</p>
        </p>
        <span className="text-green-500">
          4.35% <i class="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  );
};

export default Card;
