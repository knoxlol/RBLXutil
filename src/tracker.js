// ROBLOX VERSION TRACKER BY "kyanlol" ON GITHUB
const fetch = require('node-fetch'); // npm install node-fetch
const { WebhookClient, EmbedBuilder } = require('discord.js'); // npm install discord.js

// cfg
const webhookUrl = 'YOUR_WEBHOOK_URL'; // replace with ur hook url
const checkInterval = 1800000; // default is 30 minutes (ms)

// roblox version endpoints
const windowsVersionUrl = 'https://setup.rbxcdn.com/version';
const macVersionUrl = 'https://setup.rbxcdn.com/macversion';

// initialize webhook client
const webhookClient = new WebhookClient({ url: webhookUrl });

// track the last known versions
let lastWindowsVersion = '';
let lastMacVersion = '';

// function to check for updates
async function checkForUpdates() {
  try {
    // fetch both windows and mac version updates :)
    const [windowsResponse, macResponse] = await Promise.all([
      fetch(windowsVersionUrl),
      fetch(macVersionUrl)
    ]);

    // get the latest version text
    const windowsVersion = await windowsResponse.text();
    const macVersion = await macResponse.text();

    // if windows version changed, log the update
    if (windowsVersion !== lastWindowsVersion) {
      lastWindowsVersion = windowsVersion;
      logUpdate('windows', windowsVersion);
    }

    // if mac version changed, log the update
    if (macVersion !== lastMacVersion) {
      lastMacVersion = macVersion;
      logUpdate('mac', macVersion);
    }

  } catch (error) {
    console.error('error checking for updates:', error);
  }
}

// func to log the upd to the webhook
async function logUpdate(platform, version) {
  const embed = new EmbedBuilder()
    .setTitle(`${platform} roblox player update`)
    .setDescription(`new version: ${version}`)
    .setColor('#000000') // keep color blank or adjust to your liking :0
    .setTimestamp();

  try {
    await webhookClient.send({
      content: `${platform} roblox player has been updated!`,
      embeds: [embed],
    });
    console.log(`${platform} update logged.`);
  } catch (error) {
    console.error('error sending webhook:', error);
  }
}

checkForUpdates();
setInterval(checkForUpdates, checkInterval);

// HOW TO RUN:
// RUN THIS IN YOUR NODE.JS TERMINAL: node tracker.js
// I recomend either self hosting this or hooking it to a server, js credit me lol
