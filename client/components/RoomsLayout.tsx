import React, { FC } from 'react'
import { Props } from '../utils/interfaces'
import Container from './Container'
import MainNavbar from './MainNavbar'
import styles from './RoomsLayout.module.css'

interface IProps extends Props {

}

const RoomsLayout: FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <MainNavbar />
            <Container style={{ margin: '0.5rem', width: '100%', ...props.style }}>
                {props.children}
            </Container>
        </div>
    )
}

export default RoomsLayout