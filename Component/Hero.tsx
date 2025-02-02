"use client"
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => { };

    return (
        <div className="hero">
            <div className="flex-1 pt-32 padding-x">
                <h1 className="hero__title capitalize">
                    Premium car rental in New York
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>

                <CustomButton
                    buttonDisable={true}
                    linkNav={"#explore_cars"}
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                />

            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    );
};

export default Hero;
