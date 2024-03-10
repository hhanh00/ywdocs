---
title: Send
weight: 20
---

To make a simple payment, you will need to know:
1. the recipient address,
1. the amount.

Press the send button at the bottom right corner
of the account info page to open up the Send Form.

![Simple Send](2024-03-07_14-02-22.png)

Addresses are practically never entered manually.
They are either copy/pasted, scanned, or taken 
from the contact list.

The buttons (3) on the right side of the address
will respectively:
- open the [QR scanner]({{% relref "qr#scan" %}})
- ask you to pick up a [contact]({{% relref "contacts" %}})
- ask you to select one of the accounts (for account
to account transfers)

{{% notice note %}}
If the address is shielded, an encrypted memo can be added to the transaction.
{{% /notice %}}

## Custom Send

Custom Send can be activated for every send by switching it on
in the [settings]({{% relref "settings/general#custom-send" %}})

It gives you more control over the transaction.

There are many parameters that can be used in this mode.

![Custom Send](2024-03-07_20-27-05.png)

1. [Address]({{% relref "" %}})
1. [QR Code Scanner]({{% relref "balance/addresses" %}})
1. [Address Book / Contacts]({{% relref "contacts" %}})
1. [Accounts]({{% relref "accounts" %}})
1. Pools from Receiver Address. This field appears
if you use a unified address that has more than
one receiver. It allows you to *disable* some of the 
recipient receivers. This field shows up if the
address has more than one receiver after filtering
by 
[Receivers]({{% relref "settings/coin#receivers" %}}) in the settings.

1. Pools from Sender. Select the pools from *your*
wallet that you want to use. This allows you to
force a type of transaction that the wallet would 
not do. Ex: t2t even if you have shielded funds.
1. Amount in Crypto
1. Amount in Fiat / [Reference Currency]({{% relref "settings/general#currency" %}})
1. Amount Slider
1. Max Amount
1. Net/Gross Amount Switch. When off, the input amount 
is the amount that the recipient gets, i.e. the 
sender (you) pays the fees. Otherwise, the fee
is deducted from the amount received and the recipient
gets slightly less than the amount specified.
1. Include Reply-To Switch (see next section)
1. Subject
1. Body

{{% notice info %}}
These fields can be enabled/disabled in the
[settings]({{% relref "settings/view#custom-send" %}}).
{{% /notice %}}

## Memo

A memo can contain up to 512 bytes of arbitrary data.
YWallet defines a format that optionally has
the sender's address and a subject. 

This format is *only* recognized by Ywallet. If the
recipient uses another wallet, they will have the
raw memo.

{{% notice warning %}}
Unless you include your address in the memo,
the recipient will not be able to reply to you.
{{% /notice %}}
