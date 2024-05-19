import Image from "next/image";
import { carNav } from "@/Utils";

export default function CarScrollPage() {

    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="pl-1 md:pl-7 w-max h-[90%] flex flex-row justify-start items-center gap-7 overflow-x-scroll" id="list">
                {carNav.map((carDetail) => (
                    // <div className="bg-gray-950 w-[80%] h-full flex justify-center items-center">
                    <div className="min-w-[250px] h-[95%] my-3 bg-white flex flex-col justify-center items-center rounded-md" key={carDetail.id}>
                        <Image src={'/hero.png'} alt="Multi-Carousel Image" quality={100} priority={true} width={100} height={90} className="w-[70%] h-[68%] object-contain cursor-pointer" />
                        <div className="w-full h-[32%] bg-gray-800 flex justify-center items-end gap-2 rounded-md rounded-t-xl">
                            <div className="w-[62%] pl-2 text-white h-full flex flex-col justify-center items-start gap-1">
                                <h5 className="cursor-pointer">{carDetail.vehName} {carDetail.year}</h5>
                                <h6 className="cursor-pointer">New Model /
                                    <span className="text-[#daa520]">New</span>
                                </h6>
                            </div>
                            <div className="w-[38%] h-[50%] bg-red-600 rounded-tl-[14px] flex justify-center items-center rounded-br-md">
                                <h6 className="text-white">${carDetail.price}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
