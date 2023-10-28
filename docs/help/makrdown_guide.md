---
keyword: markdown
sidebar_position: 1
tags:
  - markdown guide
  - style
---

# Markdown Guide

This guide covers only the extended markdown features, not the basics.

---

## Tabs

```markdown title="markdown"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

### Syncing tab choices

Note that doing this will persist the choice in localStorage and all `<Tab>` instances with the same groupId will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced.

```
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>
```

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>

---

## Code blocks

### title

```markdown
'''js title="string"
```

### line highlighting

#### highlighting with comments

| syntax                                | explanation                                   |
| ------------------------------------- | --------------------------------------------- |
| `// highlight-next-line`              | highlight only the next line                  |
| `// highlight-start // highlight-end` | highlight everything between the two comments |

_Supported commenting syntax:_

| style      | syntax                     |
| ---------- | -------------------------- |
| C-style    | `/*` ... `*/` and `//` ... |
| JSX-style  | `{/*` ... `*/}`            |
| Bash-style | `#` ...                    |
| HTML-style | `<!--` ... `-->`           |

#### highlighting with metadata string

`'''jsx {1,4-6,11}`  
_line 1, 4 till 6 and 11_

---

### Line numbering

`'''jsx showLineNumbers`

---

## Admonitions

If you use Prettier to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content.

```
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

### Specifying title

```
:::note Your Title

Some **content** with _Markdown_ `syntax`.

:::
```

:::note Your Title

Some **content** with _Markdown_ `syntax`.

:::

---

## Table of contents heading level

By default, this table only shows h2 and h3 headings, you can customize the minimum and maximum heading level — either per page or globally.

```
---
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 5
---
```

---

## Images

Create a `img` folder in the location of your document to store the images. This folder is not displayed in the sidebar menu.  
`![Alt text](./img/zoltankepes_logo.png)`  
![Alt text](./img/zoltankepes_logo.png)

---

## Markdown links

There are two ways of adding a link to another page: through a URL path and a file path.

```markdown
- [URL path to another document](./installation)
- [file path to another document](./installation.mdx)
```

URL paths are unprocessed by Docusaurus, and you can see them as directly rendering to `<a href="./installation">`, i.e. it will be resolved according to the page's URL location, rather than its file-system location.

---
