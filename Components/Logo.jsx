import styles from './logo.module.css'
export default function Logo(){
    return <div className={styles.LogoContainer}>
        <img src="/Images/logo.jpeg" alt="Logo" height="70"/>
    </div>
}