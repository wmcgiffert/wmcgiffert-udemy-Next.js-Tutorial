import styles from './card.module.css'
import Image  from 'next/image'
import Link from 'next/link';

const Card = (props) => {
    const { href, name, imageUrl, details } = props.cardData;
    return(
        <div className={styles}>
            <Link href={href}>
                <h2>{name}</h2>
                <Image
                    src={imageUrl}
                    width={300}
                    height={200}
                    alt="Barista at Coffee Shop"
                />
                <p>{details}</p>
            </Link>
        </div>
    );
};

export default Card;