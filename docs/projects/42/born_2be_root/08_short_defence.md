---
sidebar_position: 9
---

# Defense Notes

## How does a virtual machine work and what is its purpose?

### How a virtual machine works

- is software which simulates a computer on an real computer
- on it any operating system can be installed which works isolated from the rest
- we use software VirtualBox to create our VM for our project
- it works as "Hypervisor", which runs and allocates the resources to the VM

### What is its purpose?

- to run multiple isolated server on one machine, which safes money (energy, hardware, space, maintenance)
- testing and running software on different OS (for development, legacy programs)
- for disaster recovery and security reasons (checking potential viruses, or risky upgrades)

---

## The basic differences between Rocky and Debian?

### Rocky

- enterprise-ready Linux distribution is commonly used for business servers or workstations.
- based on "Red Hat Enterprise Linux (RHEL)", easy to switch to.
- ten-year support with regular updates
- extra security with better "SELinux" support (tools)
- Red Hat Package Manager (RPM) with the extension ".rpm"

### Debian

- one of the oldest distributions with an large community, (a lot of distributions are based on it)
- easier to install, more documentation and apps available
- Debian Package Management (dpkg) along with Advanced Package Tool (APT) with the extension ".deb"

---

## What is difference between aptitude, apt?

Aptitude is more powerful in handling complex dependency scenarios, and it provides an interactive interface for package management. For basic package management tasks, either tool can be used interchangeably.

- Aptitude is a high-level package manager while APT is lower level which can be used by other higher level package managers.
- Aptitude is smarter and will automatically remove unused packages or suggest installation of dependent packages.
- Apt will only do explicitly what it is told to do in the command line.

---

## What is APPArmor?

AppArmor provides Mandatory Access Control (MAC) security.  
For example, if an installed application can take photos by accessing the camera application, but the administrator denies this privilege, the application will not be able to access the camera application.
