pipeline {
    agent any
    parameters {
        string(name: 'DOCKER_IMAGE_VERSION', defaultValue: '', description: 'First parameter')
    }
    stages {
        stage('Update deploy.yaml') {
            steps {
                dir('beyondLog-api') {
                    echo "${params.DOCKER_IMAGE_VERSION}"
                    sh 'pwd'
                    sh 'ls -al'
                    sh 'git checkout main'
                    sh "sed -i 's|godbyul/beyondlog-api:.*|godbyul/beyondlog-api:${params.DOCKER_IMAGE_VERSION}|g' deploy.yaml"
                    sh 'cat deploy.yaml'
                }
            }
        }

        stage('Commit & Push') {
            steps {
                sh 'git config --list'
                sh 'git config user.name "g00dbyul"'
                sh 'git config user.email "skypower4203@gmail.com"'
                sh 'git config --list'
                sh 'git add .'
                sh "git commit -m 'Update Image Version ${params.DOCKER_IMAGE_VERSION}'"
                sh 'git status'
                sshagent(['github-manifests-access-key']) {
                    sh 'git push'
                }
            }
        }
    }
}
