Git Clone

cd DOCKER_AWS

npm install

npm start

---

After Connecting to SSH Terminal

---

RUN

To deploy a Node.js server on an EC2 instance, you can follow these general steps:

Set up an EC2 instance:

Launch an EC2 instance on AWS.
Choose an Amazon Machine Image (AMI) that suits your needs.
Configure the security group to allow incoming traffic on the required ports (e.g., 80 for HTTP, 443 for HTTPS).
Connect to your EC2 instance:

Use SSH to connect to your EC2 instance. You'll need the private key associated with the key pair used when launching the instance.

## CMD:ssh -i your-key.pem ec2-user@your-instance-ip [OR] Connect by Putty

Install Node.js:

Update the package lists:

## CMD: sudo yum update -y

Install Node.js:

## CMD: sudo yum install -y nodejs

If your server stops when you close the PuTTY terminal, it indicates that the process you started (such as your Node.js application) is running in the foreground, and it terminates when the terminal session is closed.

To keep your Node.js application running even after closing the PuTTY terminal, you can use tools like nohup or tmux. Here's how you can do it using nohup:

Start your Node.js application with nohup:

## CMD:nohup node your-app.js &

The nohup command stands for "no hang up." It allows the command to continue running even after the terminal is closed. The & at the end runs the process in the background.

Optionally, you can redirect the output to a file:

## CMD: nohup node your-app.js > output.log 2>&1 &

This way, you can review the output later if needed.

To check if your application is still running:

## CMD:ps aux | grep node

You should see your Node.js process in the list.

Stop the process using the kill command:

## CMD: kill PID

Replace PID with the actual process ID you obtained.

---

Alternatively, you might consider using a process manager like pm2 for more advanced process control and monitoring. Here's a brief example:

---

Install pm2 globally:

## CMD: npm install -g pm2

Start your Node.js application with pm2:

## CMD: pm2 start your-app.js

To list running processes:

## CMD:pm2 list

Your application should be listed, and it will continue running in the background even if you close the PuTTY terminal.

Stop the application using the pm2 stop command:

## CMD: pm2 stop app_name_or_id

Replace app_name_or_id with the name or ID of your application as shown in the pm2 list output.

Choose the method that best fits your needs and workflow.
