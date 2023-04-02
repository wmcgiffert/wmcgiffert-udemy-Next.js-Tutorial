import styles from './card.module.css'
import Image  from 'next/image'
import Link from 'next/link';

const Card = (props) => {
    return(
        <div className={styles}>
            <Link href={props.href}>
                <h2>{props.name}</h2>
                <Image
                    src={props.imageUrl}
                    width={300}
                    height={200}
                    alt="Barista at Coffee Shop"
                />
                <p>{props.details}</p>
            </Link>
        </div>
    );
};

export default Card;