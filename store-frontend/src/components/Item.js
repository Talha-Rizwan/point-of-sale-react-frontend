const Item = (props) => {
    return (
        <div className="max-w-sm mx-auto group hover:bg-slate-100 ">
            <img alt="" className="object-contain m-1 w-full h-44 " src={props.item?.image} />
            <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold ">{props.item?.title}</h3>
                <span className="text-xs ">Price : ${props.item?.price}</span>
            </div>
        </div>
    )
}

export default Item;
