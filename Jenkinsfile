pipeline {
    agent { label 'Windows' }

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning git repo API-Jest-Supertest-Chai-Testing'
                sh 'git clone https://github.com/mahendra23/API-Jest-Supertest-Chai-Testing.git'
            }
        }

        stage('Build') {
            steps {
                echo 'install project'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}