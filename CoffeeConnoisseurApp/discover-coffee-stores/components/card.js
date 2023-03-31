import styles from './card.module.css'
import Image  from 'next/image'
import Link from 'next/link';

const Card = (props) => {
    return(
        <div className={styles}>
            <h1>Card Title</h1>
            <Image
                src="/static/CoffeeShop1.jpeg"
                width={300}
                height={200}
                alt="Barista at Coffee Shop"
            />
            <p>Card Details</p>
            <Link href="/coffee-store/123">Coffee Store</Link>
        </div>
    );
};

export default Card;