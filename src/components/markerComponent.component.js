import { Marker, Popup } from 'react-leaflet'
import React, { useState } from 'react'
import bapsLogo from '../assets/baps-logo.png'
import L from 'leaflet'
import styled from "styled-components";

const MandirName = styled.div`
  font-weight: bold;
  font-size: 30px;
`
const MandirImage = styled.img`
  width: 300px;
  height: 200px;

`
const StyledText = styled.div`
  font-size: 20px;
  padding: 10px;
  width: fit-content;
  height: fit-content;
`
function MarkerComponent (props) {
  return (
        <Marker
            onClick={props.onClick}
            icon={L.icon({
              iconUrl: bapsLogo,
              iconSize: [40, 55],
              iconAnchor: [10, 36]
            })}
            position={props.position}
        >
            {props.name !== 'NONE' &&
            <Popup><MandirName>{props.name}</MandirName>{props.image !== 'NONE' &&
            <MandirImage src={props.image}/>}
                <StyledText>{props.address}</StyledText>
            </Popup>}
        </Marker>
      )
}
export default MarkerComponent
