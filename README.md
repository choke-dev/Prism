<h1 align="center">Prism</h1>
> Prism is a custom-built discord bot for one of my friends.

## Install

```sh
npm install
```

## Configuration

- Rename [`.env-example`](https://github.com/choke-dev/GCBot/blob/master/.env-example) to `.env` and [`config-example.json`](https://github.com/choke-dev/GCBot/blob/master/config-example.json) to `config.json`, then fill out the other values.

## Run your bot

```sh
# Running through CLI
npm start

# Running through PM2
pm2 start start.sh --name PrismBot
```