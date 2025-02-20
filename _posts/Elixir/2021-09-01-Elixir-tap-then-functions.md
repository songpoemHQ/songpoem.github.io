---
title:  "When and how to use Elixir tap and then functions."
date:   2021-09-01 10:13:30 +0530
published: false
author_profile: true
author: Sandesh Soni
category: Elixir
tags:
- elixir
- syntax
- tap
- then
- when
published: false
---


New functions `tap` and `then` are introduced in Elixir 1.12.0

The first thought that strikes my mind,
I was indirectly using the `tap` function while `IO.inspect` in pipe.

example:
```elixir
list_of_students
|> with_height_above_ft(6)
|> IO.inspect
```



