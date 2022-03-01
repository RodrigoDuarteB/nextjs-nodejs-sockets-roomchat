import React, { FC, HTMLInputTypeAttribute } from 'react'
import { Props } from '../../utils/interfaces'
import styles from './Input.module.css'

interface IProps extends Props {
    placeholder: string
    type?: HTMLInputTypeAttribute
    textArea?: boolean
    label?: string
}

const Input: FC<IProps> = (props) => {
    return props.label ? (
        <div>
            <label htmlFor="">{props.label}</label>
            {
                !props.textArea ?
                    <input type={props.type} placeholder={props.placeholder} className={styles.input} style={props.style}/>
                :
                    <textarea placeholder={props.placeholder} className={styles.input} style={props.style}></textarea>
            }
        </div>
    ) : (
        !props.textArea ?
            <input type={props.type} placeholder={props.placeholder} className={styles.input} style={props.style}/>
        :
            <textarea placeholder={props.placeholder} className={styles.input} style={props.style}></textarea>
    )
}

export default Input