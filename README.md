# 🌾 Harvest Haven - AI-Driven Farming Assistant 🌾

Welcome to **Harvest Haven**, an innovative AI-powered mobile app designed to elevate the agriculture industry by delivering reliable, real-time insights and tools for farmers. From instant disease diagnosis to AI-driven advisory, Harvest Haven is your trusted partner in the fields.

---

## 📱 Features

### 🚜 Revolutionary AI Diagnosis
- **Image-based Diagnosis**: Instantly detect crop and livestock diseases with a simple image upload.
- **24/7 Expert Assistance**: Get real-time advice from veterinary experts anytime, anywhere.

### 💬 AgriChatbot Advisor
- **Interactive Chat**: Engage with an AI-powered chatbot for personalized guidance.
- **Tailored Recommendations**: Receive crop and fertilizer recommendations specific to your farm's conditions.

### 🛒 Direct-to-Consumer Marketplace
- **Sell Your Produce**: Connect with consumers directly, maximizing profit and freshness.
- **Logistics Support**: Efficiently manage deliveries to ensure end-to-end freshness.

---

## 🌟 Unique Value Propositions

- **Multilingual Support**: Access the platform in various languages, breaking down communication barriers.
- **Broad Diagnostic Capabilities**: Supports a diverse range of crops and livestock.
- **End-to-End Solution**: From diagnosis to marketplace, everything a farmer needs in one app.

---

## 💻 Technical Approach

1. **Algorithm Development**:
   - 🧠 **PyTorch**: For deep learning models that detect diseases via image classification.
   - 🗣️ **LLMs (Large Language Models)**: Fine-tuned for diagnosing symptoms and providing recommendations.

2. **Mobile App Development**:
   - 📲 **React Native**: Ensures a smooth, cross-platform experience for Android and iOS.

3. **Cloud Services**:
   - 🌐 **MongoDB Atlas**: Securely stores disease data, veterinary requests, and community forum discussions.
---

## 🤖 AI Model - Fine-tuned with Mistral-Nemo-Instruct-2407

In **Harvest Haven**, we leverage a state-of-the-art, fine-tuned language model, **mistralai/Mistral-Nemo-Instruct-2407**, to provide highly accurate and context-aware responses for our AgriChatbot and diagnostic tools. This model has been customized and deployed to meet the unique needs of farmers, from answering crop-related questions to offering expert advice for livestock health.

### 🌱 Model Fine-Tuning

To enhance relevance, we fine-tuned the **Mistral-Nemo-Instruct-2407** model on agricultural and veterinary datasets. This training ensures that the AI understands and responds accurately to the specific language, terminology, and practical challenges of farming.

Key benefits of our fine-tuned model:
- **Domain-Specific Knowledge**: Optimized for agriculture and veterinary topics, enabling precise advice.
- **Robust Natural Language Understanding**: Provides natural, human-like interactions to facilitate a more intuitive user experience.

### 💡 Deployment with Gradio

To make the model accessible to users, we deployed it using **Gradio**, which provides an interactive web interface. This deployment allows seamless integration within the Harvest Haven app, offering farmers an easy-to-use platform for receiving expert guidance.

Gradio setup details:
1. **Gradio Interface**: Designed with custom UI components to handle text input and image uploads for diagnosis.
2. **API Integration**: Our Gradio interface is connected to the mobile app, enabling real-time responses from the LLM model for chat-based and diagnostic services.
3. **Scalability and Security**: Gradio ensures a stable environment, handling multiple requests efficiently, while secure API calls protect user data.

---



## 🔄 Process Flow

![image](https://github.com/user-attachments/assets/04523537-bed9-4de9-8314-39b7f8d7193b)
Here's an outline of the **Process Flow** for *Harvest Haven*:

1. **User Input**: Farmers access the Harvest Haven app, where they can either:
   - Upload images of crops or livestock showing potential signs of disease.
   - Ask questions or seek advice using the chat interface powered by our fine-tuned LLM model.

2. **Image Analysis and Diagnosis**:
   - For image-based requests, the app sends the image data to our deep learning model, which uses **PyTorch**-based image classification to identify diseases. The AI model evaluates the image and provides an instant diagnosis along with recommended treatments.

3. **LLM Chat-Based Guidance**:
   - Text-based inquiries are routed to the **Mistral-Nemo-Instruct-2407** model, fine-tuned for agricultural advice. The model generates a response by interpreting the question, considering recent context, and delivering actionable insights, from disease prevention to optimized fertilizer usage.

4. **Personalized Recommendations**:
   - The app consolidates diagnostic results and model-generated advice to present tailored recommendations for crop health, livestock care, and pest management. Additionally, it suggests the best-suited fertilizers, watering schedules, and pest control strategies based on local conditions.

5. **Direct Marketplace and Logistics Support**:
   - Farmers can choose to list their products in the marketplace, connecting directly with consumers. The logistics feature ensures that their goods reach customers in optimal condition, maximizing both freshness and profitability.

6. **Continuous Learning**:
   - User feedback is integrated to retrain and improve the AI models, enhancing diagnostic accuracy and relevance of advice over time.

This structured workflow ensures that *Harvest Haven* provides a streamlined and responsive user experience, empowering farmers with reliable, AI-driven agricultural support at their fingertips. 

--- 

This flow highlights each step from user interaction to diagnosis, recommendation, and marketplace engagement, ensuring an accessible yet comprehensive agricultural assistant.

---

## 📈 Impact and Benefits

- **Increased Yields**: Accurate diagnostics lead to healthier crops and increased profits.
- **Cost Savings**: Access to timely expert advice reduces unnecessary treatments.
- **Community Building**: Connect with other farmers, share experiences, and gain insights into modern practices.

---

## 🌐 Research and References

Our approach is grounded in the latest advancements in AI and agricultural technology. Here are some of our key references:
- [Study on AI in Agriculture](https://www.mdpi.com/2073-4395/12/10/2395)
- [Big Data in Farming](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-023-00863-9)

For a full list, check our **References** section in the app.

---

## ⚙️ Getting Started

To get started with Harvest Haven:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Dhaarx/Harvest-Haven-Deployment.git
   ```

2. **Install Dependencies**:
   Navigate to the project folder and install the dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```
# 🌿 Harvest Haven – API Suite

## 🔗 APIs & Microservices

### 🧠 1. Plant Disease Detection (Deep Learning)
- **Repo:** [cropprediction-dl-api](https://github.com/Dhaarx/cropprediction-dl-api)
- **Endpoint:** [`/predict`](https://cropprediction-dl-api.onrender.com/predict)
- **Description:** Predicts leaf disease using a deep learning model.
- **Tech:** Flask + CNN model

---

### 📚 2. Retrieval-Augmented Generation (RAG)
- **Repo:** [rag-api](https://github.com/Dhaarx/rag-api)
- **Endpoint:** [`/rag`](https://rag-api-8u2y.onrender.com/rag)
- **Description:** Fetches content and images related to the disease predicted by the DL model.
- **Tech:** Flask + PDF content extraction + Semantic Search

---

### 💬 3. AgriBot – Crop & Livestock Chatbot
- **Repo:** [cropbot-api](https://github.com/Dhaarx/cropbot-api)
- **Endpoints:**
  - [`/crops`](https://cropbot-api.onrender.com/crops) – Chatbot for crop-related queries  
  - [`/livestock`](https://cropbot-api.onrender.com/livestock) – Chatbot for livestock-related queries
- **Tech:** Flask + Google Gemini API

---

### 🌱 4. Fertilizer Recommendation
- **Repo:** [ml-api](https://github.com/Dhaarx/ml-api)
- **Endpoint:** [`/predict`](https://fertilizer-docker-api.onrender.com/predict)
- **Description:** Recommends the most suitable fertilizer based on crop and soil data.
- **Tech:** Flask + Random Forest Model

---

### 🌾 5. Crop Recommendation
- **Repo:** [crop_prediction-api](https://github.com/Dhaarx/crop_prediction-api)
- **Endpoint:** [`/predict`](https://crop-prediction-api-2618.onrender.com/predict)
- **Description:** Suggests the best crop to grow based on soil, climate, and nutrient data.
- **Tech:** Flask + Random Forest Model

---

### 🗃️ 6. MongoDB Backend API
- **Repo:** [mongodb-api-Harvest-Haven](https://github.com/Dhaarx/mongodb-api-Harvest-Haven-)
- **Endpoint:** [`/`](https://mongodb-api-harvest-haven.onrender.com)
- **Description:** Handles MongoDB data storage for all modules (users, queries, predictions, etc.).
- **Tech:** Node.js + Express + MongoDB Atlas

---

## 🧰 Deployment & Dev Tools
- ☁️ **Render** – API Hosting
- 🐳 **Docker** – Containerization for backend APIs
- 🍃 **MongoDB Atlas** – Cloud-hosted NoSQL DB
- 🔐 **Environment Variables** – Managed via `.env` (locally) and Render dashboard (production)

---

## 🛠️ Local Setup (Contributing)
Clone individual repos to run and test each service locally.

```bash
# Example for DL-based crop prediction
git clone https://github.com/Dhaarx/cropprediction-dl-api
cd cropprediction-dl-api
pip install -r requirements.txt
python app.py
```
---
## 📝 Feedback and Contributions

Contributions are welcome! For major changes, please open an issue to discuss your ideas. We look forward to building a sustainable future together! 🧑‍🌾
