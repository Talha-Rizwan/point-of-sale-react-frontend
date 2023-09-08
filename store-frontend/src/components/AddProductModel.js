import AddProductForm from './AddProductForm'

const AddProductModel = ({setProducts}) => (

    <div className='flex justify-center m-2'>
        <button className="btn" onClick={()=>document.getElementById('add_model').showModal()}>Add New Product</button>
        <dialog id="add_model" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add Product</h3>
            <AddProductForm setProducts={setProducts} />
        </div>
        </dialog>
    </div>
)
export default AddProductModel;
