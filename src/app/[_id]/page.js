import SingleData from "@/components/ui/SingleData";
import Image from "next/image";

const page = async({params}) => {
    const {_id} = params;

    const post = await SingleData(_id)
    
    return (
        <div className="flex pt-10 items-center justify-center">
                        <div className=" flex gap-10  bg-[#0d0c22] shadow-xl">
                            <div>
                       <figure className="h-[500px] "><Image
                       height={250}
                       width={300}
                       className="hover:scale-110" 
                       src={post.photo} alt="Shoes" /></figure>

                       </div>
                       <div className="pt-10">
                        <h2 className="card-title">Name: {post.name}</h2>  
                        <h1> Description :  This fruits is from african jungle</h1>  
                     <div className="card-actions ">
                     <button className="btn hover:bg-orange-400">add to cart</button>
                    </div>
                    </div>
                     </div>
        </div>
    );
};

export default page;