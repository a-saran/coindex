const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API key'.green + ' https://nomics.com',
        validate: (input) => input === '' ? 'This value is required'.red : true
      }
    ]);

    const key = keyManager.setKey(input.key)

    if(key) {
      console.log('API key set'.blue)
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log('Current API key: ', key.yellow)
      return key;

    } catch (err) {
      console.log(err.message.red)
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log('Key removed'.red)

    } catch (err) {
      console.log(err.message.red)
    }
  },
}

module.exports = key;