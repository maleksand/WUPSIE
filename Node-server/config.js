/*
 * Create and export configuration variables
 */

// Container for all environments
let environments = {}

environments.development = {
    httpPort: 3000,
    baseAPIUrl: "http://localhost:8080"
}

// Determine which enviroment was passed as a command-line argument
let currentEnviroment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : ""

// Check that the current enviroment is one of the enviroments above, if not, default to staging
let enviromentToExport = typeof(environments[currentEnviroment]) === "object" ? environments[currentEnviroment] : environments.development

// export the module
module.exports = enviromentToExport