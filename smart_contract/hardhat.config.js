
require('@nomiclabs/hardhat-waffle')
 
module.exports = {
    
  solidity: '0.8.0',
  networks: {
    ropsten : {
      url:  'https://eth-ropsten.alchemyapi.io/v2/JyEc2WQTxzlw4gLaafIdFJtVpZvzDU7y',
      accounts: ['c1f4d23dcb4f3fc1c6599a21658822cacc99254a53905343836dafaaf385880d']
    }
  }
}