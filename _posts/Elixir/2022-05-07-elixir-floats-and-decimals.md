---
title: "play some displaying Money in Elixir"
tags:
- elixir
- decimals
- float
- roundoff
- money
category: Elixir
author: Sandesh Soni
date: 2022-05-07 10:00:00 + 0530
published: false
---


I am solving an Exercise that needs money to be rounded to nearest 0.05. And Display in a readable format.
I played around few functions.
Here are the things I wish to highlight.

There was a need to display money to two decimals.
First I was trying without using any outside library.
```
iex(1)> Float.to_string(1.50)
"1.5"
iex(1)> :erlang.float_to_binary(1.50, decimals: 2)
"1.50"
```

Now I am using package `Decimanl`

```
iex(1)> d = Decimal.new("1.50")
#Decimal<1.50>
iex(2)> d = Decimal.new("1.492")
#Decimal<1.492>
iex(3)> Decimal.round(d, 2)
#Decimal<1.49>
iex(4)> Decimal.round(d, 2) |> Decimal.to_string
"1.49"
```



