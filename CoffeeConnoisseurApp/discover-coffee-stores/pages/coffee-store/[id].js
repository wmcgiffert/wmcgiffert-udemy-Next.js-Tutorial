import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router = useRouter();

  const id = router.query.id;
  return <div>Coffee Store {id} this is pretty simple</div>;
};

export default CoffeeStore;