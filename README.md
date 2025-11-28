# Node.js CI/CD Pipeline with Jenkins, Docker & Azure VM

This project demonstrates an end-to-end CI/CD pipeline for a Node.js application using:

- Jenkins Pipeline (Multibranch/SCM)
- Docker image build & push to Docker Hub
- Automated deployment to Azure VM via SSH
- GitHub webhook-based auto-trigger

---

## 🚀 Pipeline Workflow

1. **Code Push to GitHub**  
   → Webhook triggers Jenkins automatically.

2. **Jenkins CI Stage**  
   - Clone repository  
   - Build Docker image  
   - Authenticate & push image to Docker Hub  

3. **CD Deployment Stage**  
   - SSH into Azure VM  
   - Pull latest Docker image  
   - Restart container with zero-downtime rollout  

---

## 🛠️ Tech Stack

- **Node.js** (App)
- **Docker** (Containerization)
- **Jenkins** (CI/CD Automation)
- **Azure VM** (Deployment Target)
- **Docker Hub** (Image Registry)
- **GitHub Webhooks** (Triggering)

---

## 📂 Repository Structure
## 📂 Repository Structure

.
├── Jenkinsfile              # CI/CD pipeline definition
├── Dockerfile               # Node.js app container build
├── app.js                   # Sample Node.js application
├── package.json             
└── README.md
Update project README


