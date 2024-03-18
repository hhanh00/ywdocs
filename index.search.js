var relearn_search_index=[{breadcrumb:"YWallet > Market Insights",content:` The Budget Page has two parts.
At the top, you have a table showing the top addresses you have sent funds to in the past 30 days, At the bottom, you have a chart showing the historical balance of your account (excluding transparent transactions) `,description:"",tags:null,title:"Budget",uri:"/ywdocs/market/budget/index.html"},{breadcrumb:"YWallet > Maya Protocol / Zcash",content:"",description:"",tags:null,title:"Deposit",uri:"/ywdocs/maya/deposit/index.html"},{breadcrumb:"YWallet > Settings",content:` Display amounts in zats or millis. There are 100 000 000 zats per ZEC. Use Custom Send by default Reference Currency Default Memo Currency Use one of the supported FIAT currency or Crypto (BTC, ETH, etc.)
Custom Send Custom Send can be configured to show/hide the fields you want. See View.
`,description:"",tags:null,title:"General",uri:"/ywdocs/settings/general/index.html"},{breadcrumb:"YWallet",content:`Current version: 1.5.4 Platform Link Remarks Android Google Play Store Android APK No dependency on Google Apps iOS App Store Windows ZIP Portable, Just unzip and run Linux AppImage Need GLIB 2.34 Linux Flatpak Requires flatpack runtime Linux Flathub MacOS DMG For both Intel and Apple chips Source Code Github Info The Microsoft Store version is discontinued due to a change of their policy regarding self-custody crypto wallets.
`,description:"",tags:null,title:"Installation",uri:"/ywdocs/installation/index.html"},{breadcrumb:"YWallet > Recovery Tools",content:`The Key Derivation Tool allows you to determine the private keys and addresses at various standard paths.
Transparent and Shielded addresses use different derivation paths. Ywallet is programmed to follow the standards BIP-44 and ZIP-32.
The account index. ZWL increments it for every new shielded address Use External for receive addresses and Internal for change Address Index. ZWL increments it for every new transparent address. It is not used by shielded addresses Toggle between deriving shielded or transparent keys A list of 100 keys starting from the given account index. Add this address as a new account Note If you know which addresses have funds, just create new accounts for them.
`,description:"",tags:null,title:"Key Derivation",uri:"/ywdocs/tools/key_derivation/index.html"},{breadcrumb:"YWallet > Messages",content:" Navigate to the previous/next message and to the previous/next message in the same thread. Threads are messages that share the same subject. Go to the transaction that contains the message. ",description:"",tags:null,title:"Message Details",uri:"/ywdocs/messages/details/index.html"},{breadcrumb:"YWallet > Account Manager",content:`New Enter the account name (required) Choose the crypto Press to create a new account The process should only take a few seconds.
Restore Turn on the restore switch Enter the wallet key Choose the account index. The account index is part of the derivation path. This is NOT the wallet birth height (see below). If you are unsure, leave it at 0 Press to restore the account The account is created but the blockchain data is not rescanned.
Therefore you will not see your balance yet.
Note Usually after an import, the wallet has to rescan older blocks. If you are restoring multiple accounts, it is recommended to rescan after you imported them all because the rescan will process all the accounts simulatenously.
Keys accepted Seed phrase: 12, 15, 18, 24 words + 1 optional password Sapling secret key Sapling viewing key Unified viewing key Transparent private keys are NOT accepted. Use the sweep function to transfer funds from a transparent address.
Birth Height See Rescan.
`,description:"",tags:null,title:"New Account",uri:"/ywdocs/accounts/new/index.html"},{breadcrumb:"YWallet > Security",content:` With Protect Send active, making a payment will require device unlock On Mobile devices, you can also Protect Open. When turned on, launching the app required device unlock. On Desktop, Protect Open is replaced by the Database Encryption which will ask for the password at launch.
`,description:"",tags:null,title:"PIN/Fingerprint",uri:"/ywdocs/security/pin/index.html"},{breadcrumb:"YWallet > Transacting",content:`To receive funds, you can either give your wallet address or make a Payment URI.
With Zcash, the choice of the address is important because it determines where the funds will arrive.
Ywallet can show several types of addresses, as described in the address section.
In short,
if the sender has a wallet that supports Unified Addresses, use them. if it supports Sapling addresses (zs), use that instead. finally, if it only supports transparent addresses, use the t-addr. See Also Wallet Addresses `,description:"",tags:null,title:"Receive",uri:"/ywdocs/transacting/receive/index.html"},{breadcrumb:"YWallet > Synchronization",content:`Use Rescan when you want to reset all your accounts and scan the blockchain data from a given point in time / height.
This is particularly useful if you have an issue with your wallet and want to reset it, but also when you import an old account and want to recover its balance.
The synchronization data is deleted but your accounts are kept. Then the wallet starts downloading and scanning blocks from the given height.
If you have multiple accounts, make sure you enter a height that is lower than the height of the first transaction (of every account).
Note Scanning updates all the accounts at once. If you want to rescan multiple new accounts, it is much better to first, create them all and then rescan one time.
There was a period of very large blocks from Jul 2023 to Oct 2024. If your wallet was created after this period, make sure you enter the right height/date. Otherwise it will spend a lot of time processing these blocks needlessly.
By date By height Note Resetting an account does not make you lose your funds since they are recorded on the blockchain.
Resetting an account means deleting its synchronization data. The balance is reset and the blocks have to be scanned to look for the available funds.
Birth Height The birth height of an account is the block height when the account was created. Better yet, it is the height when the first transaction was received.
By definition, there are no transactions before the birth height and therefore when the account is rescanned, there is no need to scan before it.
Entering the birth height can save you a tremendous amount of time. The value does not have to be exactly the height of the first transaction but it must be before that transaction.
Warning From Jul 2023 to Oct 2024, the Zcash blockchain received an excessively high number of large transactions. If your wallet was created after that period, you should enter a birth height after Oct 2024. It will save you hours or even days.
`,description:"",tags:null,title:"Rescan",uri:"/ywdocs/sync/rescan/index.html"},{breadcrumb:"YWallet > Backup",content:`Saving the seed phrase is the #1 way to save your account. It is compatible with most wallet apps, i.e. you can recover your funds using another wallet than Ywallet.
However, every account has its own seed phrase and you MUST save every seed phrase if you have multiple accounts.
Moreover, the seed phrase saves your account keys but not the synchronizationd data. After you recover, you will have to rescan the blockchain from the account height.
The account height is not part of the seed and ideally should be also saved. In case of doubt, you can always rescan from the first shielded block but it could take much longer than if you used the wallet birth height.
From the seed phrase, the wallet app derives three sets of keys, corresponding to each pool.
You can use the individual keys if your wallet app does not support seed phrases. Otherwise, just keep the seed phrase.
Warning Keys can be recalculated from the seed phrase but the seed phrase cannot be derived from the keys.
Warning Some of the keys are long and do not fit completely in the panel. Make sure you select the entire text or better yet, use the export buttons.
Seed phrase Other keys Export buttons Toggle the backup reminder from the main page `,description:"",tags:null,title:"Seed & Keys",uri:"/ywdocs/backup/seed/index.html"},{breadcrumb:"YWallet > Account Info",content:`At regular intervals, the wallet will ‘ping’ the server and request the latest block data. When the wallet has up to date information, it will simply show the current block height.
But when it detects that it is behind, it will switch to “synchronization mode”.
Note Your transparent funds do not need full synchronization.
If you want to abort synchronization, simply close and rerun the app.
Synchronization Mode Synchronization mode is either “Rescan” or “Catchup”. There is a small difference. Rescan means that there was no prior state and the wallet is synchronizing from the start. “Catchup” is when the wallet processes the recent blocks that it doesn’t have yet.
In Synchronization Mode, the wallet displays a progress bar and a progress indicator inside of it.
You can cycle through various status reports by tapping on the indicator.
Current block / Latest block % complete Number of blocks left to process Time of latest block processed Estimated remaining time Number of bytes downloaded from the server Number of note decryptions Warp Sync Ywallet uses the “Warp Sync” algorithm. Unlike other Zcash synchronization methods, Warp Sync works in chunks of blocks.
A chunk contains several blocks. A block may contain several transactions. A transaction may contain several inputs/outputs.
Warp Sync downloads a (large) group of inputs/ouputs before it processes them. Therefore, there will not be visible process for some time. That’s expected as it means the wallet is collecting data from the server.
Once it has a chunk, it will pass it down to the decrypter and note management stages. At the same time, it will download the next chunk.
Downloading and processing are carried out in parallel. But the “pipeline” has to get work.
Note The synchronization may take some time to start up because the wallet may have to download a lot of blocks from the server.
Other synchronization methods work with small chunks and therefore report progress more frequently. But overall, Warp Sync is usually significantly faster.
Automatic Catchup Normally, the wallet will check the server every 10-15 seconds. But if it notices that it is far behind (more than one month), it will pause the automatic catchup.
This lets the user take manual action. They can resume the synchronization, choose to recover from a backup or rescan from a different height.
`,description:"",tags:null,title:"Sync Status",uri:"/ywdocs/balance/sync_status/index.html"},{breadcrumb:"YWallet > History",content:`Any piece of information from that page can be copied to the clipboard.
Navigate to previous/next transaction Open the block explorer on the current transaction The block explorer can be selected in the settings.
`,description:"",tags:null,title:"Transaction Details",uri:"/ywdocs/history/details/index.html"},{breadcrumb:"YWallet > Maya Protocol / Zcash",content:"",description:"",tags:null,title:"Withdraw",uri:"/ywdocs/maya/withdraw/index.html"},{breadcrumb:"YWallet > Account Info",content:`Unlike other cryptocurrencies, Zcash and Ycash accounts can have several addresses (with different properties).
The Zcash protocol involves a few crypto systems and addresses:
the “traditional” Bitcoin inspired addresses: transparent addresses, the shielded/private addresses. Zcash has developed and improved shielded transactions based on zero-knowledge proofs. At this point, there are three types of private systems: Sprout, Sapling, Orchard. Note Zcash started with Sprout. Then Sapling drastically improved the performance. Finally Orchard eliminated the need for a trusted setup.
These systems are not compatible. But you can make a transaction that moves funds between these systems (i.e. pools) at no cost (besides the small transaction fee).
Nowadays, Sprout is deprecated. Ywallet does not support it.
Keys Since Transparent, Sapling and Orchard are different crypto systems (working with different equations, etc.), a key pair for one system is not valid in another.
Shielded wallets manage distinct key pairs for each pool based on a common seed phrase.
Warning If you have the seed phrase, you can recover all three addresses. But if you only have one of the secret keys, you cannot recover the other ones.
Addresses Usually a key is associated with an address. You can experiment with keys and addresses on a website such as the Mnemonic Code Converter.
That is true for the Transparent and Sapling pools. However, the Orchard pool does not have a dedicated address format. Instead, Orchard uses the Unified Address (UA) format.
A UA is a group (of maybe a single) “receivers”. A receiver is basically the same as a traditional address but in binary form. For example, a UA can contain a Transparent and a Sapling receiver or a Transparent and an Orchard receiver.
Without decoding the UA, there is no way to tell what’s inside, just like you cannot tell what’s inside a ZIP file by looking at its extension.
The advantage is that moving forward, every Zcash address will be a UA. When new pools get added, they will be added as a new receiver type, without changing the UA format.
Note UA do not “magically” upgrade to a new pool. If your UA does not include the receiver for a given pool, it cannot get payments to that pool. However, you can receive on a different pool and then consolidate at a later time.
Display Current Address QR code Address (maybe truncated when too long). Use the button to copy the full address to the clipboard Type of the address shown Buttons to copy to clipboard and create a payment URI Carousel page indicator By swiping through the address caroussel, Ywallet shows:
the main address. That’s the address type that it configured in the settings. By default, it is the UA with all the receivers. a diversified address of the same type. See below for more explanation. a legacy sapling address. For use with other apps that haven’t migrated to UA yet. a UA with only the Orchard receiver. For use when you want to receive funds as Orchard. a transparent address. For use with other apps that haven’t migrated to shielded & UA yet. Diversified Addresses Shielded addresses are not unique for a given key pair. In fact, there are billions of valid addresses for the same key. They are all equivalent and unlinkable. Given two addresses, there is no easy way to determine whether they come from the same key or not.
Diversified Addresses are designed to be used when you want to give distinct addresses for the same account.
Funds coming into any of these diversified addresses can be decrypted with the same key. Therefore, if you use one address or a million diversified addresses, the synchronization time is the same.
But if you were to use a million different addresses (like the ones created by ZecWallet), the synchronization would take a million times longer.
Ywallet generates diversified addresses based on time, just like an authenticator code.
Every few seconds, you will get a new diversified address.
The old addresses are still usable.
Note Since diversified addresses only work with shielded receivers, the diversified addresses do not contain a transparent receiver even when the main address does.
`,description:"",tags:null,title:"Addresses",uri:"/ywdocs/balance/addresses/index.html"},{breadcrumb:"YWallet > Backup",content:`App Backup is a compressed & encrypted copy of the application database.
It contains all the account and the synchronization data.
By restoring from an app backup, you will only have to catchup from the point the backup was made.
This can be a huge time saver, especially if you have several accounts.
Generating a keypair The backup is encrypted using the AGE software suite. Before you can make a backup, you need to generate a keypair. This can be done using the AGE tools or in Ywallet.
Tap the button (1). The app will generate a NEW key pair.
Warning You need to save BOTH the encryption key and the secret key.
Technically speaking, the encryption key can be derived from the secret key but not the other way round. However, it is simpler to just save both of them.
Once you return to the previous page, the secret key will NOT be available anymore. You MUST save it before.
Save/Restore Enter the encryption key and select an output file Enter the secret key and open a file Note On desktop, you need to remove the database encryption before making an app backup.
If the decryption is successful, you have to close and restart the app for it to take effect.
Manual Restoration The app backup can be recovered without Ywallet by following these steps:
Decrypt the AGE file using age or rage unzip the result open the database files with SQL Lite 3+ `,description:"",tags:null,title:"App Backup",uri:"/ywdocs/backup/app/index.html"},{breadcrumb:"YWallet > Security",content:` Use this form to enter a new password or change the current one. To remove the password, enter a blank password as the new password.
The database files will remain encrypted on disk.
Warning If you forget your database password, you will not be able to open the app. You will need to delete the app data and recover from backup!
`,description:"",tags:null,title:"Database Encryption",uri:"/ywdocs/security/db/index.html"},{breadcrumb:"YWallet",content:` Press the “New Account” button to get started (whether it is your first time or you already have an old account you want to restore).
Disclaimer Please read the disclaimer then check every box to enable the check mark button.
The app will move to the creation of the first account.
Next Steps New Account Security Select Server Themes Info For maximum privacy, consider running your own server. It is the only way to be 100% sure that the server operator does not collect tracking information.
`,description:"",tags:null,title:"Getting Started",uri:"/ywdocs/getting_started/index.html"},{breadcrumb:"YWallet > Account Manager",content:`More/Notes
This page shows the unused shielded notes received. Transparent notes (UTXO) are not managed and will not show up. For more info, see Synchronization.
For the most part, notes are automatically selected when making payments. However, you can exclude some notes. Of course, this will reduce the spendable balance.
Height Amount / Pool. The color indicates the pool of the note Date/Time Invert the selection `,description:"",tags:null,title:"Notes",uri:"/ywdocs/accounts/notes/index.html"},{breadcrumb:"YWallet > Market Insights",content:` The chart takes values from the Binance exchange in near real-time. The lowest granularity is 1 minute per candle and can go up to 1 month.
Candle width Chart A candle has the open, high, low, and close price for a given interval and is either green or red based on whether the close price is greater or lower than the open price.
`,description:"",tags:null,title:"Price Chart",uri:"/ywdocs/market/price/index.html"},{breadcrumb:"YWallet > Settings",content:` Protect Open and Send with the device lock screen Minimum Privacy Level. Transaction below this level are blocked and need user confirmation to override Fetch transaction details for memo and outgoing addresses Hide/Show the account Balance on the Main Account Page Minimum Number of Confirmations before a note can be spent Encrypt the database with a password (only available on Desktop. Mobile devices always encrypt the db) Transaction Details Getting the transaction details reveals your transaction ids to the remote server. The actual content of the transaction is hidden.
`,description:"",tags:null,title:"Privacy",uri:"/ywdocs/settings/privacy/index.html"},{breadcrumb:"YWallet > Synchronization",content:`Use Rewind when you want to rollback the synchronization data to a previous point and then make the wallet catch up from there.
Rewinding deletes the synchronization data after the given date/height.
This is useful if you notice an anomaly with your wallet that happened after a certain height. If you think your wallet was OK prior to that point, you can try rewinding to it and see if your issue is resolved.
Normally, rewinding is not necessary unless you are restoring an old wallet.
Example You have a wallet created in 2023 that is now fully synced. You import a new seed phrase from a wallet from Jan 2024.
If you rescanned from Jan 2024, the first wallet data from 2023-2024 would be lost. You could rescan from 2023 but that would redownload the data 2023 that you already have processed.
The best solution is to rewind to Jan 2024, the data from that date is downloaded again but not any data from 2023.
Note The wallet can only be rewound to a previous checkpoint.
Warp Sync works in chunks of blocks. A checkpoint is made at the end of every chunk.
By Date Date Switch to checkpoints Notice that some dates are not available. There were no checkpoints on these dates, probably because the app was not active then.
By Checkpoint `,description:"",tags:null,title:"Rewind",uri:"/ywdocs/sync/rewind/index.html"},{breadcrumb:"YWallet > Transacting",content:`To make a simple payment, you will need to know:
the recipient address, the amount. Press the send button at the bottom right corner of the account info page to open up the Send Form.
Addresses are practically never entered manually. They are either copy/pasted, scanned, or taken from the contact list.
The buttons (3) on the right side of the address will respectively:
open the QR scanner ask you to pick up a contact ask you to select one of the accounts (for account to account transfers) Note If the address is shielded, an encrypted memo can be added to the transaction.
Custom Send Custom Send can be activated for every send by switching it on in the settings, or by long pressing on the arrow button (the Floating Action Button)
It gives you more control over the transaction.
There are many parameters that can be used in this mode.
Address
QR Code Scanner
Address Book / Contacts
Accounts
Pools from the Receiver Address. This field appears if you use a unified address that has more than one receiver. It allows you to disable some of the recipient receivers. This field shows up if the address has more than one receiver after filtering by Receivers in the settings.
Pools from your account. Select the pools from your wallet that you want to use. This allows you to force a type of transaction that the wallet would not do otherwise. Ex: t2t even if you have shielded funds.
Amount in Crypto
Amount in Fiat / Reference Currency
Amount Slider
Max Amount
Net/Gross Amount Switch. When off, the input amount is the amount that the recipient gets, i.e. the sender (you) pays the fees. Otherwise, the fee is deducted from the amount received and the recipient gets slightly less than the amount specified.
Include Reply-To Switch (see next section)
Subject
Body
Info These fields can be enabled/disabled in the settings.
Memo A memo can contain up to 512 bytes of arbitrary data. YWallet defines a format that optionally has the sender’s address and a subject.
This format is only recognized by Ywallet. If the recipient uses another wallet, they will have the raw memo.
Warning Unless you include your address in the memo, the recipient will not be able to reply to you.
You can set the type of address to include in the Settings.
`,description:"",tags:null,title:"Send",uri:"/ywdocs/transacting/send/index.html"},{breadcrumb:"YWallet > Recovery Tools",content:`Sweep funds works with either
a seed phrase and will scan a range of addresses or a single transparent private key Then select the destination of the funds, Either
Your current account, into one the pools Or to any address (this appear when no pools are selected) You can only sweep transparent addresses and all the available funds are collected.
`,description:"",tags:null,title:"Sweep Funds",uri:"/ywdocs/tools/sweep/index.html"},{breadcrumb:"YWallet",content:`Balance
This page shows information about your selected account. To switch between accounts, use the Account Manager
Synchronization Status Address(es) Balance Send Button The button/message “Backup Missing” is a reminder that you have not visited the Backup Page yet. Tap on it to go to Backup by Seed.
`,description:"",tags:null,title:"Account Info",uri:"/ywdocs/balance/index.html"},{breadcrumb:"YWallet > Account Info",content:` Balance in the currently selected address/pool Equivalent in fiat or Crypto reference currency , as selected in the settings, Funds available in the other pools The border is only shown when you have funds in the other pools and indicates that the balance displayed in the center is not your total balance.
Your total balance is affected by your note exclusion too.
`,description:"",tags:null,title:"Balance",uri:"/ywdocs/balance/balance/index.html"},{breadcrumb:"YWallet",content:`Unless an account is watch-only, it has the secret keys needed to perform transactions. Therefore it is important to keep your computer/phone away from intruders and malware.
YWallet has several security features that help you prevent loss of funds but be aware that when your device is connected to the Internet there is a level of risk that cannot be avoided.
See Cold Wallet for a way to make transaction while keeping your secret keys on a disconnected device.
Example If you use a phone or tablet, use a security PIN or fingerprint lock. In addition, YWallet can be configured to require PIN/fingerprint authentication before opening the app and/or before sending funds If you use a desktop computer, your files could be extracted by some malware and uploaded to the hacker’s server. We recommend using Database Encryption to stop the hacker from reading your secret keys from the database files even if they manage to steal them. `,description:"",tags:null,title:"Security",uri:"/ywdocs/security/index.html"},{breadcrumb:"YWallet > Maya Protocol / Zcash",content:"",description:"",tags:null,title:"Swap From ZEC",uri:"/ywdocs/maya/swap_from/index.html"},{breadcrumb:"YWallet > Transacting",content:`The Transaction Report gives you a summary of the transaction BEFORE it gets signed and broadcasted to the network.
Warning This is your final opportunity to check that everything is alright before the transaction becomes irreversible.
Output section. This shows every address you are sending funds to, by address and amount. If you are sending to a unified address, you can see what receiver was chosen. Summary of the source of funds by pool. Change of value of the pools after the transaction. The protocol hides the actual amount in and out of the shielded pools but the net change is disclosed. This information is commonly called the turnstile The transaction fee. The fee is public information The privacy level. See below Press to create an unsigned/cold transaction Press to sign and send the transaction If your device does not have the secret key, you can only create a cold transaction.
The data displayed in the theme primary color are public.
Privacy Level Depending on the recipient addresses, the amounts and the notes available in your wallet, the transaction can have different levels of privacy.
For instance, if you send to a transparent address and your wallet only has transparent funds, the transaction will be t2t and fully public, just like with Bitcoin. These transactions have “VERY LOW” privacy.
A transaction has one of the following levels of privacy:
VERY LOW: transparent to transparent LOW: shielded to transparent MEDIUM: shielded to shielded but with some non negligible going through the turnstiles HIGH: shielded to shielded with only fees disclosed Info Ywallet will always make the transaction with the highest level of privacy possible considering the recipient addresses, the amounts and the notes available.
You can set a minimum level of privacy. If a transaction cannot be made that matches or exceeds that level of privacy, you will have a warning message and the transaction will not be made unless you decide to override.
`,description:"",tags:null,title:"Transaction Report",uri:"/ywdocs/transacting/report/index.html"},{breadcrumb:"YWallet > Settings",content:` Show Messages as a Table, a List or based on the device orientation Show Transaction History as a Table, a List or based on the device orientation Show Unspent Notes as a Table, a List or based on the device orientation Custom Send Open the field selection page for the Custom Send.
`,description:"",tags:null,title:"View",uri:"/ywdocs/settings/view/index.html"},{breadcrumb:"YWallet > Settings",content:` The Anti-Spam filter excludes the processing of large transactions that occurred during the spam period of 2023-2024. Calculate the fee automatically using ZIP-317 rules (highly recommended). You transaction may get stuck if the fees are too low Server Ping each server and get the latency URL of the block explorer Receivers included in the main address Receivers included in the reply-to address (used when you decide to include your address in a message) Receivers used when sending to a UA. See below Spam Filter Note To take full advantage of the spam filter, also connect to one of the Zcash Infra servers
Server If you run your own Lightwalletd server, you can enter its URL.
Explorer Choose one of the preconfigured block explorer or enter a custom URL.
Receivers For example if you only select Orchard and send to a UA that has Transparent, Sapling & Orchard receivers, only the Orchard receiver will be used
`,description:"",tags:null,title:"Coin",uri:"/ywdocs/settings/coin/index.html"},{breadcrumb:"YWallet > Account Info",content:` A payment URI is a pre-filled payment slip. The sender can scan the QR code or input the payment URI in their wallet (if their wallet supports them) and the payment information is automatically filled.
To create a payment URI, enter:
the address. You can swipe through the different types of address the amount in ZEC or the amount in the reference currency. It will be converted to ZEC automatically A memo. Only shielded addresses support memos. The payment URI updates automatically as you input the information.
If you want to save it as an image, tap the QR button below the QR code.
Note Payment URIs are similar to invoices.
`,description:"",tags:null,title:"Payment URI",uri:"/ywdocs/balance/payment_uri/index.html"},{breadcrumb:"YWallet > Maya Protocol / Zcash",content:"",description:"",tags:null,title:"Swap To ZEC",uri:"/ywdocs/maya/swap_to/index.html"},{breadcrumb:"YWallet",content:`Besides checking your balance, making transactions is the bread and butter of any crypto wallet…
`,description:"",tags:null,title:"Transacting",uri:"/ywdocs/transacting/index.html"},{breadcrumb:"YWallet",content:`Contacts
Contacts is an address book that stores names and addresses.
Note Each account has its own address book but the Contacts page combines all the contacts.
When you create a new contact, it is saved in the current account.
List of contacts Button for adding a new contact Button to save contacts to the blockchain Saving your contacts to the blockchain makes a special self-transaction that contains your unsaved contacts. You only have to pay the miner’s fee.
When a wallet is restored, the contacts are reloaded along with the balance.
If you store a unified address, the wallet will recognize a transaction made to any of its receivers.
`,description:"",tags:null,title:"Contacts",uri:"/ywdocs/contacts/index.html"},{breadcrumb:"YWallet > Settings",content:" Choose dark/light variant Predefined color schemes ",description:"",tags:null,title:"Theme",uri:"/ywdocs/settings/theme/index.html"},{breadcrumb:"YWallet",content:`History
This is your transaction history.
It can be displayed in table or list layout.
List Table The table format shows more information and is better suited for larger screen.
You can also sort the columns by clicking on the column headers.
The layout can be selected in the settings
Clicking or tapping on a transaction will navigate to the transaction details.
Warning Transactions that do not involve any shielded input/output, i.e t2t or z2t from an external payer will NOT appear in your history. Your account balance includes the transparent funds at the first index.
The server does not send t2t transactions. z2t transactions are sent but they don’t have shielded incoming funds.
Ywallet retrieves the transparent balance using a separate API call that does not require synchronization.
`,description:"",tags:null,title:"History",uri:"/ywdocs/history/index.html"},{breadcrumb:"YWallet",content:`Messages
With transactions, you can have memos or messages.
Messages are your transaction memos shown in a more friendly way. Like transactions, they can be organized as a list or as a table.
List Table If you have a contact in your address book with the matching address, Ywallet will display the contact name instead of the address.
Also, the list shows your message as a chat. However, some of the messages may not have a known sender.
Clicking or tapping on a message will navigate to the corresponding transaction.
`,description:"",tags:null,title:"Messages",uri:"/ywdocs/messages/index.html"},{breadcrumb:"YWallet",content:`More/Pools
Currently there are three pools or types of ZEC:
transparent sapling orchard The last two are shielded.
Funds from any pool are fungible. In other words, you can make a transaction that uses funds from any pool, and pays to any pool. There is no financial difference between them, like there is no difference between the 1 USD note and the 1 USD coin.
However, it does not mean that they have the same properties. Transparent ZEC are synchronized nearly instantly whereas shielded ZEC require block scanning, trial decryption, etc. but are private.
Therefore, you may want to move funds from one pool to another by making a transaction from your account to itself. The protocol does not distinguish between self-transactions and other types of transactions. You will need to pay the fee as usual.
One way to move funds is to simply enter your wallet address as the recipient but this does not give you granual control on the operation.
The Pool Transfer Page offers several specific options for this use case.
The current funds in each of the pools The source pool of the transfer The destination pool of the transfer The amount sent in crypto The amount sent in the reference currency A memo The Max amount of an output note. For example, if you send 11 ZEC and set a max amount of 5, the transfer will create 2 notes of 5 ZEC and 1 note of 1 ZEC. Use the “Max amount” option to pre-split your notes so that you don’t end up having to wait for the confirmation of the change.
`,description:"",tags:null,title:"Pools",uri:"/ywdocs/pools/index.html"},{breadcrumb:"YWallet",content:`More/Synchronization
After installation, the wallet starts with no data from the blockchain/network.
Synchronization is the process by which the wallet gets the transaction data and updates its database.
There are two types of information:
accounts and keys: only you should know that. synchronization data: derived from the keys and the blockchain data. Light wallets The blockchain has hundreds of GB of data. It contains all the transactions of every user. Therefore it will keep growing larger and larger.
As a light wallet, Ywallet is designed to work on most devices, from low end mobile phones to powerful desktop computers.
These types of wallets do not download the entire blockchain, nor do they validate the transactions.
Instead, they work with lightwallet servers that implement the light client protocol.
Light Client Protocol Compact Data When a client asks for blocks from the light wallet server, it receives Compact Blocks made of Compact Transactions.
They only contain the shielded data. t2t transactions are completely discarded. Transparent inputs/outputs are removed from the data too.
Shielded data is further trimmed down by removing the parts that are not necessary for trial decryption and spending, for ex: memos and zk-proofs.
That leaves ~4% of the original blockchain data.
Transparent Data Note The Light Client Protocol does not deal with transparent inputs/outputs.
However, not offering a minimal level of support for transparent bundles is far too user unfriendly. For example, users would not be able to shield or unshield their funds if they need to work with an exchange that does not support shielded Zcash (most of them). Therefore, a set of methods were added to the Lightwalletd service to provide some transparent ZEC support.
Unfortunately, they do not have enough functionality to allow for efficient handling of transparent data.
Consequently, YWallet does not fully support transparent transaction history.
Warning The transaction history does not contain the t2t transactions. But the wallet shows transparent balance and can spend it.
Memos As mentioned before, the compact blocks do not have the complete transaction outputs. In particular, memos are pruned.
If the user wants to see them, the wallet needs to retrieve the full transaction data from the server.
To do so for every transaction is extremly bandwidth and time consuming. Hence, YWallet will only request the transactions that it knows belong to the account after scanning the compact blocks.
Yet, doing such selective download reveals to the server which transactions belong to you. The server cannot decrypt them but it knows you participated.
You can disable this download in the settings.
Please note this will also prevent the decryption of outgoing destination addresses.
See Also
Rescan Rewind `,description:"",tags:null,title:"Synchronization",uri:"/ywdocs/sync/index.html"},{breadcrumb:"YWallet",content:`More/Accounts
The Account Manager is where you add/edit/delete accounts.
Switch Account To change the current account, tap on its name.
New See new account
Edit/Delete Long press on an account name to enter edit mode. Then you will have the option to rename or delete it.
Note The current account cannot be deleted unless it is the only account remaining. You need to switch to another account.
At the moment, there is no way to reorder accounts.
`,description:"",tags:null,title:"Account Manager",uri:"/ywdocs/accounts/index.html"},{breadcrumb:"YWallet",content:`Maintaining a safe backup is extremely important.
Warning Without a backup, your funds are irremediably LOST in case of a hardware or software failure.
Ywallet supports two types of backups:
By seed phrase or secret key By saving an encrypted copy of its database Each has its own benefits and drawbacks. But you should at least have one type of backup.
`,description:"",tags:null,title:"Backup",uri:"/ywdocs/backup/index.html"},{breadcrumb:"YWallet",content:`See Cold Storage.
The Cold Wallet feature uses two devices running Ywallet.
the first device has the viewing key and is connected to the Internet. It can synchronize and report the account balance, but it cannot spend the second device has the secret key but is disconnected from the Internet. It can sign transactions prepared on the first device By keeping the secret key on a device that remains offline permanently, the account cannot be hacked by remote access. It offers the highest level of security.
Note that this is different from having a second device that has your secret key as a backup. Because as soon as you active it, the device comes online and may get compromised.
Info The key aspect of a cold wallet setup is that the second device can sign transactions multiple times while remaining offline.
Step 1 - Make the unsigned transaction The transaction is prepared normally. Once it reaches the transaction report page, use the cold button.
Step 2 - Sign the transaction The wallet (1) now shows an animated QR code. The unsigned transaction is too large to fit in a single QR code, therefore it is split into a sequence of images.
On the offline device, open the sign menu: More/Sign. Make sure that you have selected the account that holds the secret key.
If your devices are close to each other and they can scan the QR codes, scan them until the progress bar fills up.
Otherwise, save the transaction to a file and transfer the file to the second device (via USB drive for example).
Progress bar QR code camera Open unsigned transaction file Step 3 - Broadcast the signed transaction Then after the transaction is signed, repeat the same process to bring the signed transaction back to the first device. It will be shown as animated QR codes on the offline device.
Select More/Broadcast on the online device and scan or load the signed transaction.
Congratulations, you have made a cold wallet transaction.
`,description:"",tags:null,title:"Cold Wallet",uri:"/ywdocs/coldwallet/index.html"},{breadcrumb:"YWallet",content:`In this section, you will find charts and tables related to your account transaction history and the value of the wallet.
Budget Market Prices `,description:"",tags:null,title:"Market Insights",uri:"/ywdocs/market/index.html"},{breadcrumb:"YWallet",content:`MultiPay allows you to create transactions with more than one recipient.
To use it, start by opening the MultiPay Page. Then,
Add Recipients, this will open the Send Page or the Custom Send Page The current recipients will appear here. If you need to delete an item, long press on it then press the delete button Finish up by pressing the send button. You’ll navigate to the Transaction Report as usual.
Note When using MultiPay, it is not possible to restrict the source of the funds to a given set of pools.
`,description:"",tags:null,title:"MultiPay",uri:"/ywdocs/multipay/index.html"},{breadcrumb:"YWallet",content:`The Recovery Tools help you import accounts from other wallet apps. They require some knowledge of the key derivation mechanism.
Here is a brief recap on the topic.
Transparent Wallet Let’s consider a typical Zcash transparent wallet. It supports multiple currencies, all under the same seed phrase.
Derivation Path From a given seed phrase, you can derive lots of keys using a set of rules and a “path”.
A path looks like a directory path except that each component is an integer.
Knowing the seed phrase and the path, the wallet applies the derivation rules and computes a key pair. Since the derivation path is also standardized, the seed phrase is usually enough information for restoring an account.
But things are not so simple…
Transparent wallets will use more than one key pair (i.e. one address). Due to their lack of privacy, it is standard practice since the early days of Bitcoin, to avoid reusing an address.
The wallet would generate many key pairs and aggregate the funds received on any of these addresses into the account balance.
Address Index This is achieved by using a derivation path that has the last component be the “address index”. Your wallet keeps track of the current address index and increments it whenever you need a new address.
However, when you restore your seed phrase on a new device, there is a problem. How does it know what indices where used?
It does not. It has to scan addresses (which is not the same thing as scanning blocks).
It will derive the first address (at index 0) and check whether it has transactions. If it does, the wallet increments the address index and tries with the second address (at index 1), and so on so forth until it starts getting addresses with no transactions.
At that point, the wallet considers how many consecutive addresses do not have any transaction. It will not stop at the first one because you may have unused addresses. But if there is a large gap (let’s say 40), then it is likely the end of the used addresses.
A transparent wallet can execute this scan quickly because checking whether an address has transactions is fast. The server has prepared a database with all the active addresses.
Info If you have a transparent wallet that you want to bring into Ywallet, use Sweep Funds
Shielded Wallet Now, let consider a shielded wallet like ZecWallet Lite.
ZWL extends the same functionality to shielded addresses. You can request a new shielded address at any time and the wallet keeps a current address index for transparent addresses and another for shielded addresses.
But the huge difference with transparent addresses is that checking whether an address has transactions is VERY time consuming. Essentially, the wallet has to trial decrypt every address independently, because they have different keys (unlike diversified addresses).
When the blockchain was small, scanning multiple shielded addresses was hardly an issue.
But when the blockchain grew by 100 times (due to some heavy spamming), it was a serious challenge to scan even a single address.
Therefore having a wallet automatically recover the address index for a shielded wallet is practically impossible.
Ywallet does not make it easy to create new addresses like ZWL. There is no button to “Add a new shielded address”.
But if you need to recover an account from ZWL that has multiple shielded addresses, you can but you need to find the address indices yourself.
In early 2024, there are already ~70 million notes to try to decrypt. If you have 10 shielded addresses, that makes it 700 million trial decryptions. An average phone can perform around 10 000 decryptions per second.
Info If you have a shielded account that has multiple addresses, use the Key Derivation Tool
Recovery from Private Keys If you have the private keys, things are much easier.
There are only two kinds of Zcash keys:
Transparent private keys. They begin with K or L. Use Sweep Funds Sapling private keys. They begin with secret-extended-key-main. Import the key as a new account. Then rescan as indicated `,description:"",tags:null,title:"Recovery Tools",uri:"/ywdocs/tools/index.html"},{breadcrumb:"YWallet",content:"",description:"",tags:null,title:"Settings",uri:"/ywdocs/settings/index.html"},{breadcrumb:"YWallet",content:`This document serves both as an introduction to the integration project of Zcash/ZEC into Maya Protocol (MP) and a technical feasibility study. In the first, we describe the architecture of MP and the workflows for deposit/withdraw and swap.
Next, we’ll discuss how to add ZEC as a new chain which will allow the creation of the liquidity pool ZEC.
We aim to have transparent & shielded ZEC available both as a source and a destination of a swap.
We’ll use Bitcoin as a starting point since ZEC data model and implementation are closely related ( at least for the transparent addresses).
We’ll also discuss how shielded ZEC can be added.
The code accompanying this document can be found at zcash-dev
Overview of Maya Protocol DEX MP is a Decentralized Exchange. The main use case is to exchange one crypto currency for another. There are multiple cryptos supported, among which we have Bitcoin, Ethereum, etc.
The goal of the project is to add Zcash, i.e. ZEC, so that any user can exchange (swap) ZEC for any currency that MP supports (or vice-versa).
Traditionally, one would have to use the services of an exchange like Binance. But these exchanges require KYC and hold your funds. They are called centralized exchanges (CEX).
CEX Users of a CEX place buy or sell orders on the platform. The platform continuously attempts to match buy and sell orders on their price. When it happens, a trade is made and currency is exchanged between the participants.
Liquidity Pools A DEX such as MP does not work with orders. Instead they use a mechanism based on liquidity pools.
Every trading pool, for example ZEC, is associated with two assets. Let’s say ZEC and BTC. This allows a user to swap ZEC for BTC.
Note The assets are not merged between pairs. BTC in the ZEC pool is not the same as BTC in the ETH pool.
Liquidity providers can contribute funds into any of the pools by sending to the vault. To indicate their intent, a memo must be attached to the transaction.
In the smoke tests, this action is shown as
PROVIDER-1 => VAULT ADD:ZEC.ZEC:PROVIDER-1 2.50000000 ZEC.ZECThis adds 2.5 ZEC from the user “PROVIDER-1” into the pool ZEC.
PROVIDER-1 => VAULT ADD:ZEC.ZEC:PROVIDER-1 1,000.00000000 MAYA.CACAOThis add 1000 CACAO to the ZEC pool.
Note The pool is named as <chain>.<asset>. For Zcash that has a single asset, we use ZEC.ZEC for simplicity. It could be ZCASH.ZEC too.
Swaps To make a swap, a user sends one type of currency to the vault and receives the other type of currency in exchange. The system determines dynamically the exchange rate based on the amount (= depth) in each of currency of the swap for the given pool.
We denote a swap as
USER-1 => VAULT SWAP:MAYA.CACAO:USER-1 1.00000000 ZEC.ZECUser 1 sent 1 ZEC to the MP vault and wants to receive CACAO in return.
Memos As you can see, in addition to the sender/receiver/amount of the transaction, the memo plays an important role in specifying the purpose.
Note In a real memo, the aliases such as “USER-1” is replaced by an address.
Components Now let’s move to the components of MP that makes this possible in a decentralized and permission-less way.
Like every decentralized crypto project, there are many nodes, i.e. computers that run the same set of software. The nodes maintain a common state that varies between project but is always eventually persisted in a blockchain.
For Bitcoin, the state is the amount of BTC associated with addresses (or output scripts). Users make transactions that (if correct) modify the state by moving funds from one address to another.
In MP, the common state is the amount in the pools which should track the funds deposited and swapped. (And also information to track the liquidity providers)
A transaction would add/remove liquidity, or swap assets. Consensus is reached when enough (67%) of the validating nodes agree on the transaction.
Maya blockchain The MP blockchain is the persistent ledger of every state change in the MP pools. For example, if someone swaps by doing
USER-1 => VAULT SWAP:MAYA.CACAO:USER-1 1.00000000 ZEC.ZECIt wil be written in the MP blockchain. Therefore swaps are not encrypted.
Warning If a swap between BTC and ZEC uses a shielded address, the ZEC transaction will be shielded on the Zcash blockchain and the recipient address and amounts are hidden.
However, the swap is also recorded on the MP blockchain and the address and amounts are in clear there.
The MP blockchain uses the Tendermint blockchain engine.
Info Tendermint employs a Byzantine Fault Tolerance algorithm, which allows the network to reach consensus even if some of the nodes (less than 33%) act maliciously or are faulty.
Asguard Vault The vault is where the pools keep the funds. Vaults use threshold signatures for spending and therefore their public address is a combination of the signing entities. They rotate frequently. The system will automatically migrate funds from one vault to the next.
It is important that users sent funds to the current vault or their funds will be lost.
A vault is an address. It is not a process or a node. There is a single public key that is then encoded in various chains.
In other words, the vault address for Bitcoin and Zcash have the same public key and public key hash.
Note Currently, the currencies use the same elliptic curve (secp256k1) and the same signing algorithm (ECDSA).
This is a requirement that Zcash fulfills as long as we use the transparent pool.
MayaNode Mayanode is the client to the MP blockchain. It is where the logic for protocol is implemented. Each node runs the mayanode software. It exposes a REST interface and is a client to the MP blockchain.
Mayanode is chain agnostic and operates on the grounds that all currencies work essentially the same way, i.e. when you exchange 1 ZEC for BTC, it does not matter what ZEC and BTC are. The only important factors are the pool depth (and other pool state).
Therefore in the Mayanode code, there is no chain specific code. There is just the list of chain codes that the MP supports
Adding ZEC Note ZEC must be added to the list of supported chains in support_chains_xxxnet_vxxx.go)
Bifrost Bifrost is a program that runs along with the mayanode and interfaces with the crypto currency blockchains like BTC, ETH, etc.
It has chain client code that communicates with the chain nodes.
For example, in the case of Zcash, we would have
sequenceDiagram zcashd ->> zcash_client: observe zcash network zcash_client ->> bifrost: wallet, tx parsing bifrost ->> mayanode: pool event Info The zcash_client is a program that bridges the fullnode zcash client zcashd with bifrost.
There are several functionalities that were not included in zcashd that bitcoind has. They are going to be emulated by the zcash_client.
Moreover, the RPC that the bifrost chain client uses are bitcoin specific and don’t work with shielded addresses.
Note There is a single instance of the bifrost serving all the chains. It is written in Go.
Adding ZEC The chainclient code is in pkg/chainclients
loadchains client key_sign_wrapper signer tss_signable type ChainClient interface { SignTx(tx stypes.TxOutItem, height int64) ([]byte, []byte, error) BroadcastTx(_ stypes.TxOutItem, _ []byte) (string, error) GetHeight() (int64, error) GetAddress(poolPubKey common.PubKey) string GetAccount(poolPubKey common.PubKey, height *big.Int) (common.Account, error) GetAccountByAddress(address string, height *big.Int) (common.Account, error) GetChain() common.Chain OnObservedTxIn(txIn types.TxInItem, blockHeight int64) Start(globalTxsQueue chan stypes.TxIn, globalErrataQueue chan stypes.ErrataBlock, globalSolvencyQueue chan stypes.Solvency) GetConfig() config.BifrostChainConfiguration GetConfirmationCount(txIn stypes.TxIn) int64 ConfirmationCountReady(txIn stypes.TxIn) bool IsBlockScannerHealthy() bool Stop() }and the BlockScanner interface
// BlockScannerFetcher define the methods a block scanner need to implement type BlockScannerFetcher interface { // FetchMemPool scan the mempool FetchMemPool(height int64) (types.TxIn, error) // FetchTxs scan block with the given height FetchTxs(height int64) (types.TxIn, error) // GetHeight return current block height GetHeight() (int64, error) }Bitcoin The logic is very similar to Bitcoin. The methods can be separated into 3 groups:
block and transaction: GetHeight, FetchTxs, GetChain, etc. wallet and addresses: GetAccount, GetAccountByAddress, GetAddress. zebrad will not have an embedded wallet. These will have to be emulated in zcash-client eventually signing Signing transactions is more complex than normal because MP uses threshold signatures (TSS). We’ll discuss them later.
Transparent ZEC Transparent ZEC works pretty much the same way as Bitcoin. We don’t foresee major difficulty working with them. The main issue is that Zcash stayed with legacy addresses (Base58 Type 1 for Bitcoin), whereas the code uses bech32 p2wkh segwit addresses. This affects address generation obviously but also signatures.
Shielded ZEC Shielded ZEC adds two more complications:
Sending from zaddr is anonymous. Therefore there is no way to return the funds if something is wrong with the transaction. For instance, sending from zec to the vault without a memo would lead to unrecoverable funds. Note This cannot be prevented at the Zcash protocol level. Anyone can send funds to any address as long as the transaction is valid. It just happens that in this case the funds would end up in the MP vault. However wallets are expected to follow the MP protocol and include a return address in the memo or always use transparent funds.
Sending to zaddr is encrypted. The observers must be able to decrypt the outputs in order to verify that the outgoing payment is completed successfully. This can be achieved by:
deriving an “output viewing key” from the vault public key use it when building the output before signing have the validators derive the same OVK use that OVK to decrypt the output Note The OVK is the BLAKE-2b of the pubkey with personalization string “mayaprotocol-ovk”
TSS As stated before, signing transactions from the vault require the participation of multiple signers. They are clients to the MP blockchain and only sign transactions that have verified.
They have a share of the secret key and if 2/3 of them provide a valid signature, the signatures can be combined to form a valid transaction. At no point can anyone reconstruct the vault secret key.
The TSS algorithm is implemented in the tss-lib, so we don’t need to change that since Zcash also uses ECDSA on the same EC.
However, we have to provide the SIGHASH, i.e. the message to be signed.
Zcash transactions use a different algorithm than Bitcoin for calculating the sighash.
The current MP code (in Bifrost), the transaction is formed by selecting inputs from UTXOs and outputs from the swap definition. Then the library BTCD builds the unsigned transaction and derives the sighash.
That is to say, the logic that resides in bitcoind to build transactions from the wallet cannot be used because bitcoind does not support threshold signatures. It only supports multisigs.
As a result, this is performed by the chain client in signer.go
With Zcash, the algorithm for SIGHASH is completely different than Bitcoin.
It is documented in ZIP-225 and ZIP-244
Therefore, the transaction definition will be sent to the zcash-client which will return the sighash and the transaction parts.
It also responsible for the generation of the zero knowledge proofs.
BTCD BTCSuite is the go library used by btcd, btcd is an alternative full node bitcoin implementation written in Go.
Note There are no golang library for the low level protocol components of zcash. The code is written in Rust only.
This is another reason for the zcash-client bridge.
Smoke Tests The smoke tests use python versions of the chain client and a simulator for the mayachain.
We need to add zcash.py to the chain clients, define the account aliases, add Zcash to the smoke tests script and to the test transactions.
Docker & Deployment zcashd has a fairly high deprecation rate. Every 6 months, node operators will have to deploy a new version. The docker image can be found on a hub. We need to include it in the docker compose file and create a zcash service that also has the zcash-client.
This is similar to the deployment of other chains such as LTC, DOGE, etc.
The difference is the addition of the zcash-client but that could be made part of the zcash docker image.
`,description:"",tags:null,title:"Maya Protocol / Zcash",uri:"/ywdocs/maya/index.html"},{breadcrumb:"YWallet",content:"",description:"",tags:null,title:"Categories",uri:"/ywdocs/categories/index.html"},{breadcrumb:"YWallet",content:"Save Copy the QR code to the clipboard Save the QR code as a PNG image file Scan ",description:"",tags:null,title:"QR",uri:"/ywdocs/qr/index.html"},{breadcrumb:"YWallet",content:"",description:"",tags:null,title:"Tags",uri:"/ywdocs/tags/index.html"},{breadcrumb:"",content:`YWallet is the most advanced and fastest Crypto Wallet for Zcash and Ycash.
Please use the Navigation Menu to read this documentation.
`,description:"",tags:null,title:"YWallet",uri:"/ywdocs/index.html"}]