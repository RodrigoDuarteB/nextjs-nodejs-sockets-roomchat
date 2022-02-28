import React, { FC } from 'react'
import { Props } from '../utils/interfaces'
import styles from './Button.module.css';

interface IProps extends Props {
    text: string
    color: string
    textColor: string
    onClick: Function
    rounded?: number
    hoverColor?: string
    hoverTextColor?: string
}

const Button: FC<IProps> = (props) => {

    return (
        <button 
            style={{
                backgroundColor: props.color,
                color: props.textColor,
                opacity: 1,
                ...props.style
            }}
            className={styles.button}
        >
            {props.text}
        </button>    
    )
}

export default Button