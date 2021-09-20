require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember attitude inflict drip flip topic'; 
let testAccounts = [
"0x410a8f92c9ef9d25c6da0291a5939c6203429e602d2ff1528d8e7ddfbdfc69c1",
"0x39d232e00934874e020bc25470c759d6eb1074fa2272e42e158a3034765530ae",
"0xcec19445532c4dc9a3c3b23a6f0e919c5a9b0e4f804a8d8dac0e5cec571b13fd",
"0x544de7853739bac8b924732cd4df40ac62b12cdd0a1cbaa2d5b12e597d7f9bfa",
"0x1c6e79f65bb7f7799b05d481c0e565328a472040532de39c0d63915d2bd19ce9",
"0x90fc6bca92ad517dac7c93c8fe1db8076b4bf133492e4c3ecf3a8f90dd942a0b",
"0xce9598853aacde5d8fe1579ad3d8cded40fd82c305e3bc27626ac794251a34c4",
"0x4391b6806a20b78e0ba542d9bc4856e449e83a4d19479bd101f91fd00cb18f3f",
"0x703ac9c30164ca169c5197304da64a191e015289c4685f42a124afec147eda0e",
"0x2f317553ae040448eedd3969f7e75a94208be5db56556843cc9649f255a49167"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

