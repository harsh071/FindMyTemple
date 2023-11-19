import React, {useEffect, useState} from "react";
import {useMapEvents} from "react-leaflet";
import {connect} from "react-redux";
import styled from "styled-components";
import MarkerComponent from "./markerComponent.component";

function LocationMarker(props) {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        click() {
            map.flyTo(props.latlng, map.getZoom())
        }
    })

    useEffect(() => {
        setPosition(props.latlng)
    }, [props.latlng])

    useEffect(() => {
        map.flyTo(props.search.latlng, map.getZoom())

    }, [props.search])

    return position === null
        ? null
        : (
            <MarkerComponent {...props} lat={position[0]} long={position[0]} position={position}>
            </MarkerComponent>
        )
}

function mapStateToProps(state) {
    return {
        mandirs: state.mandir.mandirs,
        moreMandirs: state.mandir.moreMandirs
    }
}

export default connect(mapStateToProps)(LocationMarker)
