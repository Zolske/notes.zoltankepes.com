---
sidebar_position: 3
---

# What do PTY and TTY Mean?

<!-- _back to:_ [implementation -> requiretty](./02_implementation.md#requiretty)
_source:_ [baeldung -> "What do PTY and TTY mean?"](https://www.baeldung.com/linux/pty-vs-tty#what-is-a-pty)

On the lowest level, most Linux system interactions use a text interface. There are many mechanisms to enable the system to provide as much information as possible at the users’ fingertips. Even before the use of a complex graphical user interface (GUI) with convenient windows and controls, there were command-line interface (CLI) tools to leverage these mechanisms.

## Terminals Types

Terminals are ways to provide input to and get output from a system.

- **Hardware terminal:** i.e., [teletypewriters](https://simple.wikipedia.org/wiki/Teletypewriter), video display unit (VDU)[^vdu]
- **Software terminal:** i.e., virtual TeleTYpe (TTY), which is the main interface of a Linux operating system
- **Software pseudo-terminal:** i.e., PseudoTeletYpe (PTY), which allows emulating a TTY
- **Software terminal emulator:** based on the previous ideas, but usually enhancing them via the actual or CLI-emulated GUI

## What is a TTY?

TTY is an acronym for teletype or teletypewriter. In essence, TTYs are devices that enable typing (type, typewriter) from a distance (tele).

In a modern operating system (OS), the concept applies directly. Linux uses a device file to represent a virtual TTY, which enables interaction with the OS by handling input (usually a keyboard) and output (usually a screen).

While Linux systems can have multiple TTYs, their number is usually limited by the configuration.

Pure TTYs do allow communication, but they don’t provide much flexibility because at least one end of the TTY is (a keyboard, mouse, or another input device via) the kernel. On the other hand, a PTY can be linked to any application on both ends.

## What is PTY?

PTY is an acronym for pseudo-TTY. The name PTY stems from the fact that it behaves like a TTY but for any two endpoints. This minor difference enables multiple PTYs to co-exist within the context of the same TTY.

In fact, both sides of a PTY have a name:

slave, /dev/pts, represented by a file in /dev/pts/#
master, ptm, which only exists as a file descriptor of the process, which requests a PTY
This is where /dev/ptmx, the pseudo-terminal multiplexor device, comes in. Effectively, there are several steps to establish and use a PTY:

A process opens /dev/ptmx
The OS returns a master ptm file descriptor
The OS creates a corresponding /dev/pts/# slave pseudo-device
From this point, slave input goes to the master, while master input goes to the slave
To know the correspondence between a master and slave, we can call the ptsname function.

Basically, a PTY enables bi-directional communication similar to pipes. Unlike pipes, it provides a terminal interface to any process that requires it.

What do we do with this power?

---

[^vdu:]Short for video display unit, VDU is a computing device that allows input from a user and output to a display, like a computer monitor. A VDU consists of a display device and a keyboard and could include a mouse. In the United States, it is sometimes known as a video display terminal or VDT (video display terminal).

--- -->

---

## TTY

<!-- - The words terminal and TTY device are used interchangeably.
- Terminal used to be a physical device that sends characters to the TTY driver.
- The kernel in modern computers emulates the physical terminal device.
- A terminal emulator is as dumb as the physical terminals used to be, it listens for events coming from the keyboard and sends it down to the driver. The difference is that there is no physical device or cable which is connected to the TTY driver. -->

A TTY (**T**ele**ty**pe) terminal session, refers to the interaction between a user and the system through a text-based interface. The term "TTY" is commonly used to describe both physical terminals and virtual terminal emulators.

![tty](./img/tty.png)

- A **seat:** consists of all hardware devices (display, keyboard, mouse ..) assigned to a specific workplace.

  | command                      | description                         |
  | :--------------------------- | :---------------------------------- |
  | `loginctl list-seats`        | list all seats                      |
  | `loginctl seat-status seat0` | list devices assigned to seat seat0 |

- **Terminal Devices:** In Unix-like systems, everything is treated as a file, and terminal devices are no exception. TTY devices are represented as special files in the **/dev directory**, such as **/dev/tty1**, **/dev/tty2**, etc.  
  Physical terminals, like the ones used in the early days of computing, were hardware devices connected to a computer. Today, virtual terminals are software-based emulations of physical terminals. They provide text-based interfaces within graphical environments or directly in text-mode consoles.  
   Users can switch between virtual terminals (and your GUI e.g. Ubuntu) using keyboard shortcuts:

  | command               | description                                               |
  | :-------------------- | :-------------------------------------------------------- |
  | `CTRL` + `ALT` + `F3` | switch to virtual terminal tty3 (F4 = tty4, ... up to F6) |
  | `ALT` + `F4`          | when in virtual terminal mode you can switch to tty4      |
  | `ALT` + `F1`          | switch to the login screen                                |
  | `ALT` + `F2`          | switch GUI (e.g. Ubuntu)                                  |

- **line discipline:** The kernel provides many line disciplines but only one is enabled by default and connected to a serial device. The default one, which provides line editing, is called N_TTY. This allows for editing (the internal buffer) with commands features like backspace, erase word, and clear line, it also handles special characters such as the interrupt character (CTRL + C). Advanced applications like vim and ssh disables these features by putting the line discipline into raw mode, so they can handle all these stuff themselves.

- **TTY driver:** implements session management which will help user to have many processes running at the same time and only interacting with foreground process which his/her input will be redirected to it and only the foreground process will be allowed to send output to the TTY device.

- **TTY Sessions and Multiplexers:** TTY sessions can be managed using multiplexers like "tmux" or "screen". These tools allow users to create multiple terminal sessions within a single TTY, enabling the management of multiple tasks in a single terminal window.

- **Physical Terminals:** e.g. teletypewriters, hard-copy, video display unit (VDU). In the past, physical terminals were dedicated hardware devices that allowed users to interact with mainframe computers. Modern systems typically use virtual terminals or terminal emulators.
