import UpdateProductForm from "./UpdateProductForm"

const UpdateProductModel = ({itemData, setProducts}) => {
    const modalId = `update_model_${itemData.id}`;
    return(
        <div>
            <button className="btn" onClick={()=>document.getElementById(modalId).showModal()}>Update</button>
            <dialog id={modalId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Product</h3>
                <UpdateProductForm itemData={itemData} setProducts={setProducts} /> 
                
            </div>
            </dialog>
        </div>
    )
}

export default UpdateProductModel
