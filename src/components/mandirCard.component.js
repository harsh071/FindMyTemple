import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";

const MandirName = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
`
const MandirImage = styled.img`
  width: 100%;
  height: 200px;

`
const CardItem = styled.div`
  height:fit-content;
  box-shadow: inset 0px 0px 10px 2px #FF8C00;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  @media (max-width: 1000px) {
    height: fit-content;

  }
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid white;
  color: white;
  background: #e74c3c;

  &:hover {
    background: #FF8C00;
  }
`
function MandirCard(props) {
    const handleClick = () => {
        props.onClick(props)
    }
    return (
            <CardItem id={props.name} >
                <MandirName>{props.name}</MandirName>
                <MandirImage src={props.image}></MandirImage>
                <Button onClick={handleClick}>View on Map</Button>
            </CardItem>
        )
}

function mapStateToProps(state) {
    return {
        mandirs: state.mandir.mandirs,
        moreMandirs: state.mandir.moreMandirs
    }
}

export default connect(mapStateToProps)(MandirCard)
