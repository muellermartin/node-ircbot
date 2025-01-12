const ms = require('ms');

module.exports = {

    irc: {
        server: 'irc.freenode.net',
        port: 6667,
        realname: 'Backspace IRC-Bot',
        nickname: 'schinkenb0t',
        channel: '#schinkenspace',
        commandPrefix: '!'
        /*
        login: {
            username: 'xxx',
            password: 'xxx'
        }
        */
    },

    karma: {
        database: '/home/schinken/projects/backspace/node-ircbot/data/karma.json'
    },

    spacestatus: {
        status: 'sensor/space/status',
        memberNames: 'sensor/space/member/names'
    },

    redmine: {
        url: 'https://redmine.hackerspace-bamberg.de',
        project: 'backspace',
        username: 'restapi',
        password: '',
        intervalMs: ms('5m')
    },

    pizzaTimer: {
        maxTimeoutMs: ms('1d')
    },

    mqtt: {
        server: 'mqtt.core.bckspc.de',
        topics: {
            pizza: 'psa/pizza',
            alarm: 'psa/alarm',
            sound: 'psa/sound'
        }
    }
};