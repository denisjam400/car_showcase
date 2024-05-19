"use client"
import CarScrollPage from "@/Component/CarScrollPage";
import { carNav } from "@/Utils";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const RecentCar = () => {
    let listItemDom = document.querySelector("#list")

    function showSlider(Type: string) {
        if (Type === 'next')
        {
            listItemDom?.scrollBy(400, 0)
        } else
        {
            listItemDom?.scrollTo({
                left: 100,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="h-[63vh] w-full flex justify-center items-center mb-11">

            <div className="w-[86%] h-full bg-black flex flex-col justify-start items-center rounded-xl">

                <nav className="pl-4 md:pl-7 text-white h-[12%] uppercase w-full flex justify-between items-center rounded-tr-xl">
                    <h4 className="w-[25%] md:w-[20%] text-sm md:text-xl font-semibold">Recent</h4>
                    <div className="h-full flex justify-between items-center w-[73%] md:w-[72%] pl-5 pr-3 md:px-14 rounded-bl-[79.5px] bg-gray-800 rounded-tr-xl">
                        <h5 className="w-[50%] md:w-[82%] flex justify-start items-center text-sm md:text-xl font-extrabold">Cars</h5>
                        <div className="w-[47%] md:w-[15%] h-full flex justify-center items-center gap-2 md:gap-3">
                            <button className="w-[47%] h-[70%] md:px-3 md:py-2  flex justify-center items-center bg-gray-600 rounded-md" onClick={() => showSlider('prev')}>
                                <BsChevronLeft />
                            </button>
                            <button className="w-[47%] h-[70%] md:px-3 md:py-2 flex justify-center items-center bg-gray-600 rounded-md" onClick={() => showSlider('next')}>
                                <BsChevronRight />
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="w-[95%] md:w-full h-[84%]">
                    <CarScrollPage />
                </div>
            </div>
        </div>
    )
}

export default RecentCar