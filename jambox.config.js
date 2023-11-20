const path = require('path');

module.exports = {
  blockNetworkRequests: true,
  forward: {
    'https://local.example.com': {
      target: 'http://localhost:3000',
      paths: ['**'],
      // websocket: true will ensure NextJS can make a WS connection + HMR
      websocket: true,
    },
  },
  stub: {
    '**/*.jpg': { status: 200, file: path.join(__dirname, '200x200.jpg') },
  },
};
