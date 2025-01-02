
import React, { useEffect } from "react"
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
function Card({ referance ,id,onDelete}) {
    const deleteHandler = () => {
        onDelete(id); 
      };

    return (<>
        <motion.div
            drag
            dragConstraints={referance}
         
            className="relative w-[250px] h-[300px] rounded-[50px] flex flex-col gap-4 group p-[0.1rem] overflow-hidden will-change-transform"
        >

            <div className="absolute inset-0 rounded-[50px] bg-[radial-gradient(85%_100%_at_50%_0%,rgb(0,182,255,60%)_0%,rgb(0,26,87,39%)_75%)] transition-opacity duration-500 opacity-100 pointer-events-none"></div>

            <div className="absolute bottom-[0rem] left-[0rem] right-[0rem] h-[60%] rounded-[50px] bg-[radial-gradient(85%_100%_at_50%_100%,rgb(0,182,255,60%)_0%,rgba(56,189,248,0)_75%)] pointer-events-none"></div>

            <div className="relative z-10 w-full h-full bg-zinc-900 rounded-[50px] p-8 flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="bg-zinc-900 h-1/6 w-full border-b  border-zinc-500 p-2 focus:outline-none text-white"
                />

                <textarea
                    placeholder="Notes....."
                    className="bg-zinc-900 flex-grow w-full focus:outline-none p-2 text-white resize-none overflow-auto h-auto min-h-[50px] custom-scrollbar"
                />

                <div onClick={deleteHandler} className="absolute h-auto w-auto bg-zinc-600 rounded-[50px] top-[11%] right-[12%] p-2 border-white cursor-pointer">
                    <IoMdClose className="text-white hover:rotate-90 duration-500 transition" />
                </div>
            </div>

        </motion.div>

    </>
    )
}
export default Card;