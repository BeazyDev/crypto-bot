// Discord Module Auth

const Discord = require('discord.js-12');
const { MessageEmbed } = require('discord.js-12');
const client = new Discord.Client();
const auth = require('./auth.json');
const authToken = auth.token;
const authPrefix = auth.prefix;
const btcValue = require('btc-value');


// <-- API Crypto Value -->
const  crypto = require('crypto-js-value');
const { Message } = require('discord.js');

// <-- Client Connecting(Bot) -->

client.login(authToken);


// <-- Ready Event (Check if bot is online) -->
client.on('ready', async () => {
    console.log(`${client.user.tag} Is Online`)


})
client.on('ready', message => {
    client.user.setActivity("BeazyDev", { type: 'STREAMING', url: 'https://twitch.tv/BeazyDev'}).catch(console.error)
    console.log('Status is Ready!')
})




// <-- Crypto Value Message -->
client.on('message', async (msg) => {

    // <-- BTC Value -->
    if(msg.content === (`${authPrefix}btcprice`)){
        crypto.price("Symbol", "Currency");
        const result_btc = await crypto.price("btc", "usdt");
        const btc_embed = new Discord.MessageEmbed()
        .setAuthor('Bitcoin Price USD')
        .setTitle(`<:Bitcoin_logo:913786478113468446> $${result_btc}`)
        .setColor('#ffb900')
        msg.channel.send(btc_embed);
    }

    // <-- ETH Value -->

    if(msg.content === (`${authPrefix}ethprice`)){
        crypto.price("Symbol", "Currency");
        const result_eth = await crypto.price("eth", "usdt");
        const eth_embed = new Discord.MessageEmbed()
        .setAuthor('Ethereum Price USD')
        .setTitle(`<:eth_logo:913790928630726698> $${result_eth}`)
        .setColor('#ffffff')
        msg.channel.send(eth_embed);
    }


    // <-- BNB Value -->

    if(msg.content === (`${authPrefix}bnbprice`)){
        crypto.price("Symbol", "Currency");
        const result_bnb = await crypto.price("bnb", "usdt");
        const bnb_embed = new Discord.MessageEmbed()
        .setAuthor('Bnb Price USD')
        .setTitle(`<:bnb_logo:913802335719915521> $${result_bnb}`)
        .setColor('#ffb900')
        msg.channel.send(bnb_embed);
    }
});

























