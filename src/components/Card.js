import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { WiMoonAltFirstQuarter } from 'react-icons/wi';
import { RiStarFill } from 'react-icons/ri';
import { GiMoebiusTriangle } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';


const colors = {
    "communication": "#edfcff",
    "visual":"#dcccff",
    "music":"#ffedc8",
}

const Card = ({
    category_name,
    certificate_count,
    curriculum_outcomes,
    discounted_price,
    display_name,
    games_count,
    original_price,
    pitch,
    rating
}) => {
   let discount = (discounted_price/original_price)*100; 
    let colorsCat = category_name.split(' ')[0].toLowerCase();
  return (
    <div className='w-[330px] rounded bg-[#F8F8F8] shadow-2xl overflow-hidden flex flex-col gap-4 transition-all card'>
        <div className={`h-[180px] flex flex-col-reverse bg-[#D5F1FE] p-4 relative card-head ${colorsCat}`}>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-[20px] text-[#006292] card-text'>{display_name}</h3>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-2 icons-container text-white'>
                <RiStarFill className={`w-[16px] h-[16px] text-[${rating.split(';')[0] >= 1 ? '#F9B215': '#ffffff'}] scale-[1.3]`} />
                <RiStarFill className={`w-[16px] h-[16px] text-[${rating.split(';')[0] >= 2 ? '#F9B215': '#ffffff'}] scale-[1.3]`} />
                <RiStarFill className={`w-[16px] h-[16px] text-[${rating.split(';')[0] >= 3 ? '#F9B215': '#ffffff'}] scale-[1.3]`} />
                <RiStarFill className={`w-[16px] h-[16px] text-[${rating.split(';')[0] >= 4 ? '#F9B215': '#ffffff'}] scale-[1.3]`} />
                <RiStarFill className={`w-[16px] h-[16px] text-[${rating.split(';')[0] >= 5 ? '#F9B215': '#ffffff'}] scale-[1.3]`} />
              </div>
              <span className='text-[14px] text-[333333] font-light card-text'>({rating.split(';')[2]} reviews)</span>
              </div>
          </div>
        <div className='bg-[#38beff] absolute top-8 left-0 w-2/3 h-[30px] py-1 card-flyer'>
            <span className='text-[14px] text-white pl-8 font-bold'>18 Sessions</span>
      </div>
     <div className={`absolute top-8 left-[58%] w-0 h-0 
    border-t-[15px] border-t-transparent
    border-r-[30px] b-${colorsCat}
    border-b-[15px] border-b-transparent card-triangle
     `} style={{borderRightColor:colors[colorsCat]}}></div>
          <div className='absolute w-[150px] h-[150px] rounded-full bg-[#38beff] top-[-50%] right-[-20%] grid place-items-center card-flyer'>
        <div className='flex flex-col items-center translate-y-12 translate-x-[-40%]'>
            <span className='text-[#333333] text-[16px] font-bold break-all'>{discount.toFixed()}%</span>
            <span className='text-[#333333] text-[16px] font-bold break-all'>off</span>
      </div>
      </div>
        </div>
        <div className='flex flex-col gap-4 px-4'>
          <p className='text-[14px]'>{pitch}</p>
          <h4 className='font-semibold text-[16px]'>Students will achieve</h4>
          <ul className='list-disc text-[14px] pl-6 text-[#666666] flex flex-col gap-1 leading-[20px]'>
            {
                curriculum_outcomes.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
          </ul>
          <button className='text-[14px] font-[500] underline capitalize decoration-gray-400 mx-0 w-fit'>View Detailed Lesson Plan</button>
        </div>
        <div className='px-3'>
          <div className='flex items-center justify-between'>
            <h3 className='flex items-center text-[24px] text-bold'>
                  <FaRupeeSign />
                  <span>{original_price - discounted_price}</span>
            </h3>
            {/* per class price  */}
            <div className='flex items-center'>
              <h4 className='flex items-center gap-1'>
                <FaRupeeSign className='w-[8px]' />
                <span className='text-[18px] text-bold'>200</span>
                <span className='text-[#666666]'>per class</span>
              </h4>
            </div>
          </div>
          {/* Last Price  */}
          <div className='ml-1'>
            <h3 className='flex items-center gap-1 w-fit text-[#999999] relative  before:content-[""] before:absolute before:w-full before:h-[1px] before:bg-[#999999] before:top-[50%] before:left-0'>
              <FaRupeeSign className='w-[6px]' />
              <span>{original_price}</span>
            </h3>
          </div>
          <p className='text-[#F47759] text-[13px] font-[500] mt-4 text-center'>We'll schedule the slots as per your convenience</p>
        </div>
        <div className='flex items-center justify-between text-[14px] bg-[#d5f1fe] px-3 py-4'>
          <div className='flex items-center justify-center gap-1'>
            <WiMoonAltFirstQuarter className='scale-[1.3] text-[#F9B215]' />
            <span>8 Activities</span>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <GiMoebiusTriangle className='scale-[1.3] text-[#F9B215]' />
            <span>{games_count} Games</span>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <TbCertificate className='scale-[1.3] text-[#F9B215]' />
            <span>{certificate_count} Certificate</span>
          </div>
        </div>
        <div className='grid place-items-center p-4 pb-8'>
          <button className='buy-btn text-white text-[16px] py-2 px-8 rounded-[25px] w-fit'>Buy Course</button>
        </div>
    </div>
  )
}

export default Card
