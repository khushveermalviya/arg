pipeline {
    agent any

    environment {
        DOCKER_USERNAME = 'khuhshveer'
        DOCKER_IMAGE = 'khuhshveer/arg'
        GITHUB_REPO = 'https://github.com/khushveermalviya/arg.git'
        BUILD_TAG = "${BUILD_NUMBER}-${GIT_COMMIT.take(7)}"
    }

    stages {

        stage('Clone Code') {
            steps {
                git "${GITHUB_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_TAG -t $DOCKER_IMAGE:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker push $DOCKER_IMAGE:latest
                docker push $DOCKER_IMAGE:$BUILD_TAG
                '''
            }
        }

        stage('Update Deployment') {
            steps {
                sh '''
                git config user.email "jenkins@example.com"
                git config user.name "Jenkins Pipeline"
                sed -i "s|image: .*|image: $DOCKER_IMAGE:latest|" k8s/deployment.yaml
                git add k8s/deployment.yaml
                git commit -m "Update image to latest build" || true
                git push origin HEAD:main || true
                '''
            }
        }

    }

    post {
        always {
            sh 'docker logout || true'
        }
        success {
            echo "Pipeline completed successfully. Image: $DOCKER_IMAGE:latest"
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
    }
}