'use client'
import { ShowMoreProps } from "@/Types"
import CustomButton from "./CustomButton"
import { updatedSearchParams } from "@/Utils"
import { useRouter } from "next/navigation"

const ShowMore = ({ isNext, pageNumber }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 11;
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton buttonDisable={false}
                    btnType="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore