pipeline {
    agent { label 'Windows' }
    tools {nodejs "node"}
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/mahendra23/API-Jest-Supertest-Chai-Testing'
            }
        }
        stage('Install dependencies') {
            steps {
                echo 'installing...'
                sh 'cd'
                sh 'npm install'    
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}