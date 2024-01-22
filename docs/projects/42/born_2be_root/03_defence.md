---
sidebar_position: 9
---

# Defense

## How does a virtual machine work and what is its purpose?

### How does a virtual machine work?

A virtual machine (VM) is a software-based emulation of a physical computer. It allows you to run multiple operating systems (OS) on a single physical machine, enabling you to isolate different applications or services from each other.

#### Hypervisor/VM Monitor

The core component that makes virtualization possible is the "**hypervisor**" or "**virtual machine monitor (VMM)**". This is a software layer that sits between the hardware and the operating systems running on the virtual machines. It's job is to control the resources of the host machine and allocates to each VM the resources it needs (memory, CPU...), making sure that these VM's do not interfere with each other.

#### VirtualBox

Is cross-platform virtualization software, which creates and manages (_hypervisor_) "virtual machines".

### What is the purpose of an Virtual Machine?

1. **Isolation:** VMs provide a high degree of isolation between different applications or services running on the same physical hardware. Each VM operates independently, and issues in one VM typically do not affect others.

   - **increased security** by preventing the spread of malware or unauthorized access to other parts of the system.

2. **Resource Utilization:** Multiple VMs can run on a single physical machine, making more efficient use of resources and reducing the need for additional physical servers.

   - lower **hardware costs**, **power consumption**, and a smaller **data center footprint**
   - VM resources can be reallocated based on demand which makes them **flexible and scalable**

3. **Testing and Development:** VMs are widely used for software development and testing. Developers can create virtual environments that closely mimic production systems, making it easier to test applications in various scenarios without affecting the actual production environment.

4. **Legacy Application Support:** VMs allow organizations to run legacy applications that may not be compatible with newer hardware or operating systems. By running older operating systems within VMs, companies can extend the life of critical applications.

5. **Disaster Recovery:** Virtualization facilitates the creation of snapshots and backups of entire VMs. This makes disaster recovery more manageable, as VMs can be easily restored to a previous state in case of hardware failures, data corruption, or other issues.

6. **Cloud Computing:** Virtualization is a fundamental component of cloud computing. Cloud providers use virtualization to create and manage virtual instances for their customers, offering scalable and on-demand resources.

### Disadvantages

- software running on an VM can be less performed than on an physical machine, because of the virtualization in between.
- if the hardware breaks down than all VM's on it are effected

---

## The basic differences between Rocky and Debian?

### Rocky

#### Release Model:

- free and open-source **enterprise-class** Linux distribution
- is based (_binary compatibility with_) the **Red Hat Enterprise Linux (RHEL)** distribution
- aims to provide a **stable and reliable platform for enterprise** use. It is designed to be a downstream, community-supported alternative to RHEL.

#### Package Management:

- Red Hat Package Manager (**RPM**) with the extension "**.rpm**"

#### Package Repositories:

- is compatibility with RHEL repositories, but has **fewer apps than Debian**

#### Target Audience:

- **enterprise users** seeking a stable, free, and RHEL-compatible distribution.

### Debian

#### Release Model:

- free and open-source software
- one of the oldest and most well-established Linux distributions with an large community, a lot of **distributions are based on it**
- provides different versions, with "Stable," "Testing," and "Unstable" (_the newest_)

#### Package Management:

- Debian Package Management (**dpkg**) along with Advanced Package Tool (**APT**) with the extension "**.deb**"

#### Package Repositories:

- has its own repository with **more apps** which are easy to install

#### Target Audience:

- is **versatile** and can be used for a variety of purposes, from desktop systems to servers

---

## The difference between aptitude, apt and what is APPArmor

### difference between aptitude

Aptitude is more powerful in handling complex dependency scenarios, and it provides an interactive interface for package management. For basic package management tasks, either tool can be used interchangeably.

- Aptitude is a high-level package manager while APT is lower level which can be used by other higher level package managers
- Aptitude is smarter and will automatically remove unused packages or suggest installation of dependent packages
- Apt will only do explicitly what it is told to do in the command line

### What is APPArmor?

AppArmor provides **M**andatory **A**ccess **C**ontrol (MAC) security. For example, if an installed application can take photos by accessing the camera application, but the administrator denies this privilege, the application will not be able to access the camera application. If a vulnerability occurs (some of the restricted tasks are performed), AppArmor blocks the application so that the damage does not spread to the rest of the system.

---
