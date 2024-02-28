import React from "react";

export default function page() {
    return (
        <div className="h-screen bg-violet-200">
            <div className="h-1/2 bg-white relative">hi</div>
            <div className="hidden md:flex absolute bg-gradient-to-tr to-slate-400 from-orange-400  w-[400px] h-[400px] z-10 flex justify-center top-1/1 left-1/3 rounded-lg -translate-x-1/2 -translate-y-1/2 hover:scale-105 ease-in delay-200">
                hi
            </div>
            <div className="hidden md:flex bg-gradient-to-t from-amber-300 to-lime-300 absolute bg-red-400 w-[400px] h-[400px] z-10 flex justify-center top-1/1 left-2/3 rounded-lg -translate-x-1/2 -translate-y-1/2">
                hi
            </div>
            <div className="md:hidden w-[400px] h-[400px] bg-red-600 absolute z-20 -translate-y-60 mx-auto">
                    hi
            </div>
            <div className="h-1/2 bg-black relative">hi</div>
            <button class="animate-wiggle-more animate-twice animate-ease-linear bg-red-500">Hey, look at me!</button>
        </div>
    );
}
