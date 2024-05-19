"use client"
import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { NavLink } from "@/constants";
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [navCLick, setNavClick] = useState(false);

    const handleNav = () => {
        setNavClick(!navCLick);
    }

    useEffect(() => {
        if (innerWidth <= 768)
        {
            setNavClick(false);
            console.log('Yp');
        }
        else
        {
            setNavClick(true);
            console.log('Rep');
        }
    }, [window.innerWidth]);

    return (
        <header className="w-full absolute z-10">
            <nav className="px-6 md:px-14 w-full h-[60px] flex justify-between items-center bg-transparent">
                <Link href={"/"} className="w-[25%] md:w-[10%] flex justify-center items-center">
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                {
                    navCLick &&
                    <div className="py-3 absolute top-[65px] z-10 bg-[#335ffef4] md:bg-transparent md:static max-h-max w-[80%] md:w-[60%] rounded-md flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0">
                        <nav className="px-6 w-full md:w-[70%] flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center list-none gap-3 md:gap-0">
                            {NavLink.map((navItem, index) => (
                                <li key={index} className="no-underline capitalize font-bold text-white md:text-black">
                                    <a href={navItem.linkName.toLowerCase()}>{navItem.linkName}</a>
                                </li>
                            ))}
                        </nav>

                        <CustomButton
                            handleClick={handleNav}
                            buttonDisable={false}
                            title="Explore Car"
                            textStyles="font-semibold"
                            linkNav={"#discover"}
                            btnType="button"
                            containerStyles="text-primary-blue rounded-full bg-white"
                        />
                    </div>
                }



                <div className='w-[5%] block md:hidden' onClick={handleNav}>
                    <AiOutlineMenu className='text-[#335ffef4e1]' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
