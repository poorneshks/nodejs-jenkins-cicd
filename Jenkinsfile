pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = credentials('dockerhub-username')
        DOCKERHUB_PASSWORD = credentials('dockerhub-password')
        VM2_USER = 'azureuser2'
        VM2_IP = '<VM2-PUBLIC-IP>'
        IMAGE = "nodejs-cicd-app"
        TAG = "latest"
    }

    stages {

        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/<repo>.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USERNAME/$IMAGE:$TAG .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin'
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push $DOCKERHUB_USERNAME/$IMAGE:$TAG'
            }
        }

        stage('Deploy to Azure VM2') {
            steps {
                // Copy deploy script to VM (optional)
                sh """
                ssh -o StrictHostKeyChecking=no $VM2_USER@$VM2_IP '
                    docker pull $DOCKERHUB_USERNAME/$IMAGE:$TAG &&
                    docker stop nodeapp || true &&
                    docker rm nodeapp || true &&
                    docker run -d -p 80:3000 --name nodeapp $DOCKERHUB_USERNAME/$IMAGE:$TAG
                '
                """
            }
        }
    }
}
