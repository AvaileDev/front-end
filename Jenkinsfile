pipeline {
    agent any

    triggers {
        pollSCM('0 H * * *')
    }

    stages {
        stage('Lint') {
            steps {
                echo 'Linting the application'
                sh 'npx eslint --fix .'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Starting the application'
                sh 'npm start'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
