'use client'
import styled, {css} from "styled-components";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { useEffect, useState } from "react";

// export default function ToggleButtons(){
    const MappositionButtonInactive = css`
        background-color: #EFFFFC;
        border: 1px solid #14B49C;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        position: absolute;
        margin-top: 20px;
        margin-left: 24px;
        width: 40px;
        height: 40px;
        padding: 6px;
        color: #14B49C;
        z-index: 2;
    `;

    const MappositionButtonActive = css`
        background-color: #14B49C;
        border: 1px solid #14B49C;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        position: absolute;
        margin-top: 20px;
        margin-left: 24px;
        width: 40px;
        height: 40px;
        padding: 6px;
        color: white;
        z-index: 2;
    `;

    const ListpositionButtonInactive = css`
        background-color: #EFFFFC;
        border: 1px solid #14B49C;
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
        margin-top: 20px;
        margin-left: 64px;
        width: 40px;
        height: 40px;
        padding: 6px;
        position: absolute;
        color: #14B49C;
        z-index: 2;
    `;

    const ListpositionButtonActive = css`
        background-color: #14B49C;
        border: 1px solid #14B49C;
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
        margin-top: 20px;
        margin-left: 64px;
        width: 40px;
        height: 40px;
        padding: 6px;
        position: absolute;
        color: white;
        z-index: 2;
    `;

const ToggleButtons = ({OnMapButtonClick, mapStatus}) =>{
   
    const [isMapActive, setIsMapActive] = useState(mapStatus);
    const [isListActive, setIsListActive] = useState(!isMapActive);
    const [isload, setIsload] = useState(false);
    // console.log("list: "+isListActive)
    const handleClick = () =>{
        setIsMapActive(!isMapActive)
        setIsListActive(!isListActive)
    }
    console.log("list: "+isListActive);
    console.log("map: "+isMapActive);
    const combinedClick = ()=> {
        OnMapButtonClick();
        handleClick();
    }

    const MapButton = styled.button`
        ${isMapActive ? MappositionButtonActive: MappositionButtonInactive}
        @media (min-width: 801px) {
            display: none;
        }
    `;

    const ListButton = styled.button`
        ${isListActive ? ListpositionButtonActive: ListpositionButtonInactive}
        @media (min-width: 801px) {
            display: none;
        }
    `;
    useEffect(() => {
        setTimeout(()=>{
            setIsload(true);
        }, 100);
    },[]);
    
    // console.log(`toggle: ${isMapActive}`)

    return(
        <div>
        {isload ? 
            <div>
            <MapButton onClick={combinedClick}>
                <MapOutlinedIcon/>
            </MapButton>
            <ListButton onClick={combinedClick}>
                <FormatListBulletedRoundedIcon/>
            </ListButton>
            </div>: ""}
        </div>
    )
}

export default ToggleButtons;

