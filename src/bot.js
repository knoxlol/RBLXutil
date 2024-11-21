// ROBLOX VERSION BOT BY "kyanlol" ON GITHUB.
const { Client, GatewayIntentBits, EmbedBuilder, REST, Routes } = require('discord.js'); // npm install discord.js
const fetch = require('node-fetch');

// bot
const tkn = 'YOUR_BOT_TOKEN'; // replace this w/ your bot's token
const onboot_msg = 'hello world!'; // what you want the console to log when your bot goes online

// endpoints for versions
const windowsversion = 'https://setup.rbxcdn.com/version';
const macversion = 'https://setup.rbxcdn.com/macversion';

// init
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// commands
const commands = [
  {
    name: 'winversion',
    description: 'Get the latest version of Roblox Windows Player',
  },
  {
    name: 'macversion',
    description: 'Get the latest version of Roblox Mac Player',
  },
  {
    name: 'help',
    description: 'Get a list of available commands',
  }
];

const rest = new REST({ version: '10' }).setToken(tkn);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
    
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(onboot_msg);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!winversion') {
    try {
      const response = await fetch(windowsversion);
      if (!response.ok) {
        throw new Error(`HTTP error! Try again later :/`);
      }
      const data = await response.text();

      const embed = new EmbedBuilder()
        .setTitle('Roblox Windows Player Version')
        .setDescription(`The latest Roblox Windows Player version is: ${data}`)
        .setColor('#000000'); 

      message.reply({ embeds: [embed] });

    } catch (error) {
      console.error('Error fetching Roblox Windows Player version:', error);
      message.reply('There was an error fetching the Roblox Windows Player version. Try again later :/');
    }
  }

  if (message.content.toLowerCase() === '!macversion') {
    try {
      const response = await fetch(macversion);
      if (!response.ok) {
        throw new Error(`HTTP error! Try again later :/`);
      }
      const data = await response.text();

      const embed = new EmbedBuilder()
        .setTitle('Roblox Mac Player Version')
        .setDescription(`The latest Roblox Mac Player version is: ${data}`)
        .setColor('#000000');

      message.reply({ embeds: [embed] });

    } catch (error) {
      console.error('Error fetching Roblox Mac Player version:', error);
      message.reply('There was an error fetching the Roblox Mac Player version. Try again later :/');
    }
  }

  if (message.content.toLowerCase() === '!help') {
    const embed = new EmbedBuilder()
      .setTitle('Available Commands')
      .setDescription('Here are the available commands:')
      .addFields(
        { name: '!winversion', value: 'Get the latest version of Roblox Windows Player.' },
        { name: '!macversion', value: 'Get the latest version of Roblox Mac Player.' },
        { name: '!help', value: 'Displays this help message.' },
        { name: '/winversion', value: 'Slash command to get the latest version of Roblox Windows Player.' },
        { name: '/macversion', value: 'Slash command to get the latest version of Roblox Mac Player.' }
      )
      .setColor('#000000');

    message.reply({ embeds: [embed] });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'winversion') {
    try {
      const response = await fetch(windowsversion);
      if (!response.ok) {
        throw new Error(`HTTP error! Try again later :/`);
      }
      const data = await response.text();

      const embed = new EmbedBuilder()
        .setTitle('Roblox Windows Player Version')
        .setDescription(`The latest Roblox Windows Player version is: ${data}`)
        .setColor('#000000');

      await interaction.reply({ embeds: [embed] });

    } catch (error) {
      console.error('Error fetching Roblox Windows Player version:', error);
      await interaction.reply('There was an error fetching the Roblox Windows Player version. Try again later :/');
    }
  }

  if (commandName === 'macversion') {
    try {
      const response = await fetch(macversion);
      if (!response.ok) {
        throw new Error(`HTTP error! Try again later :/`);
      }
      const data = await response.text();

      const embed = new EmbedBuilder()
        .setTitle('Roblox Mac Player Version')
        .setDescription(`The latest Roblox Mac Player version is: ${data}`)
        .setColor('#000000');

      await interaction.reply({ embeds: [embed] });

    } catch (error) {
      console.error('Error fetching Roblox Mac Player version:', error);
      await interaction.reply('There was an error fetching the Roblox Mac Player version. Try again later :/');
    }
  }

  if (commandName === 'help') {
    const embed = new EmbedBuilder()
      .setTitle('Available Commands')
      .setDescription('Here are the available commands:')
      .addFields(
        { name: '!winversion', value: 'Get the latest version of Roblox Windows Player.' },
        { name: '!macversion', value: 'Get the latest version of Roblox Mac Player.' },
        { name: '!help', value: 'Displays this help message.' },
        { name: '/winversion', value: 'Slash command to get the latest version of Roblox Windows Player.' },
        { name: '/macversion', value: 'Slash command to get the latest version of Roblox Mac Player.' }
      )
      .setColor('#000000');

    await interaction.reply({ embeds: [embed] });
  }
});

client.login(tkn);

// HOW TO RUN
// RUN THIS IN UR NODE.JS TEMINAL: node bot.js

// FOR TRACKER PLEASE REFER TO: tracker.js
