'use client'
// inside the app use next/navigation. if it is outside app, may think about using next/router
import { useRouter } from "next/navigation";
import cssStyle from "./typeCard.module.css"
import Image from "next/image"
import { Typography } from "@mui/material";

export default function TypeCard() {
    const router = useRouter()

    const handleNav = (path) => {
        router.push(path)
    }

    return (
        <div className={cssStyle.bodyhtml}>
        <div className={cssStyle.wrapContainer}>
            <ul className={cssStyle.container}>
                <li className={cssStyle.findHome}>
                    <Image src="/image/typeCardsImage/microscopeIcon.png"
                        width={120}
                        height={120}
                        alt="Microscope"
                        className={cssStyle.Image}
                    />
                    <Typography variant="h5" className={cssStyle.header}>
                        Find a home
                    </Typography>
                
                    <Typography variant="subtitle1" className={cssStyle.description}>
                        A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses
                    </Typography>
                    <button onClick={() => handleNav('/findhomes')} className={cssStyle.button}>
                        <Typography variant="body1">
                            Start searching now
                        </Typography>
                    </button>
                </li>
                <li className={cssStyle.sellHome}>
                    <Image src="/image/typeCardsImage/houseIcon.png"
                    width={120}
                    height={120}
                    alt="House Icon"
                    className={cssStyle.Image}
                    />
                    <Typography variant="h5" className={cssStyle.header}>
                        Sell a home
                    </Typography>
                    <Typography variant="subtitle1" className={cssStyle.description}>
                        A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses
                    </Typography>
                    <button onClick={() => handleNav('/sell')} className={cssStyle.button}>
                        <Typography variant="body1">
                            Create a listing
                        </Typography>
                    </button>
                </li>
                <li className={cssStyle.findAgent}>
                    <Image src="/image/typeCardsImage/humanIcon.png"
                    width={120}
                    height={120}
                    alt="House Icon"
                    className={cssStyle.Image}
                    />
                    <Typography variant="h5" className={cssStyle.header}>
                        Find an agent
                    </Typography>
                    <Typography variant="subtitle1" className={cssStyle.description}>
                        Browse our network of agents to find someone that is the perfect match for selling match for selling or buying a home.
                    </Typography>
                    <button onClick={() => handleNav('/agents')} className={cssStyle.button}>
                        <Typography variant="body1">
                            See who's around
                        </Typography>
                    </button>
                </li>
            </ul>
        </div>
        </div>
    )
}