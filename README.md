# time2date

A package to convert between timestamp and date string.

# command

## t2d

Convert timestamp(milliseconds) to date string. Default current time.

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
# simple date format 1: just year/month/day
d2t 2024/10/28 # 1730044800000 (equals: 2024-10-28 00:00:00 depends on your timezone)
```
