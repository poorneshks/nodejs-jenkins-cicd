pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                url: 'https://github.com/poorneshks/nodejs-jenkins-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t kspoornesh/nodejs-jenkins-cicd:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                sh 'docker push kspoornesh/nodejs-jenkins-cicd:latest'
            }
        }

        stage('Deploy on VM2') {
            steps {
                sshagent(credentials: ['vm2ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no azureuser2@4.213.117.188 "
                            docker pull kspoornesh/nodejs-jenkins-cicd:latest &&
                            docker stop nodeapp || true &&
                            docker rm nodeapp || true &&
                            docker run -d --name nodeapp -p 3000:3000 kspoornesh/nodejs-jenkins-cicd:latest
                        "
                    '''
                }
            }
        }
    }
}
