---
title: "ISO8583 switch and Elixir lang - intro"
date:   2021-08-27 21:13:30 +0530
author_profile: true
author: Sandesh Soni
read_time: true
comments: true
share: true
related: true
breadcrumbs: true
tags:
- ISO8583
- ISO8583 switch
- elixir
---

ISO8583 is card payments.

Let us try an example.
You have a HDFC bank card (credit card).
You go to petrol pump.
Swipe the card on POS machine.
The petrol pump(merchant) has account with AXIS bank.
The card was VISA.
So a call will be made to VISA with payment amount, card details.

here, the AXIS bank is Aquirer.
VISA is network.

from the card number, VISA can identify BIN number.
And then it identifies card belongs to HDFC bank.
few steps happen here, and transaction.
A message will be sent to merchant a transaction is complete.

ISO8583 is a message format.


I found these Elixir packages and the documentation.
ISO8583 switch Elixir

[ISO 8583hexdocs](https://hexdocs.pm/iso_8583/api-reference.html)
[Package by Zemuldo](https://github.com/zemuldo/iso_8583_elixir)


I will wrote more detailed article in the series.
