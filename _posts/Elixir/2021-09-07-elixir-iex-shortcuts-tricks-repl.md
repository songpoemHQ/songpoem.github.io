---
title: "5 iex tricks you should know as an Elixir developer"
author: Sandesh Soni
date:   2021-09-07 10:00:30 +0530
category: Elixir
tags:
- elixir
- iex
- elixir repl
- mix iex
- command line
- productivity
---

These tricks will save your time.
You will no need to type the same thing again and again, in case of a crash and restarting.


1> v
- if you want data of above line, you can simply do `v(-1)`
- for output of any particular line, you can `v(linenumber)`
example:

```elixir
Interactive Elixir (1.11.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> 9
9
iex(2)> 6
6
iex(3)> 12357
12357
iex(4)> v(-1) # give data of iex ( 3 )
12357
iex(5)> v(2) # give data of iex ( 2 )
6
iex(6)> v(-1) # give data of iex ( 5 ) i.e 6
6
iex(7)>
```

2> dot iex dot exs file
iex will check and load for local file in folder as well as global at the root folder.

You can create a `.iex.exs` file with below content.
```
morning_greet = "Hi, how are you?"
weekend_greet = "Hi, have a great weekend"
travel_greet = "happy Weekend"
```
> now, start iex and see what happens

```elixir
➜  watermelon git:(main) ✗ iex -S mix
Erlang/OTP 24 [erts-12.0.3] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [jit]

Interactive Elixir (1.11.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> morning_greet
"Hi, how are you?"
iex(2)> weekend_greet
"Hi, have a great weekend"
iex(3)> travel_greet
"happy Weekend"
iex(4)>
```

3> multiline, add `\`
When copying code from editor and posting in command line, you need to add `\` to the end of the file.


```elixir
iex(8)> "abc" |> String.upcase
"ABC"
iex(9)>  "abc"
"abc"
iex(10)> |> String.upcase
** (SyntaxError) iex:10:1: syntax error before: '|>'

iex(10)>  "abc" \
...(10)> |> String.upcase
"ABC"
iex(11)>
```

4> h

> Quickly find documentation for a function using h key.

```elixir
iex(5)> h Enum.member?

                        def member?(enumerable, element)

  @spec member?(t(), element()) :: boolean()
Checks if element exists within the enumerable.
Membership is tested with the match (===/2) operator.
## Examples
    iex> Enum.member?(1..10, 5)
    true
    iex> Enum.member?(1..10, 5.0)
    false
    iex> Enum.member?([1.0, 2.0, 3.0], 2)
    false
    iex> Enum.member?([1.0, 2.0, 3.0], 2.000)
    true
    iex> Enum.member?([:a, :b, :c], :d)
    false
When not called whithin guards, the in (in/2) and not in (in/2) operators work
by using this function.

```


5> `respawn` and `recompile`.
Whenever you make code updates, if you have iex shell open, instead of closing `ctrl + c` twice and starting iex again, 
you can just do `recompile` and new changes will be loaded.

Happy Coding.



6> New functions `tap` and `then` are introduced in Elixir 1.12.0

The first thought that strikes my mind,
I was indirectly using the `tap` function while `IO.inspect` in pipe.

example:
```elixir
list_of_students
|> with_height_above_ft(6)
|> IO.inspect
```

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




> want to add your trick? mail me