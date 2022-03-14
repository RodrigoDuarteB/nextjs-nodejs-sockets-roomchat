import { FC } from 'react'
import { Props } from '../../utils/interfaces'
import MainNavbar from '../MainNavbar/MainNavbar'
import styles from './RoomsLayout.module.css'

interface IProps extends Props {

}

const RoomsLayout: FC<IProps> = ({ children, style }) => {
    return (
        <div className={styles.container}>
            <MainNavbar />

            <div className={styles.content}>
                <div className={`container ${styles.contentContainer}`} style={style}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RoomsLayout