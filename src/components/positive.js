export  default function Positive(accuracy) {
    const formatedAccuracy = (accuracy.accuracy[0] * 100).toFixed(2) + "%";
    return (
        <div style={{backgroundColor:'green', fontSize:'30px',display:'flex',alignContent:'center',alignItems:'center',justifyContent:"center"}}> The customer will not churn!</div>
    )
}