---
title: Recovery Tools
weight: 130
---

The Recovery Tools help you import accounts
from other wallet apps. They require some
knowledge of the key derivation mechanism.

Here is a brief recap on the topic.

## Transparent Wallet

Let's consider a typical Zcash transparent wallet.
It supports multiple currencies, all under the same
seed phrase.

## Derivation Path

From a given seed phrase, you can derive lots of keys
using a set of rules and a "path".

A path looks like a directory path except that
each component is an integer.

Knowing the seed phrase and the path, the wallet
applies the derivation rules and computes a key pair.
Since the derivation path is also standardized, the
seed phrase is usually enough information for restoring
an account.

But things are not so simple...

Transparent wallets will use more than one key pair (i.e. 
one address). Due to their lack of privacy, it is
standard practice since the early days of Bitcoin,
to avoid reusing an address.

The wallet would generate many key pairs and 
aggregate the funds received on any of these addresses
into the account balance.

## Address Index

This is achieved by using a derivation path that has
the last component be the "address index".
Your wallet keeps track of the current address index
and increments it whenever you need a new address.

However, when you restore your seed phrase on a new
device, there is a problem.
How does it know what indices where used?

It does not. It has to scan addresses (which is not
the same thing as scanning blocks).

It will derive the first address (at index 0) and check
whether it has transactions. If it does, the wallet increments
the address index and tries with the second address (at
index 1), and so on so forth until it starts getting
addresses with no transactions.

At that point, the wallet considers how many *consecutive*
addresses do not have any transaction. It will not stop
at the first one because you may have unused addresses.
But if there is a [large gap]({{% relref "tools/sweep#gap" %}})
(let's say 40), then it is likely
the end of the used addresses.

A transparent wallet can execute this scan quickly
because checking whether an address has transactions
is fast. The server has prepared a database with
all the active addresses.

{{% notice info %}}
If you have a transparent wallet that you want to bring
into Ywallet, use 
[Sweep Funds]({{% relref "tools/sweep" %}})
{{% /notice %}}

## Shielded Wallet

Now, let consider a shielded wallet like ZecWallet Lite.

ZWL extends the same functionality to shielded addresses.
You can request a new shielded address at any time
and the wallet keeps a current address index
for transparent addresses and another for shielded addresses.

But the huge difference with transparent addresses is
that checking whether an address has transactions
is *VERY* time consuming. Essentially, the wallet
has to trial decrypt every address independently,
because they have different keys (unlike diversified addresses).

When the blockchain was small, scanning multiple 
shielded addresses was hardly an issue.

But when the blockchain grew by 100 times (due to some
heavy spamming), it was a serious challenge to scan
even a single address.

Therefore having a wallet automatically recover
the address index for a shielded wallet is practically
impossible.

Ywallet does *not* make it easy to create new
addresses like ZWL. There is no button to "Add a new 
shielded address".

But if you need to recover an account from ZWL that
has multiple shielded addresses, you can but you 
need to find the address indices yourself.

In early 2024, there are already ~70 million notes
to try to decrypt. If you have 10 shielded addresses,
that makes it 700 million trial decryptions.
An average phone can perform around 10 000 decryptions
per second.

{{% notice info %}}
If you have a shielded account that has multiple
addresses, use the 
[Key Derivation Tool]({{% relref "tools/key_derivation" %}})
{{% /notice %}}

## Recovery from Private Keys

If you have the private keys, things are much easier.

There are only two kinds of Zcash keys:
- Transparent private keys. They begin with K or L. Use
[Sweep Funds]({{% relref "tools/sweep" %}})
- Sapling private keys. They begin with secret-extended-key-main.
[Import]({{% relref "accounts/new" %}})
the key as a new account. Then rescan as indicated
