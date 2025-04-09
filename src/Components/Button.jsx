import React from 'react';


const Button = ({ Icon, title }) => {
    return (
        <div>
            <div
                className={`${!Icon ? 'w-full' : 'w-sm'} flex items-center justify-center gap-2 py-3 bg-[#A3D95D] rounded-2xl text-[#084A26] text-base font-semibold capitalize`}
            >
                {Icon && <Icon className="h-4 w-4 text-[#084A26]" />}
                <span className="capitalize text-base font-semibold text-[#084A26]">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default Button;
