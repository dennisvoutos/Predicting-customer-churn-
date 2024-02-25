import { usePrediction } from "../hooks"
import Positive from "./positive";
import Negative from "./negative";
export default function Results(props){
    const {formData,done} = props
    const accuracy = usePrediction(formData,done);
    accuracy && console.log(accuracy);
    const isPositive = accuracy && accuracy[0][0][0]===1
    const formatedAccuracy = accuracy && (accuracy[1][0][0] * 100).toFixed(2) + "%";
    if(formatedAccuracy> 0.4 && formatedAccuracy < 0.6){
        const not = formatedAccuracy>0.5 ? "NOT" : undefined
        return(
                <div style={{backgroundColor:'yellow', fontSize:'30px',display:'flex',alignContent:'center',alignItems:'center',justifyContent:"center"}}>The customer will {not} churn, but it is close</div>
            )
        }
    return(
        <div>
            {isPositive===undefined? null : isPositive ? (<Positive accuracy={accuracy[1][0]}/>):(<Negative accuracy={accuracy[1][0]}/>)}
        </div>
    )
}