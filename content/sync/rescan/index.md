---
title: Rescan
weight: 10
---

Use Rescan when you want to reset all your accounts
and scan the blockchain data from a given point in
time / height.

This is particularly useful if you have an issue
with your wallet and want to reset it.

The synchronization data is deleted but your
accounts are kept. Then the wallet starts downloading
and scanning blocks from the given height.

If you have multiple accounts, make sure you enter
a height that is lower than the height of the first
transaction (in every account).

{{% notice note %}}
Scanning updates all the accounts at once. If you want
to rescan multiple new accounts, it is much better to 
first, create them all and then rescan one time.
{{% /notice %}}

There was a period of very large blocks from Jul 2023
to Oct 2024. If your wallet was created after this
period, make sure you enter the right height/date.
Otherwise it will spend a lot of time needlessly.

![Rescan](2024-03-09_19-27-43.png)

1. By date
1. By height
