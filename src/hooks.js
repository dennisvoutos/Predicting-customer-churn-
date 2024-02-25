import React from "react";

export const isValid = (name, value) => {
  if (name === "creditScore") {
    return value >= 350 && value <= 850;
  } else if (name === "age") {
    return value >= 18 && value <= 95;
  } else if (name === "balance") {
    return value >= 0;
  } else if (name === "numOfProducts") {
    return value > 0 && value <= 5;
  } else if (name === "estimatedSalary") {
    return value >= 0;
  } else if (name === "satisfactionScore") {
    return value > 0 && value <= 5;
  } else {
    return value !== "";
  }
};
export const usePrediction = (formData, done) => {
  const [prediction, setPrediction] = React.useState(0);
  React.useEffect(() => {
    if (done === true) {
      const observation = {
        CreditScore: parseInt(formData.creditScore.value),
        Age: parseInt(formData.age.value),
        Balance: formData.balance.value
          ? parseFloat(formData.balance.value)
          : 0,
        NumOfProducts: formData.numOfProducts.value
          ? parseInt(formData.numOfProducts.value)
          : 0,
        HasCrCard: formData.hasCrCard.value==="true",
        IsActiveMember: formData.isActiveMember.value==="true",
        EstimatedSalary: parseFloat(formData.estimatedSalary.value),
      };
      fetch("http://localhost:5000/api/churn", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(observation),
      })
        .then((res) => res.json())
        .then((response) => setPrediction(response))
        .catch((error) => console.log(error));
    }
  }, [formData, done]);
  return(prediction!==0 ? prediction : undefined)
};
