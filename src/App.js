import './App.css';
import Container from './templates/Container';
import Subscription from './Subscription/Subscription';
import NewSubscription from './Subscription/NewSubscription/NewSubscription';


const App =()=> {
  let subscriptions=[
    {
      id:1,
      date:(new Date('2022','11','27')),
      title:"Monthly subscription",
      amount:"125.60"
    },
    {
      id:2,
      date:(new Date('2021','10','26')),
      title:"Annualy subscription",
      amount:"1125.60"
    },
    {
      id:3,
      date:(new Date('2023','09','12')),
      title:"Quarterly subscription",
      amount:"425.60"
    }
] 
  return (
   <Container>
    <NewSubscription />
      <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
      <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
      <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>

   </Container>
  );
}

export default App;
