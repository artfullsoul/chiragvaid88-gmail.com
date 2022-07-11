// CODE_CHANGES = getGitChanges()
pipeline 
{

    agent any
    // enviroment // DECLARE ALL ENVIROMENT VARIABLES HERE
    // {
    //     NEW_VERSION = '1.0.0'
    //     // SERVER_CERDENTIALS = credentials("Id-Given-To-Credential-In-Jenkins")
    // }
    parameters
    {
        // string(name: "VERSION" , defaultValue: "", description: "Version to deploy to Production")
        choice(name: "VERSION", choices: ["1.1.0","1.2.0","1.3.0"], description:"")
        booleanParam(name: "executeTests" , defaultValue: true, description: '')
    }
    stages 
    {

        stage("build")
        {
            when //This block is used to execute the stage only when it specifies certain listed condition 
            {
                expression 
                {
                    // BRANCH_NAME -> Is a default env variable that resturns current branch name
                    // to fin more go to "env-vars.html" inside your running jenkins server link
                    // BRANCH_NAME == 'master' && CODE_CHANGES == true
                }
            }
            steps
            {
                // sh "npm install"
                // sh "npm build"
                echo "building the application..."
                // echo "building version ${NEW_VERSION}"
            }
        }
        stage("test")
        {
            when 
            {
                expression 
                {
                    BRANCH_NAME == 'master' && params.executeTests
                }
            }
            steps
            {
                echo "testing the application..."
            }
        }
        stage("deploy")
        {
            
            steps
            {
                echo "deploying the application..."
                echo "deploying version ${params.VERSION}"
                // echo "deploying with ${SERVER_CREDENTIALS}"

                // widthCredentials([ //[] -> here segnifies object and not array
                //     usernamePassword(credentials : "Id-Given-To-Credential-In-Jenkins", usernameVariable : USER , passwordVariable : PWD)
                // ])
                // {
                //     echo("Username is ${USER} and password is ${PWD}")
                // }
            }
        }
    }
    // post 
    // {

    //     always {
    //         //This code will always execute be upper code results in success or failure
    //     }

    //     failure {
    //         //Code Executes upon Failure of upper code
    //     }

    //     success {
    //         //Code Executes upon Success of upper code

    //     }
    // }
}