import React, { FC } from 'react'
import { Props } from '../../utils/interfaces'
import Container from '../Container'
import MainNavbar from '../MainNavbar/MainNavbar'
import styles from './RoomsLayout.module.css'

interface IProps extends Props {

}

const RoomsLayout: FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <MainNavbar />

            <div className={`container ${styles.subcontainer}`} style={props.style}>
                {props.children}
            </div>
        </div>
    )
}

export default RoomsLayout