pipeline {
    agent any

    environment {
        DOCKER = credentials('dockerhub')
        IMAGE = "kspoornesh/nodejs-jenkins-cicd"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/poorneshks/nodejs-jenkins-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKER_PSW | docker login -u $DOCKER_USR --password-stdin'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $IMAGE:latest'
            }
        }
    }

    post {
        success {
            echo "Build successful — Docker image pushed to DockerHub!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
