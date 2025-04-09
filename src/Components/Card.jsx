import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import CardBg from '../Images/CardBg'
import Button from './Button'
import { MdLocalOffer } from "react-icons/md";
import SpecialCardBg from '../Images/SpecialCardBg';




const features = [
    { text: 'Gift Cards', available: true },
    { text: 'In-app redeemable vouchers', available: true },
    { text: 'Donations', available: true },
    { text: 'Ranking mention on leadership board', available: true },
    { text: 'Scholarship for school tuition fees', available: false },
    { text: 'Certificates', available: false },
    { text: 'Recognition on our social media platform', available: false },
]

const Card = ({firstText,price,duration,alt,highlight=false}) => {
    const customFeatures = highlight
        ? features.map(f => ({ ...f, available: true })) // all green ticks
        : features;

        console.log(customFeatures)

    return (
        <div className="relative w-[380px] rounded-2xl shadow-lg overflow-hidden bg-white">
            {alt && (
                <div className="absolute top-1 left-3 bg-[#EC5849] text-black text-xs font-semibold px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-md text-white">
                    <MdLocalOffer className="text-sm" />
                    {alt}
                </div>
            )}
            <div className="relative w-[380] h-[110px] rounded-md overflow-hidden">
                
                {
                    highlight ?
                    <SpecialCardBg/> :
                    <CardBg/>
                }
              

         
                <div className="absolute top-0 left-0 w-full h-full text-white px-4 capitalize">
                    <h1 className="text-xl font-bold mt-7">{firstText}</h1>
                    <div className={`text-4xl font-semibold ${highlight ? 'text-[#A3D95D]' : 'text-[#03351E]'}`}>
                        ₹{price}/
                        <sub className="ml-1 text-sm">{duration}</sub>
                    </div>
                </div>
            </div>

            <ul className="px-6 py-4 space-y-3">
                {customFeatures.map((item, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${item.available ? 'text-gray-800' : 'text-gray-400'}`}>
                        {item.available ? (
                            <CheckCircle className="w-5 h-5 mt-0.5 text-[#7AA93D]" />
                        ) : (
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                        )}
                        <span className='text-nowrap'>{item.text}</span>
                    </li>
                ))}
            </ul>

       
            <div className="px-6 pb-6 ">
                <Button title={`pay ₹${price}`} />
            </div>
        </div>
    )
}

export default Card
