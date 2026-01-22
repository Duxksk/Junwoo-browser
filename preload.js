const blockedDomains = [
    'doubleclick.net',
    'googlesyndication.com',
    'adservice.google.com',
    'pagead2.googlesyndication.com'
];

const { session } = require('electron');

session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    for (const domain of blockedDomains) {
        if (details.url.includes(domain)) return callback({ cancel: true });
    }
    callback({});
});
