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
                    sh 'git checkout develop'
                    sh "sed -i 's|godbyul/beyondlog-api:.*|godbyul/beyondlog-api:${params.DOCKER_IMAGE_VERSION}|g' deploy.yaml"
                    sh 'cat deploy.yaml'
                }
            }
        }

        stage('Commit & Push') {
            steps {
                sh 'git config --list'
                sh 'git config user.name "ohglory"'
                sh 'git config user.email "a25553683@gmail.com"'
                sh 'git config --list'
                sh 'git add .'
                sh "git commit -m 'Update Image Version ${params.DOCKER_IMAGE_VERSION}'"
                sh 'git status'
                withCredentials([usernamePassword(
                    credentialsId: 'git-plz',
                    usernameVariable: 'GIT_USERNAME',
                    passwordVariable: 'GIT_PASSWORD'
                )]) {
                    sh 'git remote set-url origin https://$GIT_USERNAME:$GIT_PASSWORD@github.com/beyond-sw-camp/be13-4th-Be4after-BeyondLog.git'
                    sh 'git push origin HEAD:develop'
                }
            }
        }
    }
}
