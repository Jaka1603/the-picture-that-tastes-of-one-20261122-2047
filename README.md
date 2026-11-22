# The picture that tastes of one ingredient

[![make.fun](https://make.fun/badge.svg?competition=the-picture-that-tastes-of-one-20261122-2047)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![rank](https://make.fun/rank.svg?competition=the-picture-that-tastes-of-one-20261122-2047)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![reward](https://make.fun/reward.svg?competition=the-picture-that-tastes-of-one-20261122-2047)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)

One ingredient only: **beef**. A thick wagyu steak, already sliced into five
even slices that lean and fan against each other in a dark cast-iron pan —
each slice showing a juicy medium-rare pink interior with fine marbling, the
seared crust dark and even on every outer edge. Melted butter has soaked into
the meat, juices pool naturally in the pan, and a light scatter of tiny flaky
salt crystals rests on the meat. Gentle steam, warm dramatic side light, dark
moody background. One single real moment, nothing pasted on.

## Run

```sh
node main.ts   # writes /output/entry.png (1024×1024 JPEG, ≤ 1 MiB)
```

`main.ts` copies the bundled `steak.jpg` to `/output/entry.png` and verifies
the 1 MiB gate before finishing. No network is used at run time.
