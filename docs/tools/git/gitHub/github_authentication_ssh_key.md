# GitHub authentication with SSH key

Allows the user to authorize them to access their GitHub repository..

---

## What is SSH (Secure Shell Protocol)

The SSH protocol allows the user to connect and authenticate to remote servers and services.

- with an SSH key:
  - connect to GitHub without supplying username and personal access token at each visit
  - access and write data in repositories on GitHub
  - sign commits to GitHub

When you connect via SSH, you authenticate using a private key file on your local machine.
You will need to generate a new private SSH key and add it to the SSH agent. When you set up SSH, you must also add the public SSH key to your account on GitHub before you use the key to authenticate or sign commits.

## Generating a new SSH key and adding it to the ssh-agent

### About SSH key passphrases

When you generate an SSH key, you can add a passphrase to further secure the key. Whenever you use the key, you must enter the passphrase. If your key has a passphrase and you don't want to enter the passphrase every time you use the key, you can add your key to the SSH agent. The SSH agent manages your SSH keys and remembers your passphrase.

### Checking for existing SSH keys

1. Move into your home directory and look for the hidden `.ssh` file:  
   `ls -al ~/.ssh`
2. Check the directory if you already have a public SSH key. By default, the filenames of supported public keys for GitHub are one of the following: `id_rsa.pub` , `id_ecdsa.pub` , `id_ed25519.pub`
3. Either generate a new SSH key or upload an existing key.

- If you don't have a supported public and private key pair, or don't wish to use any that are available, generate a new SSH key.
- If you see an existing public and private key pair listed (for example, id_rsa.pub and id_rsa) that you would like to use to connect to GitHub, you can add the key to the ssh-agent.

### Generating a new SSH key

You can generate a new SSH key on your local machine. After you generate the key, you can add the public key to your account on GitHub.com to enable authentication for Git operations over SSH.

1. Open Terminal, use the following command while substituting in your GitHub email address.  
   `ssh-keygen -t ed25519 -C "your_email@example.com"`  
   _Note: If you are using a legacy system that doesn't support the Ed25519 algorithm, use:_  
   `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`  
   This creates a new SSH key, using the provided email as a label.
   When you're prompted to "Enter a file in which to save the key", you can press Enter to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ssh_keyname with your custom key name.

2. At the prompt, type a secure passphrase.

### Adding your SSH key to the ssh-agent

1. Start the ssh-agent in the background.  
   `eval "$(ssh-agent -s)"`  
   _Depending on your environment, you may need to use a different command. For example, you may need to use root access by running `sudo -s -H` before starting the ssh-agent, or you may need to use `exec ssh-agent bash` or `exec ssh-agent zsh` to run the ssh-agent._

2. Add your SSH private key to the ssh-agent.  
   _If you created your key with a different name, or if you are adding an existing key that has a different name, replace `id_ed25519` in the command with the name of your private key file._  
   `ssh-add ~/.ssh/id_ed25519`

### Add the SSH public key to your account on GitHub.

1. Copy the SSH public key to your clipboard.  
   _If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace._  
   `cat ~/.ssh/id_ed25519.pub`

   - Then select and copy the contents of the id_ed25519.pub file displayed in the terminal to your clipboard

2. Log into your GitHub account:
   1. Open the **Settings / SSH and GPG keys** menu.
   2. Click **New SSH key** or **Add SSH key**.
   - In the "**Title**" field, add a descriptive label for the new key.  
     _For example, if you're using a personal laptop, you might call this key "Personal laptop"._
   - Select the type of key, **authentication key**
   - In the "**Key**" field, paste your public key.
   - Click **Add SSH key**.
   - If prompted, confirm access to your account on GitHub.

### Enabling signed commits.

Signed commits verify that it was really you (_not just your name and email which everyone could fake_) who has done the commit.

#### GitHub set up

1. follow the same steps as in the previous step "Add the SSH public key to your account on GitHub", but instead of selecting the key type **authentication key** you select **signed key**
   - _Note: you need to have two keys, "authentication key" and "signed key"_
2. see [Signing commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) for more information to complete the set up processes
