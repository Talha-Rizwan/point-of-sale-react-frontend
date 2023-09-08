import AddProductForm from './AddProductForm'

const Model = ({setProducts}) => (

    <div className='flex justify-center m-2'>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add New Product</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add Product</h3>
            {/* <button onClick={()=>{
                setProducts((prev)=> [...prev,{
                    title: "talha",
                    price: "123",
                    description: "test product",
                    image: null,
                  }])
            }}>Add Product</button> */}
            <AddProductForm setProducts={setProducts} />
            <div className="modal-action">

            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
)
export default Model;
