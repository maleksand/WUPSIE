import Pizzas from "./UsagePizza"

export default function UsageComponent(props) {
  
    return(
        <div>
            <h1> Your usage related to Pizza</h1>
            <Pizzas data={props.data} />
        </div>
    )

}