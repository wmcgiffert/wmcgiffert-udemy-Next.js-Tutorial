import styles from './card.module.css'
import Image  from 'next/image'
import Link from 'next/link';

const Card = ({ href, name, imageUrl, details }) => {
    return(
        <Link href={href}>
            <div className={styles.card}>
                <Image
                    src={imageUrl}
                    width={300}
                    height={200}
                    alt="Barista at Coffee Shop"
                />
                <h2>{name}</h2>
                <p>{details}</p>
            </div>
        </Link>
    );
};

export default Card;