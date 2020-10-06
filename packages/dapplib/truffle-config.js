require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stove cost outside proud harvest pave army gauge'; 
let testAccounts = [
"0x7ac93d2d55210097cce748a84ba01e8e666046148d704ad40502a0df773e9465",
"0x216e0587f87aac1c2ab829ba5a3d4e5061c6901429be1f56a8f3b9367470b0fb",
"0xfe2fecbf5e9a1d20283f7c06d8f17ecf4d17e11dcb2c960ac7956349f38a701e",
"0x0d14e0b6e1055088ed8d5d8fe9cbb701183bee8ce297938b9f32395e217159ac",
"0xd4951a470abe329f1f4ce1cd6eaae4fa796206c00117ada75975cb3d0a9282bb",
"0x76241a76532b6df09e5616f73c93e2426e113076b8c399bebf273462f0924336",
"0xa01bea87dd726d85108316df49b8c2436b69de2338407a1583cef35e2f503ee8",
"0xf2c2980e8cca9e0e8e6786bb143077e64e3c414d160c24dfeb2eaa79d5345be9",
"0x4f485636b1581b98f527c96998e0a641a68a500e37303840c56febc6c53c77c9",
"0xa5e26e96b89ef7379cb6ddd5537925d41da427e60b502151a65341c163e52aef"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
