pipeline {
    agent { label 'Windows' }

    stages {
        stage('Build') {
            steps {
                echo 'install project'
                sh 'npm install'    
            }
        }

        stage('Test') {
            steps {
                echo 'install project'
                sh 'npm test'
            }
        }
    }
}