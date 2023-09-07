import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteModel = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const itemData = location.state?.itemData;

  const handleDelete = (e) => {
    axios
      .delete("https://fakestoreapi.com/products/" + itemData.id)
      .then((response) => {
        console.log("Data deleted successfully: ", response.data);

        if (response.status === 200) {
          alert(
            "The product " + itemData.title + " has been successfully deleted!"
          );
        }

        navigate("/");
      })

      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  return (
    <div className="flex justify-center m-4">
      <div className="flex flex-col max-w-md gap-2 p-6 shadow-md">
        <h2 className="text-xl font-semibold">
          Are you sure to Delete {itemData.title}?
        </h2>
        <div className="flex flex-col justify-end gap-3 sm:flex-row">
          <button
            className="px-6 py-2 border border-black hover:bg-slate-300"
            onClick={() => {
              navigate("/");
            }}
          >
            No
          </button>
          <button
            className="px-6 py-2 border border-black bg-red-300 hover:bg-red-500"
            onClick={handleDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
