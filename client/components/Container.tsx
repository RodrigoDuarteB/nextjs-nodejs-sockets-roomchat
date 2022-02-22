import React, { FC } from 'react'
import { Props } from '../utils/interfaces'

interface IProps extends Props {

}

const Container: FC<IProps> = (props) => {
    return (
        <div 
            style={{
                backgroundColor: 'white',
                opacity: 0.7,
                padding: 5,
                borderRadius: 5,
                ...props.style
            }}
            className={props.className}
        >
            {props.children}
        </div>
    )
}

export default Container