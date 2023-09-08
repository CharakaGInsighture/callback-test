const axios = require('axios');

const envVars = ['JOB_ID', 'CALLBACK_URL', 'TESTVAR_ACTION', 'TESTVAR_CODE']
async function main() {
    for (idx in envVars) {
        const varName = envVars[idx];
        console.log(`${varName}: ${process.env[varName]}`)
    }

    const callbackUrl = process.env['CALLBACK_URL'];
    if (callbackUrl) {
        const testvarCode = process.env['TESTVAR_CODE'];
        const resp = await axios.post(callbackUrl, {status: testvarCode || 'success'});
        console.log(resp.data);
    } else {
        console.log('No callback url had been provided')
    }

    console.log('Done')
}

main();
