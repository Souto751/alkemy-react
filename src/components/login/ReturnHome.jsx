import React from 'react'
import {Redirect} from 'react-router-dom';

export default function ReturnHome(props) {
    console.log(props.props)
    if(props.props !== "none"){
        return <Redirect to="/alkemy-react/" />
    }
    return <div></div>
}
