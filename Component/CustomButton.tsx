"use client";

import { CustomButtonProp } from "@/Types";
import Image from "next/image";

const CustomButton = ({
    buttonDisable,
    btnType,
    textStyles,
    rightIcon,
    title,
    containerStyles,
    handleClick,
    linkNav,
}: CustomButtonProp) => {
    return (
        <button
            disabled={buttonDisable}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            {linkNav ? (
                <a href={linkNav} className={`flex-1 ${textStyles}`}>
                    {title}
                </a>
            ) : (
                <span className={`flex-1 ${textStyles}`}>{title}</span>
            )}

            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};

export default CustomButton;
