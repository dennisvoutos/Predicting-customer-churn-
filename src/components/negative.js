export  default function Negative(accuracy) {
    const formatedAccuracy = (accuracy.accuracy[0] * 100).toFixed(2) + "%";
    
    return (
        <div style={{backgroundColor:'Red', fontSize:'30px',display:'flex',alignContent:'center',alignItems:'center',justifyContent:"center"}}> The customer WILL churn</div>
    )
}