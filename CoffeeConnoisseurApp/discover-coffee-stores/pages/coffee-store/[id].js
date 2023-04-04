import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const CoffeeStore = () => {
  const router = useRouter();
  const id = router.query.id;
  const storeName = id.replaceAll('-',' ');

  return( 
    <div className={styles.main}>
      <Link href={'/'}>
          Back to Home
      </Link>
      <h1>
        Coffee Store Query Param:  
        <div className={styles.main}>
          {storeName}
        </div>
      </h1>
    </div>
  );
};

export default CoffeeStore;