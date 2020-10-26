import React from 'react'

export const LiTitle = ({categoria}) => {


     const {categoriaArray}= categoria;

    return (
        <>
            <li className="list-group-item active text-center">
                {
                    categoriaArray
                }
            </li>

        </>
    )
}
