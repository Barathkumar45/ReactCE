import React from 'react'

export default function DefaultProps(props) {
    return (
        <div>
            <h2>DefaultProps</h2>
            <h2>Default value is {props.name}</h2>
        </div>
    )
}
DefaultProps.defaultProps={
    name:"SKCT"
}