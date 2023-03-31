import styles from './card.module.css'
import Image  from 'next/image'

const Card = (props) => {
    return(
        <div className={styles}>
            <p>Card Component</p>
        </div>
    );
};

export default Card;