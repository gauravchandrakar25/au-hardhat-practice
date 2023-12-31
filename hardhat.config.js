require('dotenv').config() 
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli:{
      url: process.env.ALCHEMY_TESTNET_RPC_URL,
      accounts:[process.env.TESTNET_PRIVATE_KEY]
    },
    mumbai:{
      url:process.env.ALCHEMY_TESTNET_RPC_URL_MUMBAI,
      accounts:[process.env.MUMBAI_TESTNET_PRIAVTE_KEY]
    }
  }
};
