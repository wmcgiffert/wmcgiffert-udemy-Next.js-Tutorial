import styles from './banner.module.css'

export default function Banner(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span> 
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover your local coffee shops!</p>
            <div className={styles.buttonWrapper}>
                <button 
                    className={styles.button}
                    onClick={props.handleOnClick}
                    >{props.buttonText}
                </button>
            </div>
        </div>
    );
}