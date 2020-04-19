const KeyManager = require('../lib/KeyManager');
const cryptoApi = require('../lib/CryptoApi');

const check = {
  async price(cmd) {
    try {
      keyManager = new KeyManager();

      const key = keyManager.getKey();

      const api = new cryptoApi(key);

      const priceData = await api.getPriceData(cmd.coin, cmd.cur);
      console.log(priceData)
    } catch (err) {
      console.error(err.message.red);
    }
  },
}

module.exports = check;