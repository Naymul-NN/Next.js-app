/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import Datas from "./Datas";
const DisplayTree = async() => {
 const display = await Datas();
  

console.log(display)
    return (
        <div  className="w-11/12 mx-auto">
            <p className="my-5 text-center font-bold border-b-2 text-2xl border-b-red-400 w-60 pb-2 mx-auto">Trending products</p>
            <div className=" grid grid-cols-3 gap-6">
                {
                display?.map(item=> (
                        <div key={item._id}> 
                          <div className="card card-compact  bg-[#0d0c22] shadow-xl">
                       <figure className="h-52"><Image
                       height={250}
                       width={300}
                       className="hover:scale-110" 
                       src={item.photo} alt="Shoes" /></figure>
                       <div className="card-body">
                         <h2 className="card-title">Name: {item.name}</h2>    
                     <div className="card-actions ">
                     <button className="btn hover:bg-orange-400">add to cart</button>
                    </div>
                    </div>
                    <Link href={`/${item._id}`} className="pl-5 underline">see more</Link>
                     </div>
                     
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayTree;