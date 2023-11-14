"use client"


import Image from "next/image"
import SearchManufacturer from "./SearchManufacturer"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
// import { ModelTraining } from "@mui/icons-material"


const SearchBar = () => {
  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );
  

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(manufacturer === '' && model == '') {
      alert("please enter the values")
    }

    updateParams(model, manufacturer)
  }

  const updateParams = (model:string, manufacturer:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model) {
      searchParams.set('model', model)
    }
    else {
      searchParams.delete('model')
    }

    if(manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    }
    else {
      searchParams.delete('manufacturer')
    }

    const newpathname = `${window.location.pathname}?${searchParams.toString()} `
    router.push(newpathname)
  }

  return (
    <form className='searchbar' onSubmit={handleClick}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            <SearchButton otherClasses='sm:hidden'/>
        </div>

        <div className="searchbar__item">
          <Image src="/model-icon.png" alt="logo" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4"/>
          <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input "/>
          <SearchButton otherClasses='sm:hidden'/>

        </div>
        <SearchButton otherClasses='max-sm:hidden'/>

        
    </form>
  )
}

export default SearchBar
