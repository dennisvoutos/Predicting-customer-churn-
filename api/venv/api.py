from flask import Flask,request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report
app = Flask(__name__)
CORS(app)

data = pd.read_csv("C:/Users/vouto/Desktop/Customer-Churn-Records.csv")

# Feature selection (adjust features as needed)
selected_features = ["CreditScore", "Age", "Balance", "NumOfProducts", "HasCrCard", "IsActiveMember", "EstimatedSalary",]
X = data[selected_features]
y = data["Exited"]  # Target variable

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Build a custom random forest model using neural networks
model_rf = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation="relu", input_shape=(X_train_scaled.shape[1],)),
    tf.keras.layers.Dense(64, activation="relu"),
    tf.keras.layers.Dense(1, activation="sigmoid")
])

# Compile the model
model_rf.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

# Train the model
model_rf.fit(X_train_scaled, y_train, epochs=15, batch_size=28, validation_data=(X_test_scaled, y_test))

# Evaluate the model
y_pred_rf = (model_rf.predict(X_test_scaled) > 0.5).astype(int)
@app.route('/api/churn', methods=["GET","OPTIONS","POST"])
def predict():
    try:
        data = request.get_json()
        # Convert the data to a DataFrame and ensure the columns are in the correct order
        data_df = pd.DataFrame(data, index=[0])[selected_features]
        
        single_observation_scaled = scaler.transform(data_df)
        print(data)
        # Make predictions using your trained model
        predicted_churn_probability = model_rf.predict(single_observation_scaled)

        # Convert probability to binary prediction (churn or not churn)
        predicted_churn = (predicted_churn_probability > 0.5).astype(int)
        return [predicted_churn.tolist(), predicted_churn_probability.tolist()]
    except Exception as e:
        # Handle exceptions appropriately
        return ["error"]
