# time2date

A package to convert between timestamp and date string.

# command

## t2d
Convert timestamp(seconds) to date string. Default current time.
```bash
# example
t2d 1634644944000 # 2021-10-19T12:02:24.000Z
t2d # 2024-10-27T15:49:15.830Z
```
## d2t
Convert date string to timestamp. Default current time.
```bash
# example
d2t 2021-10-19T12:02:24.000Z # 1634644944000
# show current timestamp
d2t # 1730044124788
```
