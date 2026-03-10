pipeline {
    agent any

    environment {
        DOCKER_USERNAME = 'khuhshveer'
        BACKEND_IMAGE = 'khuhshveer/arg-backend'
        FRONTEND_IMAGE = 'khuhshveer/arg-frontend'
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
        sh '''
        docker build -f backend.Dockerfile -t $BACKEND_IMAGE:$BUILD_NUMBER .
        docker build -f frontend.Dockerfile -t $FRONTEND_IMAGE:$BUILD_NUMBER .
        '''
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
        docker tag $BACKEND_IMAGE:$BUILD_NUMBER $BACKEND_IMAGE:latest
        docker tag $FRONTEND_IMAGE:$BUILD_NUMBER $FRONTEND_IMAGE:latest
        docker push $BACKEND_IMAGE:$BUILD_NUMBER
        docker push $BACKEND_IMAGE:latest
        docker push $FRONTEND_IMAGE:$BUILD_NUMBER
        docker push $FRONTEND_IMAGE:latest
        '''
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