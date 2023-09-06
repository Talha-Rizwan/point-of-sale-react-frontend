import { useNavigate} from 'react-router-dom';

const Item = (props) => {
    let navigate = useNavigate()

    return (
        <div className="container max-w-sm mx-auto hover:bg-slate-100 ">
            <img alt="" className="object-contain mx-auto m-1 w-auto h-44 " src={props.item?.image} />
            <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold h-16 w-auto overflow-hidden ">{props.item?.title}</h3>
                <span className="text-xs ">Price : ${props.item?.price}</span>
            </div>
            <div className="flex justify-end">
                <button
                    className="mx-2 bg-slate-400 hover:bg-slate-700 text-white font-bold p-3 rounded "
                    onClick={()=>{
                        navigate('/update', { state: { itemData: props.item } });
                    }}
                >
                    Update
                </button>
                <button
                    className="mx-2 bg-red-400 hover:bg-red-700 text-white font-bold p-3 rounded"
                    onClick={()=>{
                        navigate('/delete', { state: { itemData: props.item } });
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Item;
