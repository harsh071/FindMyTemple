import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import styled from 'styled-components'
import {MapContainer, TileLayer} from 'react-leaflet'
import {Autocomplete} from "@material-ui/lab";
import {makeStyles, TextField} from "@material-ui/core";
import heading from '../assets/heading.png'
import LocationMarker from "./LocationMarker.component";
import MandirCard from "./mandirCard.component";

const Button = styled.button`
  width: 300px;
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
const StyledDiv = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
const StyledText = styled.div`
  font-size: 20px;
  padding: 5px;
  width: fit-content;
  height: fit-content;
  font-weight: bold;

`
const StyledTextHeader = styled(StyledText)`
  padding: 0px;
  color: gray;
  font-weight: 400;
`
const StyledHeader = styled.div`
  font-size: 35px;
  margin: 10px;
  margin-bottom: 0px;
  width: 350px;
  height: 130px;
  background-image: url(${heading});
  /* Center and scale the imagboe nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`
const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: auto;
`
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    button: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))
const StyledGrid = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 30% 70%;
  z-index: 0;
`
const Left = styled.div`
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: inset -2px 0px 4px 1px #e74c3c;
  grid-row: 1;
`
const Right = styled.div`
  background: white;
  overflow: hidden;
  box-shadow: inset -2px 0px 4px 1px #e74c3c;
  grid-column: 2;
`

function MandirMap(props) {
    const classes = useStyles()
    const [location, setLocation] = useState([31.59982126913963, -84.05483615657567]);
    const [mandirInformation, setMandirInformation] = useState([]);
    const [current, setCurrent] = useState(0);
    const [search, setSearch] = useState(props.moreMandirs[current]);

    useEffect(() => {
        setMandirInformation(props.moreMandirs)
    }, [])
    const handleNext = () => {
        setCurrent((current + 1) % mandirInformation.length)
        setSearch(props.moreMandirs[current])
    }
    const handlePrev = () => {
        setCurrent((current - 1) % mandirInformation.length)
        setSearch(props.moreMandirs[current])
    }
    const onClick = (item) => {
        setSearch(item)

    }
    useEffect(() => {
        const scrollTo = document.getElementById(search.name)
        if (scrollTo) {
            scrollTo.scrollIntoView({block: 'nearest', behavior: 'smooth'})
        }
    }, [search])

    return (
        <StyledDiv>
            <div style={{display: "flex", justifyContent: "center", width: '100%', height: '100%'}}>
                <StyledHeader></StyledHeader></div>
            <Flex style={{flexDirection: 'column', marginTop: '0px', overflow: 'hidden'}}>
                <StyledTextHeader>MANDIRS</StyledTextHeader>
                <StyledText>Click on the marker to view Mandir image</StyledText>
                <StyledText>Scroll on map to zoom in and out</StyledText>
                <Autocomplete
                    id="Mandir Search"
                    className={classes.root}
                    value={search}
                    options={mandirInformation}
                    getOptionLabel={(option) => option.name}
                    onClose={(event, reason) => {
                        if (reason === 'blur' || reason === 'escape') {
                            setSearch(props.moreMandirs[0])
                        }
                    }}
                    onChange={(event, newValue) => {
                        if (newValue === null) {
                            setSearch(props.moreMandirs[0])
                        } else {
                            onClick(newValue)
                        }
                    }
                    }
                    style={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Search for a NA Mandir" variant="outlined"/>}
                />
            </Flex>
            <StyledGrid>
                <Left>
                    {
                        mandirInformation.map((mandir) => {
                            return <MandirCard onClick={onClick} search={search ? search : props.moreMandirs[0]}
                                               name={mandir.name}
                                               address={mandir.address} key={mandir.address}
                                               image={mandir.image} latlng={mandir.latlng}/>
                        })
                    }
                </Left>
                <Right>
                    <MapContainer style={{width: '100%', height: '100%'}} center={location} zoom={15}
                                  scrollWheelZoom={true}>
                        <TileLayer
                            style={{width: '100px', height: '100px'}}
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            mandirInformation.map((mandir) => {
                                return <LocationMarker search={search ? search : props.moreMandirs[0]}
                                                       name={mandir.name} address={mandir.address} key={mandir.address}
                                                       image={mandir.image} latlng={mandir.latlng}/>
                            })
                        }

                    </MapContainer>
                </Right>


            </StyledGrid>
            <Flex>
                <Button onClick={handlePrev}>Prev</Button>
                <Button onClick={handleNext}>Next</Button>
            </Flex>
        </StyledDiv>);
}

function mapStateToProps(state) {
    return {
        mandirs: state.mandir.mandirs,
        moreMandirs: state.mandir.moreMandirs
    }
}

export default connect(mapStateToProps)(MandirMap)
