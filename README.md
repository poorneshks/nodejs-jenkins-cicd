# 🚀 Node.js CI/CD Pipeline with Jenkins, Docker & Azure VM

This project demonstrates a complete **CI/CD pipeline** for a Node.js application using:

* **Jenkins Pipeline (Declarative)**
* **Docker image build & push to Docker Hub**
* **Automated deployment to Azure VM via SSH**
* **GitHub Webhook auto-trigger**

The goal is to achieve **end-to-end automation** from code commit → build → push → deploy.

---

## 🔄 Pipeline Workflow

### **1. Code Push → GitHub Webhook**

* Any commit to `main` triggers Jenkins automatically.

### **2. CI Stage (Jenkins)**

* Clone repository
* Build Docker image
* Login & push image to Docker Hub

### **3. CD Stage (Azure VM Deployment)**

* Connect to Azure VM via SSH
* Pull latest Docker image
* Stop + remove old container
* Run updated container
* Deployment completes automatically

---

## 🛠️ Tech Stack

* **Node.js** – Application
* **Docker** – Containerization
* **Jenkins** – CI/CD automation
* **Azure VM (Ubuntu)** – Deployment target
* **Docker Hub** – Image registry
* **GitHub Webhooks** – Auto-triggering builds

---

## 📂 Repository Structure

```
.
├── Jenkinsfile        # CI/CD pipeline definition
├── Dockerfile         # Docker build instructions
├── app.js             # Sample Node.js application
├── package.json       # Dependencies & metadata
└── README.md          # Project documentation
```

---

## 🧪 Run Locally

### **Without Docker**

```bash
git clone https://github.com/poorneshks/nodejs-jenkins-cicd.git
cd nodejs-jenkins-cicd
npm install
npm start
```

App runs at → **[http://localhost:3000](http://localhost:3000)**

---

### **With Docker**

```bash
docker build -t nodejs-jenkins-cicd .
docker run -d -p 3000:3000 nodejs-jenkins-cicd
```

---

## 📦 Docker Manual Commands

```bash
docker build -t yourdockerhubusername/nodejs-jenkins-cicd:latest .
docker push yourdockerhubusername/nodejs-jenkins-cicd:latest
docker pull yourdockerhubusername/nodejs-jenkins-cicd:latest
docker run -d -p 3000:3000 yourdockerhubusername/nodejs-jenkins-cicd:latest
```

---

## 📌 Highlights / What This Project Shows

* Fully automated **CI/CD** pipeline
* Docker-based deployment on Azure VM
* Jenkins credential binding (SSH + DockerHub)
* GitHub → Jenkins webhook automation
* Real-world DevOps flow: **Build → Push → Deploy**

---

## 🙌 Contributions

Pull requests are welcome!
