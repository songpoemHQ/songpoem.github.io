---
title:  "Message passing in Elixir processes - part 2"
date:   2021-08-17 10:13:30 +0530
author_profile: true
author: Sandesh Soni
category: elixir
tags:
- otp
- message passing
- mailbox
- elixir
- syntax
---

### when terminal hangs waiting for a message in OTP

Yesterday I attended an Elixir meetup where they were demonstrating how we send a message and receive it using receive block.
This demo was shown referring to Documentation.
During demo I saw a screen which was hanged because no message received.
To continue, presentor pressed `ctrl + c` twice and forcefully stopped the process and started iex again.

In this post we see more advance part of message passing.
When terminal hangs waiting for message, how to send a message to that process.

This is my journey about what all I tried and the learnings.


![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-1.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-2.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-3.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-4.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-5.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-6.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-7.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-8.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-9.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-10.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-11.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-12.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-13.png)

Now let us again make it wait for messages


![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-14.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-15.png)
![Elixir OTP process message passing]({{site.baseurl}}/assets/images/message-passing-elixir-opt-2/message-passing-16.png)


This might be a little confusing,
let me try to create a Video recording that will be more easy to understand.


