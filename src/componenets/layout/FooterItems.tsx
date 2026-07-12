type Items ={
    id:number;
    title:string;
    desc:string;
    icon:string;

};




function FooterItems( {items }:{items :Items}){
    return(
        <div className="flex items-end">
            <img src="" alt="" />
            <div>
                <h1 className=" text-yellow-500 text-right ">{items.title}</h1>
                <p className="text-white">{items.desc}</p>
            </div>
        </div>
    )
}
export default FooterItems;