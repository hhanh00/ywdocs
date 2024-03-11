---
title: New Account
weight: 10
---

## New

![New](2024-03-06_00-44-30.png)

1. Enter the account name (required)
1. Choose the crypto
1. Press to create a new account

The process should only take a few seconds.

## Restore

![Restore](2024-03-06_00-48-03.png)

1. Turn on the restore switch
1. Enter the wallet key
1. Choose the account index. 
The account index is part of the derivation path. This is *NOT* the wallet
birth height. If you are unsure, leave it at 0
1. Press to restore the account

The account is created but the blockchain data is not 
[rescanned]({{% relref "sync/rescan" %}}).

Therefore you will not see your balance yet.

{{% notice note %}}
Usually after an import, the wallet has to 
[rescan]({{% relref "sync/rescan" %}}) older blocks.
If you are restoring multiple accounts, it is recommended
to rescan *after* you imported them all
because the rescan will process all the accounts simulatenously.

{{% /notice %}}

## Keys accepted

- Seed phrase: 12, 15, 18, 24 words + 1 optional password
- Sapling secret key
- Sapling viewing key
- Unified viewing key

Transparent private keys are *NOT* accepted. Use the sweep function
to transfer funds from a transparent address.
