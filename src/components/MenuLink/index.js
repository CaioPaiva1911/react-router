import { NavLink } from 'react-router';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    

    return (
        <NavLink className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.active : ''}
            `} 
            to={to}>
            {children}  
        </NavLink>
    )

}