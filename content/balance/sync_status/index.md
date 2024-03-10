---
title: Sync Status
weight: 10
---

At regular intervals, the wallet will 'ping' the server
and request the latest block data. When the wallet has
up to date information, it will simply show the current
block height.

But when it detects that it is behind, it will switch
to "synchronization mode".

{{% notice note %}}
Your transparent funds do not need 
full synchronization.

If you want to abort, simply close and rerun the
app.
{{% /notice %}}

## Synchronization Mode

Synchronization mode is either "Rescan" or "Catchup". The
difference is small. Rescan means that there was no prior
state and the wallet is synchronizing from the start.
"Catchup" is when the wallet processes the recent
blocks that it doesn't have yet.

In Synchronization Mode, the wallet displays a progress bar
and a progress indicator inside of it.

You can cycle through various status reports by tapping
on the indicator.

- Current block / Latest block
- % complete
- Number of blocks left to process
- Time of latest block processed
- Estimated remaining time
- Number of bytes downloaded from server
- Number of note decryptions

## Warp Sync

Ywallet uses the "Warp Sync" algorithm. Unlike other
Zcash synchronization methods, Warp Sync works in 
chunks of blocks. 

A chunk contains several blocks. A block may contain
several transactions. A transaction may contain several 
inputs/outputs.

Warp Sync downloads a (large) group of inputs/ouputs 
before it processes them. Therefore, there will not
be visible process for some time. That's expected as
it means the wallet is collecting data from the server.

Once it has a chunk, it will pass it down to the decrypter
and note management stages. At the same time, it will 
download the next chunk. 

Downloading and processing are carried out in parallel.
But the "pump" has to be primed. 

{{% notice note %}}
The synchronization may take some time to start up
because the wallet may have to download a lot of
blocks from the server.
{{% /notice %}}

Other synchronization methods
work with small chunks and therefore report progress more
frequently. But overall, Warp Sync is usually significantly faster.

## Automatic Catchup

Normally, the wallet will check the server every 10-15 seconds.
But if it notices that it is far behind (more than one month), 
it will *pause* the automatic catchup.

This lets the user take manual action. They can resume the 
synchronization or for example, choose to recover from a backup.
