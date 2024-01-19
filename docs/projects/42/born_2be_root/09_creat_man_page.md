---
sidebar_position: 9
---

# Create A simple Man Page

_source:_ [cyberciti](https://www.cyberciti.biz/faq/linux-unix-creating-a-manpage/)

## Custom Man Page Location

- open the **/etc/man.config** file and add the location of your man page:  
   `MANPATH /usr/local/bin`
- **MANPATH** is the keyword followed by the path which should be in the "environment variable" PATH (echo $PATH)

## Create a Page

```text showLineNumbers title="zoltan"
.\" This is just a comment for the document.
.TH man 8 "19 January 2024" "1.0" "Zoltans man page"
.SH NAME
Zoltans Man Page
.SH SYNOPSIS
A little template for a simple man page.
.SH DESCRIPTION
This is just an simple example of how a simple custom made man page can look like.
.SH AUTHOR
Zolan Kepes (zoltan.the.kepes@gmail.com)
```

- **line 1:** **.\"** comment for the document, is not appearing in final version
- **line 2:** **.TH** macro introduces a the manual page (e.g., set man page title and section).
- **line 2:** **.SH** are the headers, followed by the text on the next line.
