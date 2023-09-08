
const DeleteProductModel = ({itemData, setProducts}) => {
    const modalId = `deletemodel_${itemData.id}`;

    return(
        <div>
            <button className="btn bg-red-500 hover:bg-red-700 text-white mx-2" onClick={()=>document.getElementById(modalId).showModal()}>Delete</button>
            <dialog id={modalId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete Product</h3>
                <p>Are you sure to delete {itemData.title}</p>
                <div className="flex justify-center space-x-4">
                    <form method="dialog">
                        <button className="btn font-bold  rounded">No</button>
                    </form>
                    <button 
                        onClick={() => {
                            setProducts((prev) => {
                                const newProducts = prev.filter(
                                (product) => product.id !== itemData.id
                                );
                                return newProducts;
                            });
                            document.getElementById(modalId).close();
                        }}
                        className = 'bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded '
                    >
                        Yes
                    </button>
                    
                </div>
            </div>
            </dialog>
        </div>
    )
}

export default DeleteProductModel;
