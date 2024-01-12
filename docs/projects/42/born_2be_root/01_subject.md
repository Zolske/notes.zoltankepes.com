---
sidebar_position: 1
---

:::note Disclamer

I wrote this notes for my future self, you are welcome to use them. If you are a student of "42" and you still have to finish the project, then please try first for your self before using my notes. This way you will learn more, happy coding. :computer: :smile: :thumbsup: 

:::

# Subject Overview
The goal is to create a virtual machine with "Debian" as a headless server (no grapical UI only command line). Following features need to be inplemented:  
- LVM disk partioning
- a strong password policy
- creating and regulating of the 'sudo' group
- remote SSH connection
- automated broadcast message with system report

## 1. Virtual Machine and OS
[ ] create a virtual machine with Virtual Box
[ ] install the latest stable version of Debian
[ ] only install the minimum of services (no graphical UI)
[ ] hostname must be 42 login name with the suffix '42' (e.g. zkepes42)
[ ] SELinux (adapt confi) and AppArmor must be running at startup
[ ] at least 2 encrypted partitions using LVM, see example:  
![example partition](../img/sub_partition.png)  

## 2. UFW uncomplicated fire wall
[ ] must be active at startup
[ ] open only port 4242

## 3. implement a strong password policy
[ ] expire every 30 days
[ ] can only be changed 2 days afer it was initally set up
[ ] user has to recive warning message 7 days befor expire
[ ] at least 10 characters long
[ ] must contain a number, uppercase and lowercase letter
[ ] not more then 3 consecutive identical characters
[ ] must not include the name of the user
[ ] (not for root) must have at least 7 characters that are not part of the former password
[ ] update existing password to the policy 

## 4. create user
[ ] create a user with your "42 username" (e.g. zkepes)
[ ] has to belong to the `user42` and `sudo` group

## 5. sudo with restrictions
[ ] 3 attempts to authentication before retrying
[ ] custom message for wronge password
[ ] each sudo action (inputs and outputs) has to be archived in the `/var/log/sudo/`` directory
[ ] TTY mode has to be enabled for security reasons
[ ] restricting the environment variable `PATH`` to:  
`/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin`

## 6. broacast "system status" message
[ ] developed in bash and be named `monitoring.sh`
[ ] run at server startup, on all terminals ever 10 minutes
[ ] no visible error messages
[ ] - architecture of your operating system and its kernel version
[ ] - number of physical processors
[ ] - number of virtual processors
[ ] - current available RAM on your server and its utilization rate as a percentage
[ ] - current available memory on your server and its utilization rate as a percentage
[ ] - current utilization rate of your processors as a percentage
[ ] - date and time of the last reboot
[ ] - whether LVM is active or not
[ ] - number of active connections
[ ] - number of users using the server
[ ] - IPv4 address of your server and its MAC (Media Access Control) address
[ ] - number of commands executed with the sudo program
![broacast message](../img/sub_broadcast_message.png)

## 7. commands to check some of the subjects requrements
- `head -n 2 /etc/os-release`: distribution and it's version
- `/usr/sbin/aa-status`: if AppArmor module is loaded
- `ss -tunlp`: [socket statistics](https://man7.org/linux/man-pages/man8/ss.8.html), TCP, UDP, numeric, listening, processes
- `/usr/sbin/ufw status` ufw fire wall status (list open ports)
![requirements check](../img/sub_req_check.png)