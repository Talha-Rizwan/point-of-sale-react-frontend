import Item from "./Item";

const Products = (props) => {
    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">   
                {props.filteredItems.length !== 0? 
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                    props.filteredItems.map((item)=>{
                        return <Item key={item.id} item={item} />
                    })
                    }  
                </div>
                : <h1 className="text-center">Sorry no items found!</h1>
                }
            </div>
    )
}

export default Products;
