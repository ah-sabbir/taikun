'use client'
import Image from "next/image";
import Link from "next/link";

import {motion} from "framer-motion";

const navItems = [
"What is Taikun?",
"Platform",
"Solutions",
"Resources",
"Partners",
"Pricing",
]

const NavigationBar = () =>{
    return (
        <motion.div className="w-full h-auto mt-8 flex items-center justify-center z-50 fixed font-poppins">
            <motion.div className=" w-[70%] h-full bg-[#262229] rounded-2xl flex flex-row justify-between items-center p-4 shadow-xl">
                <motion.div className="w-1/12">
                    <Image src="./logo.svg" alt="..." width={500} height={500} />
                </motion.div>
                <motion.div className="w-8/12">
                    <motion.ul className="flex justify-center items-center text-white font-normal">
                        {
                            navItems.map((item, i)=> (<motion.li key={i}><motion.a href="#" className=" text-md p-2" >{item}</motion.a></motion.li>))
                        }
                    </motion.ul>
                </motion.div>
                <motion.div className="w-3/12 flex flex-row-reverse">
                    <motion.button className="bg-[#F7DE58] p-2 m-2 rounded-md text-black shadow-xl">Request Demo</motion.button>
                    <motion.button className="bg-[#7D58F7] p-2 m-2 rounded-md text-white shadow-xl">Sign Up</motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}


export default NavigationBar;