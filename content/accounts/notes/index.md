---
title: Notes
weight: 20
---

`More/Notes`

This page shows the unused shielded notes received.
Transparent notes (UTXO) are not managed and will not show up.
For more info, see
[Synchronization]({{% relref "sync#transparent-data" %}}).

![Notes](2024-03-10_14-17-02.png)

For the most part, notes are automatically selected
when making payments. However, you can exclude some
notes. Of course, this will reduce the spendable balance.

1. Height
1. Amount / Pool. The color indicates the pool of the note
1. Date/Time
1. Invert the selection

## UTXO

Like every coin based on the Bitcoin model, wallets 
in zcash are made of individual notes that are indivisible
before spending.

When you make a transaction, you *consume* existing
notes from your wallet and *create* new ones. Some go to the recipient; others come back to you
as change.

This behavior is similar to real-world money, where
coins and bills are indivisible and exchanged
between parties.

However, cryptocurrencies based on Proof of Work
have another particularity: Transactions are never
absolutely *final*. They are finalized only from a probabilistic
point of view. As blocks get mined and added to the blockchain,
the number of confirmations on a transaction increases, and the chances of having it reversed decreases.
When it reaches a point where the user considers the risk acceptable, they consider the transaction fully confirmed. Since this is subjective, Ywallet has a [setting]({{% relref "settings/privacy" %}})
for it (by default, 3 blocks). Before that, the transaction outputs are not available for spending.
