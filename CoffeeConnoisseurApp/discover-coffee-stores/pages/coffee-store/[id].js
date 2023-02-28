import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  const { id } = router.query;
  return <div>Coffee Store {id} this is pretty simple</div>;
};

export default CoffeeStore;