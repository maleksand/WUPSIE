import Pizzas from "./UsagePizza"
import UsagePieChart from "./UsagePieChart";

export default function UsageComponent(props) {
  
    return(
        <div>
            <h1> Your usage related to Pizza</h1>
            {/* <Pizzas data={props.dataCold} /> */}
            {/* <Pizzas data={props.data.dataHot} /> */}
            <UsagePieChart data={props} />
        </div>
    )

}