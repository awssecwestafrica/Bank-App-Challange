pipeline {
    agent any
    
    
    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout the source code from version control (e.g., Git)
                git 'https://github.com/Taiwolawal/Bank-App-Challange.git'
                sh 'git --version'
                sh 'git branch'
                
            }
        }
        
        // stage('Install Dependencies') {
        //     steps {
        //         // Install Node.js dependencies using npm
        //         sh 'npm install'
        //     }
        // }
        
        // stage('Run Tests') {
        //     steps {
        //         // Run unit tests
        //         sh 'npm test'
        //     }
        // }
        
        // stage('Static Code Analysis') {
        //     steps {
        //         // Run static code analysis using a linter (e.g., ESLint)
        //         sh 'npm run lint'
        //     }
        // }
        
        // stage('Build Artifact') {
        //     steps {
        //         // Build the Node.js application artifact
        //         sh 'npm run build'
        //     }
        // }
        
        // stage('Create Docker Image') {
        //     steps {
        //         // Build and push a Docker image for the application
        //         sh 'docker build -t your-image-name .'
        //         sh 'docker push your-registry/your-image-name'
        //     }
        // }
    }
}