import './Container.css'
const Container =(props) => {
    const classes="container " + props.className
    console.log("props.className")
    return (
        <div className={classes}> {props.children}</div>

    )
}
export default Container