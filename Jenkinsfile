pipeline {
    agent any

    environment {
        DOCKER_USERNAME = 'khuhshveer'
        DOCKER_IMAGE = 'khuhshveer/arg'
        GITHUB_REPO = 'https://github.com/khushveermalviya/arg.git'
    }

    stages {

        // stage('Clone Code') {
        //     steps {
        //         git "${GITHUB_REPO}"
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
            }
        }

        stage('Docker Login') {
            steps {
                sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
            }
        }

        // stage('Update GitOps Repo') {
        //     steps {
        //         sh '''
        //         git clone https://github.com/khushveermalviya/gitops-repo.git
        //         cd gitops-repo
        //         sed -i "s|image:.*|image: $DOCKER_IMAGE:$BUILD_NUMBER|" k8s/deployment.yaml
        //         git add .
        //         git commit -m "update image version"
        //         git push
        //         '''
        //     }
        // }

    }
}