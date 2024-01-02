import Image from "next/image";
import Link from "next/link";

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
        <div className="w-full h-auto mt-8 flex items-center justify-center z-50 fixed">
            <div className=" w-[70%] h-full bg-[#262229] rounded-2xl flex flex-row justify-between items-center p-4">
                <div className="w-1/12">
                    <Image src="./logo.svg" alt="..." width={500} height={500} />
                </div>
                <div className="w-7/12">
                    <ul className="flex justify-center items-center text-white font-normal">
                        {
                            navItems.map((item, i)=> (<li key={i}><Link href="#" className="text-[18px] p-2" >{item}</Link></li>))
                        }
                    </ul>
                </div>
                <div className="w-3/12 flex flex-row-reverse">
                    <button className="bg-[#F7DE58] p-2 m-2 rounded-md text-black">Request Demo</button>
                    <button className="bg-[#7D58F7] p-2 m-2 rounded-md text-white">Sign Up</button>
                </div>
            </div>
        </div>
    )
}


export default NavigationBar;