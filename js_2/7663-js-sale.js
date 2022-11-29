const CONTRACT_ADDR = "0xdbDCCB8D29F4732cbA7BAd1D6D8D15CEf6Eccd66";
const CONTRACT_STAKING = "0x5Cafc45E2f39d8056a965c17f691B7e394644299";
const CONTRACT_DISC = "0xCADaf82A68284Eb84546E51BE9a3534241553dbA";

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dappMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintDapp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setDappMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerAddLimit","type":"uint256"}],"name":"setMaxPerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountRevealed","type":"uint256"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedUri","type":"string"}],"name":"setUriHidden","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const abi_staking = [{"inputs":[{"internalType":"contract ERC721A","name":"_nft","type":"address"},{"internalType":"contract TokenRewards","name":"_token","type":"address"},{"internalType":"contract Headache","name":"_headacheContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"VIP_KEYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressKeyBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedDogliens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedHeadache","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedKeys","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claimDoglien","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimDoglienEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doglienID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dogliensPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"earningInfo","outputs":[{"internalType":"uint256[1]","name":"info","type":"uint256[1]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headachePerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headache_contract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headache_wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"keysPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintHeadache","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintHeadacheDisc","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintHeadacheEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintKey","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintVipDogliens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintVipHeadache","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setClaimDoglienState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setClaimHeadacheState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costDogliens","type":"uint256"}],"name":"setCostDogliens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costHeadache","type":"uint256"}],"name":"setCostHeadache","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discCost","type":"uint256"}],"name":"setDiscCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountRate","type":"uint256"}],"name":"setDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ID","type":"uint256"}],"name":"setDoglienID","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"setHaContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setHaWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setKeysNormal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setKeysVip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDogliensLimit","type":"uint256"}],"name":"setMaxDogliensPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxHeadacheLimit","type":"uint256"}],"name":"setMaxHeadachePerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_keysPerAddLimit","type":"uint256"}],"name":"setMaxKeysPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setSignatureRequired","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setStakeState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeTime","type":"uint256"}],"name":"setStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signatureRequired","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vault","outputs":[{"internalType":"uint24","name":"tokenId","type":"uint24"},{"internalType":"uint48","name":"timestamp","type":"uint48"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const abi_disc = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CAP_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_capSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var account = null;
var contract1 = null;
var contract2 = null;
var contract3 = null;
var price = null;

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var PM = null;
var DM = null;

const decrementMintAmount = async (e) => {
	var mintAmount = Number(document.getElementById('tokens_amount').value);
	let newMintAmount = mintAmount - 1;
	if (newMintAmount < 1) { newMintAmount = 0; }
	document.getElementById('tokens_amount').value = newMintAmount;
  };
  
const incrementMintAmount = async (e) => {
	var mintAmount = Number(document.getElementById('tokens_amount').value);
	let newMintAmount = mintAmount + 1;
	if (newMintAmount > maxPerTx) { newMintAmount = maxPerTx; }
	document.getElementById('tokens_amount').value = newMintAmount;
  };

//GET DISC BALANCE
const get_disc_balance = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = "0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4"//accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract3 = new web3.eth.Contract(abi_disc, CONTRACT_DISC, {gas: 30000000});
			var disc_balance = await contract3.methods.balanceOf(account).call();

			document.getElementById("disc_balance").innerHTML = "DISC BALANCE: " + String(disc_balance / 1e18).substr(0,10);
			}
  		}
  	return false;
	}
	
//GET KEY BALANCE
const get_key_balance = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = "0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4"//accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract2 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 30000000});
			var key_balance = await contract2.methods.addressKeyBalance(account).call();

			document.getElementById("key_balance").innerHTML = "KEY BALANCE: " + key_balance;
			}
  		}
  	return false;
	}

// MINT KEYS
const mint_key = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	const _mintAmount = document.getElementById('tokens_amount').value;
		if (_mintAmount > 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "MINTING...";
		  	try {
				const web3 = new Web3(window.ethereum);
				contract2 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});
		
				var chAccount = web3.utils.toChecksumAddress(account);
				var addressIndex = signatures.indexOf(chAccount);

			  	if (addressIndex != -1) {
				  	addressSign = signatures[addressIndex + 1];
				  	}
			  	else
				  	{
				  	addressSign = signatures[0];
				  	}

				const value = 0;
				const gas = Math.round( await contract2.methods.mintKey(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 )
				result = await contract2.methods.mintKey(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas})

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
		  	catch(e) 
				{
				alert("Error: " + e.message);
				console.log("Error: ",e);
				document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
				}
	  		}
  		}     
	}

// HEADACHE PUBLIC MINT
const mint_common_headache = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
    	const _mintAmount = document.getElementById('tokens_amount').value;
      	if (_mintAmount > 0) {
        	var result = "";
        	var success = "";
        	document.getElementById("tokens_available").innerHTML = "MINTING...";
        	try {
          		const web3 = new Web3(window.ethereum);
          		contract2 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});
		  
		  		var chAccount = web3.utils.toChecksumAddress(account);
		  		var addressIndex = signatures.indexOf(chAccount);

				if (addressIndex != -1) {
					addressSign = signatures[addressIndex + 1];
					}
				else
					{
					addressSign = signatures[0];
					}

          		const cost = await contract2.methods.cost2().call()
				const discount = await contract2.methods.discountRate().call()

          		const value = ((cost * _mintAmount) / discount)
          		const gas = Math.round( await contract2.methods.mintHeadacheDisc(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 )
          		result = await contract2.methods.mintHeadacheDisc(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas})

          		success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          		}
        	catch(e) 
          		{
          	alert("Error: " + e.message);
          	console.log("Error: ",e);
          	document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
          	}
        }
    }     
}

// HEADACHE VIP MINT
const mint_vip_headache = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  const _mintAmount = document.getElementById('tokens_amount').value;
		if (_mintAmount > 0) {
		  var result = "";
		  var success = "";
		  document.getElementById("tokens_available").innerHTML = "MINTING...";
		  try {
				const web3 = new Web3(window.ethereum);
				contract2 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});

				const cost = await contract2.methods.cost2().call()
			  	const discount = await contract2.methods.discountRate().call()

				const value = ((cost * _mintAmount) / discount)
				const gas = Math.round( await contract2.methods.mintVipHeadache(_mintAmount).estimateGas({value: value.toString(), from: account}) * 1.1 )
				result = await contract2.methods.mintVipHeadache(_mintAmount).send({value: value.toString(), from: account, gas: gas})

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
		  catch(e) 
				{
			alert("Error: " + e.message);
			console.log("Error: ",e);
			document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
			}
	  	}
  	}     
}

// HEADACHE FULL ETH MINT
const mint_full_eth_headache = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  const _mintAmount = document.getElementById('tokens_amount').value;
		if (_mintAmount > 0) {
		  var result = "";
		  var success = "";
		  document.getElementById("tokens_available").innerHTML = "MINTING...";
		  try {
				const web3 = new Web3(window.ethereum);
				contract2 = new web3.eth.Contract(abi_staking, CONTRACT_STAKING, {gas: 3000000});
		
				var chAccount = web3.utils.toChecksumAddress(account);
				var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				  addressSign = signatures[addressIndex + 1];
				  }
			  else
				  {
				  addressSign = signatures[0];
				  }

				const cost = await contract2.methods.cost2().call()

				const value = (cost * _mintAmount)
				const gas = Math.round( await contract2.methods.mintHeadache(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 )
				result = await contract2.methods.mintHeadache(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas})

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
		  catch(e) 
				{
			alert("Error: " + e.message);
			console.log("Error: ",e);
			document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
			}
	  	}
  	}     
}

// CONNECT
const connect = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    account = "0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4"//accounts[0];

    if (accounts.length > 0) {
      	document.getElementById("connect_button").innerHTML = accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) ;

  	  	const web3 = new Web3(window.ethereum);
  	  	contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
		maxSupply = await contract1.methods.maxSupply().call();
      	totalSupply = await contract1.methods.totalSupply().call();
	    const paused = await contract1.methods.paused().call();
	    PM = await contract1.methods.publicMintEnabled().call();
      	DM = await contract1.methods.dappMintEnabled().call();
	    maxPerTx = await contract1.methods.MaxperTx().call();
	    price = await contract1.methods.cost().call();

      	if (paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
	  	else { if (DM) {document.getElementById("phase").innerHTML = "DAPP MINT | MAX " + maxPerTx + " PER WALLET"; }
	  	else {document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER WALLET"; }
	  	}

    	//document.getElementById("tokens_available").innerHTML = "SOLD OUT";
	  	document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "500";
	  	document.getElementById("price").innerHTML = "1 KEY + ETH";
    	//document.getElementById('tokens_amount').value = maxPerTx;
	  	}
		else { document.getElementById("connect_button").innerHTML = "Connect wallet"; }

		await get_disc_balance();
		await get_key_balance();
	}
  return false;
}

document.getElementById('connect_button').onclick = connect;

connect();

document.getElementById('mint_key').onclick = mint_key;
document.getElementById('mint_common_headache').onclick = mint_common_headache;
document.getElementById('mint_vip_headache').onclick = mint_vip_headache;
document.getElementById('mint_full_eth_headache').onclick = mint_full_eth_headache;

const signatures = [
	'0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
	'0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4',
	'0xa91708fe50c1d17cd45fe5136fc70f4dc2e8701635201e9b779bb19d4376f7ca0a768cd38a8bcf3d76cc9874c28358c4ea5a9a73189480f5b52166a640d929e61c'
  ]