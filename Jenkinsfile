pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage("Install") {
            steps {
                echo "Present Directory: $PWD"
                sh "npm config set legacy-peer-deps true"
                sh "npm install"
            }
        }

        // stage("Build") {
        //     steps {
        //         sh "npm run build"
        //     }
        // }

        stage('Manage PM2 Process') {
            steps {
                echo "Present Directory: $PWD"
                // sh 'pm2 delete techforing'
                // sh 'cd //var/lib/jenkins/workspace/Techforing-dev && pm2 start npm --name techforing -- run start'
                // sh 'pm2 save'
            }
        }

        stage("Nginx Restart") {
            steps {
                sh "sudo systemctl restart nginx.service"
            }
        }

    }
}
