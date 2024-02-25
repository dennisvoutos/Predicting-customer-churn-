import "./App.css";
import React, { useState } from "react";
import Questions from "./components/Questions.js";
import Results from "./components/Results.js";

function App() {
  const [formData, setFormData] = React.useState({
    creditScore: { value: "", valid: false },
    age: { value: "", valid: false },
    balance: { value: "", valid: false },
    numOfProducts: { value: "", valid: false },
    hasCrCard: "",
    isActiveMember: "",
    estimatedSalary: { value: "", valid: false },
    satisfactionScore: { value: "", valid: false },
  });
  const [done, setDone] = React.useState(false);
  return (
    <div className="App">
      <header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "20",
              fontWeight: "700",
              marginLeft: "50px",
            }}
          >
            Predicting customer churn rate for Banks
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "20",
              fontWeight: "700",
              marginRight: "50px",
            }}
          >
            A project by Dennis Voutos
          </div>
        </div>
      </header>
      {!done?(
        <>
        <Questions
          setFormData={setFormData}
          formData={formData}
          handleFinish={setDone}
        />
        <footer
          style={{ fontSize: "20px", fontWeight: "500", marginTop: "100px" }}
        >
          List of rules that must apply
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <li key={1} style={{ fontSize: "20px", fontWeight: "500" }}>
              Credit score must be between 350 and 850
            </li>
            <li key={2} style={{ fontSize: "20px", fontWeight: "500" }}>
              Must be over 18
            </li>
            <li key={3} style={{ fontSize: "20px", fontWeight: "500" }}>
              Number of products from 1-5
            </li>
            <li key={4} style={{ fontSize: "20px", fontWeight: "500" }}>
              Satisfaction score 1-5
            </li>
          </ul>
        </footer>
        </>
      ) : (<Results formData={formData} done={true}/>)}
    </div>
  );
}

export default App;
