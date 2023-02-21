
import styles from '@/styles/Home.module.css';

export default function Banner(){
    return (
        <div className={styles.card}>
            <h1>Coffee Connoisseur</h1>
            <p>Find the best coffee shops in your area</p>
            <button>Find a Shop</button>
        </div>
    )
};


