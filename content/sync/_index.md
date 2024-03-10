---
title: Synchronization
weight: 80
---

`More/Synchronization`

After installation, the wallet starts with no data
from the blockchain/network. 

Synchronization is the process by which the wallet
gets the transaction data and updates its database.

There are two types of information:
- accounts and keys: only you should know that.
- synchronization data: derived from the keys and
the blockchain data.

## Light wallets

The blockchain has hundreds of GB of data. It contains
*all* the transactions of *every* user. Therefore it 
will keep growing larger and larger.

As a *light* wallet, Ywallet is designed to work
on a most devices from low end mobile phones
to powerful desktop computers.

These types of wallets do not download the entire
blockchain, nor do they validate the transactions.

Instead, they work with lightwallet servers
that implement the 
[light client protocol](https://zips.z.cash/zip-0307).

## Light Client Protocol

### Compact Data

Transparent data is removed and t2t transactions
are completely discarded.

Transparent inputs/outputs are removed from the data
returned by the lightwallet servers.

When a client asks for blocks from the light wallet server,
it receives *Compact Blocks* made of *Compact Transactions*.

Shielded data is further trimmed down by removing
the parts that are not necessary for trial decryption
and spending, for ex: memos and zk-proofs.

That leaves ~4% of the initial blockchain data.

### Transparent Data

{{% notice note %}}
The Light Client Protocol does not deal with transparent
inputs/outputs.
{{% /notice %}}

However, not offering a minimal level of support for
transparent bundles is far to user unfriendly.
Therefore, a set of methods were added to the 
Lightwalletd service.

Unfortunately, they do not have enough functionality
to allow for *efficient* handling of transparent data.

Consequently, ywallet does not fully support transparent
transaction *history*.

{{% notice warning %}}
The transaction history does not contain the t2t transactions.
But the wallet shows transparent balance and can spend it.
{{% /notice %}}

## Memos
As mentioned before, the compact blocks do not have the complete
transaction outputs. In particular, memos are pruned.

If the user wants to see them, the wallet needs to retrieve
full transaction data from the server.

To do so for every transaction is extremly bandwidth and 
time consuming. Hence, Ywallet will only request the transactions
that it knows belong to the account after scanning the compact
blocks.

Yet, doing such selective download reveals to the server
which transactions belong to you. The server cannot decrypt
them but it knows you participated.

You can disable this download in the 
[settings]({{% relref "settings/privacy#transaction-details" %}}).

Please note this will also prevent the decryption of outgoing 
destination addresses.

See Also
- [Rescan]({{% relref "sync/rescan" %}})
- [Rewind]({{% relref "sync/rewind" %}})
