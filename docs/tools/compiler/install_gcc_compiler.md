---
title: install gcc compiler
author: Zoltán Kepes
description: How to install the "gcc" compiler.
hero_image: https://picsum.photos/200
created: Mon, 16 Oct 2023 09:55:49 GMT
updated: Mon, 16 Oct 2023 09:59:13 GMT
words: 291
timeToRead: 1:27
---
# Install the GCC compiler
source: [How to Install GCC Compiler on Ubuntu](https://phoenixnap.com/kb/install-gcc-ubuntu) by *Vladimir Kaplarevic*   

---

The GCC (GNU Compiler Collection) is a free software compiler system capable of compiling several programming languages, including C, C++, Objective-C, and Fortran.

## Install Multiple GCC Versions on Ubuntu
Users can utilize GCC PPAs (Personal Package Archive) to streamline the installation process and install a specific GCC version (or multiple GCC versions).

1. Update the Ubuntu package repository:    
`sudo apt update`
2. Install the software-properties-common package using the following command:    
`sudo apt install software-properties-common`
3. Add the GCC PPA that contains all the versions of the GCC compiler:   
`sudo add-apt-repository ppa:ubuntu-toolchain-r/test`
4. Update the packages list to include the PPA packages:   
`sudo apt update`
5. Use the command below to install a specific version or multiple versions of GCC.   
*For example, to install GCC 12 and GCC 13*, enter:   
`sudo apt install gcc-12 g++-12 gcc-13 g++-13 -y`   
Note: There are no restrictions to the number of GCC versions you can install using this installation method.
6. The "update-alternatives" tool helps users manage multiple GCC versions:  
*Add the GCC 12 alternative to the "update-alternatives" filesystem:*  
`sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-12 12 --slave /usr/bin/g++ g++ /usr/bin/g++-12`   
*Add the GCC 13 alternative to the "update-alternatives" filesystem:*   
`sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-13 13 --slave /usr/bin/g++ g++ /usr/bin/g++-13`   
Note: Replace the GCC version in the example commands (GCC 12 and 13) with the GCC versions installed on your system.
7. Use the update-alternatives tool to switch between installed GCC versions:   
`sudo update-alternatives --config gcc`   
8. Check the current GCC version using the following command:   
`gcc --version`