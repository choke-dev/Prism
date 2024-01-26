<h1 align="center">GCBot</h1>
> GCBot is a discord bot to replicate discord's group chat features in a server.

## Install

```sh
npm install
```

## Configuration

- Rename [`.env-example`](https://github.com/choke-dev/GCBot/blob/master/.env-example) to `.env` and [`config-example.json`](https://github.com/choke-dev/GCBot/blob/master/config-example.json) to `config.json`, then fill out the other values.

## Run your bot

```sh
npm start

# Running through PM2
pm2 start start.sh --name GCBot
```