import { Link, useLocation } from 'react-router';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    
    const location = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${location.pathname === to ? styles.active : ""}
        `} to={to}>
            {children}  
        </Link>
    )

}