import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
interface PropsInterface {
    title: String;
};
export default function Cards({ name }: any) {
    const [clicked, setClicked] = useState(false)
    return (
        <div>
            <h2 className=" block rounded-lg  bg-white ring-1 
             ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <NavLink to='/Todo'>
                    <div className=" items-center space-x-3 px-20 py-20 ">
                        <h1 className="text-slate-900 group-hover:text-white text-xl
                     mb-2 font-semibold" >
                            {name.Type}
                        </h1>
                    </div>
                </NavLink>
            </h2>
        </div>
    );
};
