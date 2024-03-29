import React, { FC, HTMLInputTypeAttribute } from 'react'
import { Props } from '../utils/interfaces'

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
                    <input type={props.type} placeholder={props.placeholder}/>
                :
                    <textarea placeholder={props.placeholder}></textarea>
            }
        </div>
    ) : (
        !props.textArea ?
            <input type={props.type} placeholder={props.placeholder}/>
        :
            <textarea placeholder={props.placeholder}></textarea>
    )
}

export default Input