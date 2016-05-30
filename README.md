# silk-relay16
Demo of controlling a USB HID device using Silk

# Procedure 
0. Obtain the relay described [here](https://github.com/mvines/relay#required-hardware)
1. Flash the Kenzo device with the latest Silk platform
2. Push the node relay program onto Kenzo with `git clone https://github.com/mvines/relay.git; adb remount; adb push relay /system/silk/node_modules/relay`
3. Use `silk setupwifi` to configure wifi on Kenzo
4. Run `adb shell ifconfig wlan0` to obtain the IP address for Kenzo.  Let's say it's 192.168.1.6
5. Switch Kenzo over to TCP/IP mode: `adb tcpip 5555; adb connect 192.168.1.6`
6. Connect the relay, Kenzo and power supply using a USB-OTG cable
7. `silk run` this program
8. Tap the screen to run the relay test pattern!
