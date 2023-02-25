import React from 'react'

const HeadCategory = ({title,ageMin,ageMax, ageTitle, setAgeTitle}) => {

    const handleClick = () => {
        if(ageTitle === "junior") setAgeTitle("senior");
        else setAgeTitle("junior");
    }
  return (
    <section className={`relative w-[150px] h-[100px] bg-[#D5F1FE] flex flex-col items-center justify-center text-[24px] rounded-lg cursor-pointer ${title.toLowerCase() === ageTitle.toLowerCase() ? "active-head": ""}`} onClick={handleClick}>
        <h2 className='font-bold'>{title}</h2>
        <span className='text-stone-500 text-[18px]'>(Age {ageMin}-{ageMax})</span>
    </section>
  )
}

export default HeadCategory
