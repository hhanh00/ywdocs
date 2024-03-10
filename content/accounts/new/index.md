---
title: New Account
weight: 10
---

## New

![New](2024-03-06_00-44-30.png)

1. Enter the account name (required)
1. Choose the crypto
1. Press to create a new account

The process should only take a few seconds at most.

## Restore

![Restore](2024-03-06_00-48-03.png)

1. Turn on the restore switch
1. Enter the wallet key
1. Choose the account index (if you are unsure of what this is, leave it at 0)
1. Press the restore the account

{{% notice note %}}
Usually after an import, the wallet has to 
[rescan]({{% relref "sync/rescan" %}}) older blocks.
If you are restoring multiple accounts, it is recommended
to rescan *after* you have imported them all.
A rescan will process every account simulatenously.

{{% /notice %}}

## Keys accepted

- Seed phrase: 12, 15, 18, 24 words + 1 optional password
- Sapling secret key
- Sapling viewing key
- Unified viewing key

Transparent private keys are *NOT* accepted. Use the sweep function
to transfer funds from a transparent address.

