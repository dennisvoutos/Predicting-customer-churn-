import React from "react";
import { isValid } from "../hooks";

const Questions = (props) => {
  const { formData, setFormData, handleFinish } = props;
  // we care for "CreditScore", "Age", "Balance", "NumOfProducts", "HasCrCard", "IsActiveMember", "EstimatedSalary", "Satisfaction Score"
  const optionStyleInvalid = {
    backgroundColor:"#ffaa009e",fontSize:'20px'
  }
  const optionStyleValid = {
    fontSize:'20px',
    backgroundColor:'#00800069'
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    const tempValid = isValid(name, value);
    setFormData({
      ...formData,
      [name]: { value: value, valid: tempValid },
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormDataFilled = Object.values(formData).every(
      (item) => item.value !== ""
    );
    const isFormDataValid = Object.values(formData).every(
        (item) => item.valid === true
    )
    if(!isFormDataValid) {
        alert("Please check that all form data is valid!!")
        return
    } 
    isFormDataFilled
      ? handleFinish(true)
      : alert(
          "Please fill in all the fields. Cannot perform accurate prediction without all of the inputs"
        );
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "350px",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="creditScore"
        >
          Credit Score:
        </label>
        <input
          type="number"
          id="creditScore"
          name="creditScore"
          value={formData.creditScore.value}
          onChange={handleChange}
          style={formData.creditScore.valid? optionStyleValid: formData.creditScore.value===""? {fontSize:'20px'}:optionStyleInvalid}
        />
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="age"
        >
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age.value}
          onChange={handleChange}
          style={formData.age.valid? optionStyleValid: formData.age.value===""? {fontSize:'20px'}:optionStyleInvalid}
        />
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="balance"
        >
          Balance:
        </label>
        <input
          type="number"
          id="balance"
          name="balance"
          value={formData.balance.value}
          onChange={handleChange}
          style={formData.balance.valid? optionStyleValid: formData.balance.value===""? {fontSize:'20px'}:optionStyleInvalid}
        />
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="numOfProducts"
        >
          Number of Products:
        </label>
        <input
          type="number"
          id="numOfProducts"
          name="numOfProducts"
          value={formData.numOfProducts.value}
          onChange={handleChange}
          style={formData.numOfProducts.valid? optionStyleValid: formData.numOfProducts.value===""? {fontSize:'20px'}:optionStyleInvalid}
        />
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="hasCrCard"
        >
          Has Credit Card:
        </label>
        <select
          id="hasCrCard"
          name="hasCrCard"
          value={formData.hasCrCard.value}
          onChange={handleChange}
          style={formData.hasCrCard.valid? optionStyleValid: formData.hasCrCard.value===""? {fontSize:'20px'}:optionStyleInvalid}
        >
          {formData.hasCrCard === "" && <option value="">Select</option>}
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="isActiveMember"
        >
          Is Active Member:
        </label>
        <select
          id="isActiveMember"
          name="isActiveMember"
          value={formData.isActiveMember.value}
          onChange={handleChange}
          style={formData.isActiveMember.valid? optionStyleValid: formData.isActiveMember.value===""? {fontSize:'20px'}:optionStyleInvalid}
        >
          {formData.isActiveMember === "" && <option value="">Select</option>}
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="estimatedSalary"
        >
          Estimated Salary:
        </label>
        <input
          type="number"
          id="estimatedSalary"
          name="estimatedSalary"
          value={formData.estimatedSalary.value}
          onChange={handleChange}
          style={formData.estimatedSalary.valid? optionStyleValid: formData.estimatedSalary.value===""? {fontSize:'20px'}:optionStyleInvalid}
        />
        <br />

        <label
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          htmlFor="satisfactionScore"
        >
          Satisfaction Score:
        </label>
        <input
          type="number"
          id="satisfactionScore"
          name="satisfactionScore"
          value={formData.satisfactionScore.value}
          onChange={handleChange}
          style={formData.satisfactionScore.valid? optionStyleValid: formData.satisfactionScore.value===""? {fontSize:'20px'}:optionStyleInvalid}
        />
        <br />
        <button
          style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}
          type="submit"
        >
          See if the customer will churn!
        </button>
      </form>
    </div>
  );
};
export default Questions;
