import "./Subscription.css"
import SubscriptionDate from "./SubscriptionDate"
import Container from "../templates/Container"

const Subscription =(props) => {
    let title=props.title
    const onClickHandler=()=>{}
    title="Changed Title"
   
    return(
        <Container className="subscription"> 
       <SubscriptionDate date= {props.date} />
        <h2 className="subscription title">{props.title}</h2>
        <div className="subscription price">{props.amount}</div>
        <button type="button" id="changeTitleButton" onClick={onClickHandler}>
            changeTitle
        </button>
        </Container>
    )
}
export default Subscription