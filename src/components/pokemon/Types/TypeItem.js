import React from 'react'

const TypeItem = ({eleType:{type}}) => {
    return (
        <div>
            <h1>
                {type.name}
            </h1>
        </div>
    )
}

export default TypeItem
