import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className="container max-w-sm mx-auto hover:bg-slate-100 ">
      <img
        alt=""
        className="object-contain mx-auto m-1 w-auto h-44 "
        src={item?.image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold h-16 w-auto overflow-hidden ">
          {item?.title}
        </h3>
        <span className="text-xs ">Price : ${item?.price}</span>
      </div>
      <div className="flex justify-end m-2">
        <button
          className="mx-2 bg-slate-400 hover:bg-blue-700 text-white font-bold p-3 "
          onClick={() => {
            navigate("/update", { state: { itemData: item } });
          }}
        >
          Update
        </button>
        <button
          className="mx-2 bg-red-400 hover:bg-red-700 text-white font-bold p-3"
          onClick={() => {
            navigate("/delete", { state: { itemData: item } });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
