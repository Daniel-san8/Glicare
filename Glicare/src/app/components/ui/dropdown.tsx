"use client";

import IconArrowDown from "@/public/svg/arrow-down";
import { useEffect, useState } from "react";

interface IDropDown {
    title: string;
    description: string;
}


export default function DropDown({ title, description }: IDropDown) {
    const queryTablet = '(min-width: 768px)';
    const queryMobile = '(min-width: 150px)';

    const [stateTitle, setStateDescription] = useState<string>(title);
    const [openDescription, setOpenDescription] = useState<boolean>(false);

    useEffect(() => {
        function verificationWidth() {
            if ((matchMedia(queryMobile).matches && !matchMedia(queryTablet).matches) && description.length >= 23) {
                setStateDescription(title.substring(0, 20) + "...");
                console.log(stateTitle)
            } else {
                setStateDescription(title);
            }
        }

        verificationWidth();
        window.addEventListener('resize', verificationWidth);

        return () => {
            window.removeEventListener('resize', verificationWidth);
        };
    }, [description, stateTitle, title]);

    return (
        <div className="cursor-pointer bg-primary-gray rounded-md py-5 px-6" onClick={() => setOpenDescription(!openDescription)}>
            <div className="flex items-center gap-x-5"><h1>{stateTitle}</h1> <span><IconArrowDown /></span> </div>
            {openDescription ? <p className="text-sm pt-4">{description}</p> : null}
        </div>
    );
}
