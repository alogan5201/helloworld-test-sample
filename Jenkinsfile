pipeline {
  agent any

  tools {nodejs "node"}
  
  stages {

    stage('Git') {
      steps {
        git 'https://github.com/alogan5201/helloworld-test-sample'
      }
    }
    
      stage('Build') {
      steps {
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