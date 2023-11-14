"use client"

import { showmoreProps } from "@/type"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton";
import { updateSarchParams } from "@/utils";

const ShowMore = ({pageNumber, isNext} : showmoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newpathname = updateSarchParams("limit", `${newLimit}`)
    router.push(newpathname)
  }
  return (
    <div className="w-full mx-auto gap-5 mt-10">
      {!isNext && (
        <CustomButton
           title="Show more"
           btnType="button" 
           containerStyles="bg-primary-blue rounded-full text-white"
           handleClick={handleNavigation}/>

      )}
      
    </div>
  )
}

export default ShowMore
