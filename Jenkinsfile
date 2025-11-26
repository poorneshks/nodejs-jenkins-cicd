pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = credentials('dockerhub-username')
        DOCKERHUB_PASSWORD = credentials('dockerhub-password')
        VM2_USER = 'azureuser2'
        VM2_IP = '4.213.117.188'
        IMAGE = "kspoornesh/nodejs-jenkins-cicd"
        TAG = "latest"
    }

    stages {

        stage('Pull Code from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/poorneshks/nodejs-jenkins-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE:$TAG .'
            }
        }

        stage('Docker Hub Login') {
            steps {
                sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin'
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push $IMAGE:$TAG'
            }
        }

        stage('Deploy on Azure VM2') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no $VM2_USER@$VM2_IP '
                    docker pull $IMAGE:$TAG &&
                    docker stop nodeapp || true &&
                    docker rm nodeapp || true &&
                    docker run -d -p 80:3000 --name nodeapp $IMAGE:$TAG
                '
                """
            }
        }
    }
}
