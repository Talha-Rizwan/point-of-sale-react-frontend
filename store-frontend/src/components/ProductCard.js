import UpdateProductModel from "./modals/UpdateProductModel";
import DeleteProductModel from "./modals/DeleteProductModel";

const ProductCard = ({item, setProducts}) => {

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
        <UpdateProductModel itemData={item} setProducts={setProducts} className="mx-2 bg-slate-400 hover:bg-blue-700 text-white font-bold p-3 " />
        <DeleteProductModel itemData={item} setProducts={setProducts} className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold p-3 "/>
      </div>
    </div>
  );
};

export default ProductCard;
