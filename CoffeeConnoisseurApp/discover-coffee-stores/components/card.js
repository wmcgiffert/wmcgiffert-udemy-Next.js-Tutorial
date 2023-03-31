import styles from './card.module.css'
import Image  from 'next/image'

const Card = (props) => {
    return(
        <div className={styles}>
            <h1>Card Component</h1>
        </div>
    );
};

export default Card;