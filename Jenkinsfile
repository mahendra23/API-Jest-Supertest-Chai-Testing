pipeline {
    agent { label 'Windows' }
    tools {nodejs "node"}
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/mahendra23/API-Jest-Supertest-Chai-Testing.git'
            }
        }
        stage('Install dependencies') {
            steps {
                echo 'installing...'
                bat 'cd'
                bat 'npm install'    
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'npm test'
            }
        }
    }
}