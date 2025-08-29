pipeline {
    agent any

    environment {
        IMAGE_NAME = "jdsk"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script{
                    def scannerHome = tool 'SonarQube';
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
            }
        }
        }
        }
        stage('Docker Build & Push') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'DockerHub-credentiels',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )]) {
                        sh """
                        docker login -u $DOCKER_USER -p $DOCKER_PASS
                        docker build -t $DOCKER_USER/${IMAGE_NAME}:${BUILD_NUMBER} .
                        docker tag $DOCKER_USER/${IMAGE_NAME}:${BUILD_NUMBER} $DOCKER_USER/${IMAGE_NAME}:latest
                        docker push $DOCKER_USER/${IMAGE_NAME}:${BUILD_NUMBER}
                        docker push $DOCKER_USER/${IMAGE_NAME}:latest
                        """
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withKubeConfig([credentialsId: 'Kubeconfig-file']) {
                    sh 'kubectl apply -f k8s/deployment.yaml'
                    sh 'kubectl apply -f k8s/service.yaml'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
