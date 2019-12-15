# MQTT MAM

This project seeks to demonstrate the use of MQTT protocol and IOTA-MAM to store temperature sensor on the blockchain.

## Hardware setup

### Nodemcu & Current sensor

Circuit design

<p  align="center">
  <img src="./assets/esp-current-sensor/esp-current-sensor.png" width="600" />
</p>

Board design and the final look

<p align="center">
  <img src="./assets/esp-current-sensor/esp-current-sensor-board.png" width="300" />
  <img src="./assets/esp-current-sensor/esp-current-sensor-final.jpg" width="300" /> 
</p>

## Installation

### Esp

Installing in a NodeMCU involves pushing the python files into the device whether it's via a usb to ttl or just a usb cable. This can be done using the command

```bash
sudo ampy --port /dev/ttyUSB0 --baud 115200 put main.py
sudo ampy --port /dev/ttyUSB0 --baud 115200 put config.py
sudo ampy --port /dev/ttyUSB0 --baud 115200 put connectWifi.py
```

You need to create a config.py file with the following information for each and every esp folder (current-sensor, dht-sensor, motion-sensor, relay-bulb, relay-fan)

```python
MQTT_CONFIG = {
    'SENSOR_ID': '',
    'MQTT_HOST': '',
    'PORT': '',
    'PUB_TOPIC': ''
}

WIFI_CONFIG = {
    'WIFI_ESSID': '',
    'WIFI_PASSWORD': ''
}
```

## Raspberry Pi

To install npm packages used for the Raspberry Pi, you run.

```bash
npm install @iota/mam mqtt
```

You also need to create a config folder and have the file config/config.js with the following configuration

```js
module.exports = {
    brokerUrl: "",
    port: "",
    topic: "",
    provider, ""
};

# Usage

## Raspberry Pi

To run the code for Raspberry Pi just cd into the folder and run

```bash
node app.js
```

To ensure that the Raspberry Pi runs the code whenever it boots, edit the rc.local file

```
sudo nano /etc/rc.local
```

and add

```
node app.js &
```

# Contributing

To contribute code to this repository please read the [CONTRIBUTING](https://github.com/peterokwara/mqtt-mam/blob/master/CONTRIBUTING.md) guidelines.

# License

[MIT](https://github.com/peterokwara/mqtt-mam/blob/master/LICENSE)