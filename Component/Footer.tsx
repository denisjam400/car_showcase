import { footerLinks } from "@/constants";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { AiFillContacts, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-7 px-12 py-4">
            <div className="flex flex-col justify-between items-center gap-9 md:gap-0 md:flex-row">
                <aside className="w-full md:w-[25%] flex flex-col justify-center gap-3">
                    <h1>
                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            width={118}
                            height={18}
                            className="object-contain"
                        />
                    </h1>
                    <p className="mt-3">
                        Lorem, ipsum! Explicabo quae veritatis praesenti eritatis veniam
                        illum numquam blanditiis eum aspernatur consequuntur sit ipsam.
                    </p>

                    <nav className="mt-2 w-full flex justify-start items-center gap-3 list-none">
                        <li className="bg-primary-blue h-8 w-8 rounded-full text-white flex justify-center items-center">
                            <Link href={"/"}>
                                <BsInstagram />
                            </Link>
                        </li>
                        <li className="bg-primary-blue h-8 w-8 rounded-full text-white flex justify-center items-center">
                            <Link href={"/"}>
                                <SiTiktok />
                            </Link>
                        </li>
                        <li className="bg-primary-blue h-8 w-8 rounded-full text-white flex justify-center items-center">
                            <Link href={"/"}>
                                <BsLinkedin />
                            </Link>
                        </li>
                        <li className="bg-primary-blue h-8 w-8 rounded-full text-white flex justify-center items-center">
                            <Link href={"/"}>
                                <BsFacebook />
                            </Link>
                        </li>
                    </nav>
                </aside>

                {footerLinks.map((item) => (
                    <div key={item.title} className="w-full md:w-[16%]">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <div className="flex flex-col gap-5 mt-4">
                            {item.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-gray-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <aside className="w-full md:w-[25%] flex flex-col gap-4">
                    <h4 className="text-lg">Reservation</h4>
                    <address className="flex flex-col gap-3">
                        <p>
                            Abdul Guong Street, Cledeong <br />
                            Desok City, 16145 <br />
                            West Java.
                        </p>
                        <div className="flex flex-col gap-2 items-start text-sm">
                            <p className="flex justify-center items-center gap-2">
                                <AiFillContacts className="text-xl" /> 01-458-985-00
                            </p>
                            <p className="flex justify-center items-center gap-2">
                                <AiOutlineWhatsApp className="text-xl" /> 01-453-978-00
                            </p>
                            <p className="flex justify-center items-center gap-2">
                                <AiFillMail className="text-xl" /> CarHub@mail.com
                            </p>
                        </div>
                    </address>
                </aside>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-6">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={118}
                    height={18}
                    className="object-contain"
                />
                <p className="text-base text-gray-700 text-center">
                    Carhub 2023 <br />
                    All Rights Reserved &copy;
                </p>
            </div>
        </footer>
    );
};

export default Footer;
