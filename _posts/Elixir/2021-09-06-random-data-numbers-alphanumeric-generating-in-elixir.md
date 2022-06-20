---
title: "How to Generate random string in elixir?"
author_profile: true
author: Sandesh Soni
category: Elixir
tags:
- elixir
- alphanumeric string
- random Data
- generator
date:   2021-09-07 10:13:30 +0530
published: true
---

Recently I was building an app for Banking.
There was a need of dummy data to play around.

So I played around a few functions and sharing my learnings.
I prefer to avoid any external library.

```elixir
:random.generate_uniform(9999)
```

generates a random number from 1 to 9999.

I needed a four digit number,
so I went with the
```elixir
Enum.random(1000..9999)
```
This gives us any random rumber in above range, so its 4 digit.

Above functions are for numbers.
What if we need a alphanumeric string?

I used the following
```elixir
:crypto.strong_rand_bytes(10)
```
it will generate a string with length 10, but the problem is, it also has special characters like `-` or `=`.


also, it is a bitstring and we need to convert it into a string.
```elixir
:crypto.strong_rand_bytes(10) |> Base.encode64(padding: false)
```

and the results are
```elixir
iex(9)> :crypto.strong_rand_bytes(10) |> Base.encode64(padding: false)
"Q+XhptjdPfc9ng"       # <<<------ notice the + sign
iex(10)> :crypto.strong_rand_bytes(10) |> Base.encode64(padding: false)
"dQv0bPYSXFrd4A"
iex(11)> :crypto.strong_rand_bytes(10) |> Base.encode64(padding: false)
"pq+uTlVgLEHvdg" # <<<------ notice the + sign
iex(12)>
```

Watch this place to find out what did I finally choose for a random alphanumeric string.
You can mail me your best answer.


You can find the implemented code here. Just playing around.
[A Teller app](https://github.com/PaperToApp/TellerService/blob/main/lib/watermelon/banking/data_generator.ex)


references:

[An answer on Elixir Forum](https://elixirforum.com/t/generating-alphanumeric-strings-for-permalinks/11540/6)

[gist by Ahmad Shah, a randomizer](https://gist.github.com/ahmadshah/8d978bbc550128cca12dd917a09ddfb7)