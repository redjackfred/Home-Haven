import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import Offer from '../offer/Offer';
import { HomeType } from '@/app/utils/data';


type PopupProps = {
  togglePopup: () => void;
  homeInfo: HomeType;
  onSubmit?: () => void;
}


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupCard = styled.div`
  background: white;
  padding: 0px;
  border-radius: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;



export const Popup = ({togglePopup, homeInfo, onSubmit} :PopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            togglePopup();
          }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [togglePopup]);

    return(
        <Overlay>
        <PopupCard ref={popupRef}>
            <Offer home={homeInfo} onSubmit={onSubmit}></Offer>
        </PopupCard>
      </Overlay>
    )
}