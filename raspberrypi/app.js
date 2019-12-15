const mqtt = require("mqtt");
const Mam = require("@iota/mam");
const Converter = require("@iota/converter");
const provider = require("./config/config").provider;
const brokerUrl = require("./config/config").brokerUrl;
const port = require("./config/config").port;
const topic = require("./config/config").topic;

const client = mqtt.connect(`${brokerUrl}:${port}`);

let state = Mam.init(provider);
console.log(state);


client.on("connect", function () {
    client.subscribe(topic);
    console.log(`Client has connected successfully to ${topic}`);
});

client.on("message", (topic, message) => {
    if (topic.toString() == topic) {
        console.log(`Values are ${message}`);
        publish(JSON.parse(message));
    }
});

const publish = async function (packet) {
    const trytes = Converter.asciiToTrytes(JSON.stringify(packet));

    const message = Mam.create(state, trytes);
    state = message.state;
    console.log(state);

    await Mam.attach(message.payload, message.address);
    console.log(message);
    return message.root;
};



