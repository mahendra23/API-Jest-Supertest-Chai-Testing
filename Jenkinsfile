pipeline {
    agent { label 'Windows' }

    stages {
        stage('Build') {
            steps {
                try {
                   echo 'install project'
                    sh 'npm install'
                } catch (err) {
                    echo err
                }
            }
        }

        stage('Test') {
            steps {
                try {
                   echo 'install project'
                    sh 'npm test'
                } catch (err) {
                    echo err
                }
            }
        }
    }
}