"use client";
import Image from "next/image";
import Container from "@/layout/container";
import ColorBar from "./colorBar";
import { motion } from "framer-motion";

const Hero = () => {
    return ( 
        <Container>
            <div className="w-full h-auto md:h-screen flex flex-col-reverse md:flex-row  justify-center items-center ">
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start">
                <div className="w-full md:w-3/4 h-auto flex flex-row my-2">
                    <ColorBar color="#F03314" width="35%"/>
                    <ColorBar color="#011F4C" width="20%"/>
                    <ColorBar color="#EED2A6" width="45%"/>
                </div>

                <div className="w-full md:w-3/4 h-auto flex flex-row my-2">
                    <ColorBar color="#70A29C" width="20%"/>
                    <ColorBar color="#006789" width="45%"/>
                    <ColorBar color="#F5692D" width="35%"/>
                </div>

                <div className="w-full md:w-3/4 h-auto flex flex-row my-2">
                    <ColorBar color="#BADFF5" width="45%"/>
                    <ColorBar color="#2E68FF" width="35%"/>
                    <ColorBar color="#FF0000" width="20%"/>
                </div>

                <motion.div
                    initial={{ x: 100, opacity: 0, scale: 0.9}}
                    animate={{ x: 0, opacity: 1, scale: 1}}
                    transition={{ duration: 2, delay: 0}}
                >
                    <p className="mt-[50px] text-[#A68FFF] text-[40px] font-semibold">Hello World ,</p>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0, scale: 0.9}}
                    animate={{ x: 0, opacity: 1, scale: 1}}
                    transition={{ duration: 2, delay: 0.5}}
                >
                    <p className="mb-[50px] text-[#BC9A8E] text-[40px] font-semibold"><span className="text-[#A68FFF]">It&apos;s</span> Rusith Tharindu Thushan</p>
                </motion.div>

                <div className="w-full md:w-3/4 h-auto flex flex-row my-2">
                    <ColorBar color="#7695BC" width="20%"/>
                    <ColorBar color="#622835" width="45%"/>
                    <ColorBar color="#866D6B" width="35%"/>
                </div>
                
                <div className="w-full md:w-3/4 h-auto flex flex-row my-2">
                    <ColorBar color="#000E22" width="45%"/>
                    <ColorBar color="#FFE500" width="35%"/>
                    <ColorBar color="#280E2E" width="20%"/>
                </div>

                <div className="w-full md:w-3/4 h-auto flex flex-row my-2">
                    <ColorBar color="#1E1E1E" width="35%"/>
                    <ColorBar color="#F9EE8A" width="20%"/>
                    <ColorBar color="#416B94" width="45%"/>
                </div>

                <div className="mt-[30px] mb-10 md:mb-0 flex flex-row w-full md:w-2/3 lg:w-1/3 justify-between items-center">
                    <a href="https://github.com/RusithTharindu">
                        <Image
                            src="/assets/icons/github.png"
                            alt="Github"
                            width={45}
                            height={50}
                            className="hover:scale-110 transition duration-500 ease-in-out"
                        />
                    </a>
                    <a href="https://www.instagram.com/ruziya66_/">
                        <Image
                            src="/assets/icons/insta.png"
                            alt="facebook"
                            width={40}
                            height={50}
                            className="hover:scale-110 transition duration-500 ease-in-out"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/rusith-tharindu-thushan-9ab16316b/">
                        <Image
                            src="/assets/icons/in.png"
                            alt="facebook"
                            width={40}
                            height={50}
                            className="hover:scale-110 transition duration-500 ease-in-out"
                        />
                    </a>
                    <a href="https://x.com/ruziya66_">
                        <Image
                            src="/assets/icons/x.png"
                            alt="facebook"
                            width={40}
                            height={50}
                            className="hover:scale-110 transition duration-500 ease-in-out"
                        />
                    </a>
                </div>

            </div>
            <div className="w-full md:w-1/2 h-full flex  md:justify-end items-center">
                <motion.div
                    initial={{ x: 100, opacity: 0, scale: 0.9}}
                    animate={{ x: 0, opacity: 1, scale: 1}}
                    transition={{ duration: 1.5, delay: 0.5}}
                >
                    <Image
                        src="/assets/profilepic.jpg"
                        alt="hero"
                        width={450}
                        height={500}
                        className="rounded-xl my-10 md:my-0"
                    />
                </motion.div>
            </div>
            </div>
        </Container>
     );
}
 
export default Hero;