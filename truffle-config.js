const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "glory beauty edge art zone life enlist common put lucky repeat mesh";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/6b165dae869a415bbc4a6c1dd99c92ad")
      },
      network_id: 3
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};
