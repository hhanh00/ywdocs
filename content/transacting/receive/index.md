---
title: Receive
weight: 10
---

To receive funds, you can either give your wallet address
or make a [Payment URI]({{% relref "balance/payment_uri" %}}).

With Zcash, the choice of the address is important because
it determines where the funds will arrive.

Ywallet can show several types of addresses, as described
in the [address]({{% relref "balance/addresses" %}}) section.

In short, 
- if the sender has a wallet that supports 
Unified Addresses, use them.
- if it supports Sapling addresses (`zs`), use that instead.
- finally, if it only supports transparent addresses,
use the `t`-addr.

## See Also

- [Wallet Addresses]({{% relref "balance/addresses" %}})
