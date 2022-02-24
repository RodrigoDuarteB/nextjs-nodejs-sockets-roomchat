import React, { FC } from 'react'
import { Props } from '../utils/interfaces'
import styles from '../config/styles'

interface IProps extends Props {

}

const Container: FC<IProps> = (props) => {
    return (
        <div 
            style={{
                backgroundColor: styles.colors.secondaryLight,
                opacity: 0.85,
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