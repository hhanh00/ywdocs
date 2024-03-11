---
title: Security
weight: 30
---

Unless an account is watch-only, it has the secret keys
needed to perform transactions. Therefore it is important
to keep your computer/phone away from intruders and malware.

YWallet has several security features that *help* you
prevent loss of funds but be aware that when your device
is connected to Internet there is a level of risk that
cannot be avoided.

See [Cold Wallet]({{% relref "coldwallet" %}})
for a way to make transaction while keeping your 
secret keys on a disconnected device.

## Example
- If you use a phone or tablet, use a security PIN
or fingerprint lock. In addition, YWallet can be 
configured to require 
[PIN/fingerprint authentication]({{% relref "security/pin" %}})
before opening the app and/or before sending funds
- If you use a desktop computer, your files could be 
extracted by some malware and uploaded to the hacker's 
server. We recommend using 
[Database Encryption]({{% relref "security/db" %}}) 
to stop the hacker from 
reading your secret keys from the database files
even if they manage to steal them.
