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
    sh 'apt update && apt install xvfb -y'
    sh 'Xvfb :99 &'
    sh 'export DISPLAY=:99 && npm test'
  }
}

  }
}