'use client'
import { BsApple, BsCreditCard, BsPaypal } from 'react-icons/bs'
import CustomButton from './CustomButton'
import Image from 'next/image'
import { CarProps } from "@/Types";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { AiFillCloseCircle } from 'react-icons/ai';

interface CarDetailProp {
    isChOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarCheckOutPage = ({ isChOpen, closeModal, car }: CarDetailProp) => {
    const handleSubmit = () => {

    }

    return (
        <>
            <Transition appear show={isChOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="relative z-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0">
                        <div className="flex w-screen h-[100vh] item-center justify-center p-2">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="bg-[#050404] text-white w-[93%] md:w-[90%] max-h-full md:h-[90vh] flex flex-col-reverse justify-start items-start md:flex-row md:justify-center md:items-center gap-0 md:gap-8 rounded-md overflow-y-auto">
                                    <button
                                        type="button"
                                        className="hidden md:absolute top-4 right-12 z-30 w-fit p-2 bg-black rounded-full"
                                        onClick={closeModal}
                                    >
                                        <AiFillCloseCircle className='text-4xl text-white' />
                                    </button>
                                    <div className='w-[98%] md:w-[37%] flex flex-col justify-center items-center gap-5 border-2 border-[#f7f7f747] mx-1 md:mx-0 px-4 py-3 rounded-xl'>
                                        <h2 className='w-full flex flex-col justify-center items-start gap-[0.7] text-base font-bold'>Payment Method
                                            <span className='text-sm font-normal text-[#fffdfd8d]'>Add a new payment method to your account.</span>
                                        </h2>

                                        <div className='w-full flex justify-start items-center gap-5'>
                                            <div className='w-[29%] py-2 flex flex-col justify-center items-center gap-1 rounded-md border-[1px] border-white'>
                                                <BsCreditCard className='text-4xl' />
                                                <p className='text-[14px] font-semibold'>Card</p>
                                            </div>
                                            <div className='w-[29%] py-2 flex flex-col justify-center items-center gap-1 rounded-md border-[1px] border-white'>
                                                <BsPaypal className='text-4xl' />
                                                <p className='text-[14px] font-semibold'>Paypal</p>
                                            </div>
                                            <div className='w-[29%] py-2 flex flex-col justify-center items-center gap-1 rounded-md border-[1px] border-white'>
                                                <BsApple className='text-4xl' />
                                                <p className='text-[14px] font-semibold'>Apple</p>
                                            </div>
                                        </div>
                                        <form action="" method="post" className='w-full flex flex-col gap-5'>
                                            <div className='flex flex-col justify-start items-start gap-1'>
                                                <label htmlFor="Name">Name:</label>
                                                <input type="text" name="Name" id="" className='outline-none bg-transparent w-full border-[1px] border-[#fffdfd8d] focus:border-white py-1 px-2 rounded-md' />
                                            </div>

                                            <div className='flex flex-col justify-start items-start gap-1'>
                                                <label htmlFor="Card Number">Card Number:</label>
                                                <input type="number" name="Card_Number" id="" className='outline-none bg-transparent w-full border-[1px] border-[#fffdfd8d] focus:border-white py-1 px-2 rounded-md' />
                                            </div>

                                            <div className='w-full flex justify-start items-center gap-5'>
                                                <div className='w-full flex flex-col justify-center items-start gap-3'>
                                                    <label htmlFor="Expires">Expires:</label>
                                                    <select name="Months" className='bg-transparent border-[1px] border-white rounded-md p-1'>
                                                        <option value="January">January</option>
                                                        <option value="February">February</option>
                                                        <option value="March">March</option>
                                                        <option value="April">April</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <CustomButton
                                                title="Continue"
                                                buttonDisable={false}
                                                containerStyles="w-full py-[16px] rounded-full bg-[#daa520]"
                                                textStyles="text-white text-[14px] leading-[17px] font-bold"
                                                handleClick={() => handleSubmit()}>CheckOut</CustomButton>
                                        </form>
                                    </div>

                                    <div className='w-full md:w-[55%] h-[80vh] md:h-full flex flex-col justify-start items-center gap-5 px-4 py-3'>
                                        <div className='p-2 w-full h-[30vh] md:h-[60%] flex flex-col gap-3 border-2 border-[#f7f7f747] rounded-xl'>
                                            <div className='relative w-full h-[63%] bg-pattern bg-cover bg-center rounded-lg'>
                                                <Image src={"/hero.png"} alt='car model' fill priority className='w-full h-full object-contain' />
                                            </div>

                                            <div className='w-full flex gap-5 justify-center items-center h-[33%]'>
                                                <div className='relative w-[30%] h-full bg-primary-blue-100 rounded-lg'>
                                                    <Image src={'/hero.png'} alt='car model' fill priority className='h-full w-full object-contain' />
                                                </div>
                                                <div className='relative w-[30%] h-full bg-primary-blue-100 rounded-lg'>
                                                    <Image src={'/hero.png'} alt='car model' fill priority className='object-contain' />
                                                </div>
                                                <div className='relative w-[30%] h-full bg-primary-blue-100 rounded-lg'>
                                                    <Image src={'/hero.png'} alt='car model' fill priority className='object-contain' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full h-[50%] md:h-[34%] overflow-y-auto border-y-[1px] border-y-[#fffcfca4]' id='checkOutScrollBar'>
                                            <div className='py-1 md:py-2 flex flex-wrap gap-4 cursor-pointer'>
                                                {Object.entries(car).map(([key, value]) => (
                                                    <div className='flex justify-between gap-5 w-full text-right' key={key} >
                                                        <h4 className='text-grey capitalize'>
                                                            {key.split("_").join(" ")}
                                                        </h4>
                                                        <p className='text-[#fffcfccb] font-semibold capitalize'>
                                                            {value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarCheckOutPage