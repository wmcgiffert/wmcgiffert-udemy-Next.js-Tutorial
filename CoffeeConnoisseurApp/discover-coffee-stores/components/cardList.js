import styles from './cardList.module.css'
import Card from './card'


const CardList = ({ cardData }) =>{
return(
    <div className={styles}>
        {cardData.map((coffeeStore) => {
            return (
                <Card
                    key={coffeeStore.id}
                    href={coffeeStore.href}
                    name={coffeeStore.name}
                    imageUrl={coffeeStore.imageUrl}
                    details={coffeeStore.details}
                />
            );
        })}
    </div>
)
}

export default CardList;