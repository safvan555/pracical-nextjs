"use client";
import Image from "next/image";
import Link from "next/link";
import Clutch from "../../../public/clutch.png"
import Dribble from "../../../public/dribble.png"

const ClutchAnimation = () => {
    return (
        <div className="flex justify-between gap-2">
            <Link href='/' className="upsale-clutch">
                <Image src={Clutch} alt="Clutch"/>
            </Link>
            <Link href='/' className="upsale-dribble">
                <Image src={Dribble} alt="Dribble"/>
            </Link>
        </div>  
    );
};

export default ClutchAnimation;


