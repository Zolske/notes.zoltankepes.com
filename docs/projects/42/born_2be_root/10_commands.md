---
sidebar_position: 3
---

## Commands

| grep option| explanition |
| :--- | :--- |
| `-c` | count how hany times the line apears |

### tr = translate
*source:* [geeksforgeeks](https://www.geeksforgeeks.org/tr-command-in-unix-linux-with-examples/)
- **syntax:** `tr [OPTION] SET1 [SET2]`
| tr option| explanition | example | Output |
| :--- | :--- |
| `-d` | deletes characters in the first set specified. | `echo "Welcome To GeeksforGeeks" | tr -d W` | elcome To GeeksforGeeks |
| `-c` | except the charactrs in the first set specified. | `echo "my ID is 73535" | tr -cd [:digit:]` | 73535 |
