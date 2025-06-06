import {Metadata} from 'next';
import HeaderSection from "@/components/header-section";
import {IoEyeOutline, IoLocateOutline} from "react-icons/io5"
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About',
    description: 'Who we are'
};

const Aboutpage = () => {
  return (
<div>
    <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet."/>
    <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md::grid-cols-2 gap-8">
                  <Image src='/tj.jpg' width={650} height={579} alt='tj'/>
                  <div>
                    <h1 className='text-5xl font-bold text-gray-900 mb-4'>Who we are</h1>
                    <p className='text-gray-700 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Molestias dignissimos, hic pariatur vero doloremque consectetur laboriosam ipsum. 
                        Itaque, consectetur quisquam.</p>
                        <ul className='list-item space-y-6 pt-8'>
                            <li className='flex gap-5'>
                                <div className='flex-none mt-1'>
                                    <IoEyeOutline className='size-7'/>
                                </div>
                                <div className='flex-1'>
                                    <h4 className='text-lg font-semibold mb-1'>Vission :</h4>
                                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non quibusdam obcaecati ipsam quae dolores?</p>
                                </div>
                            </li>
                            <li className='flex gap-5'>
                                <div className='flex-none mt-1'>
                                    <IoLocateOutline className='size-7'/>
                                </div>
                                <div className='flex-1'>
                                    <h4 className='text-lg font-semibold mb-1'>Mission :</h4>
                                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam perferendis doloremque impedit maiores dolorum, placeat quas est.</p>
                                </div>
                            </li>
                        </ul>
                  </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutpage