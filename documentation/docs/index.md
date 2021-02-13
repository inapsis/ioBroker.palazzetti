# Welcome to ioBroker.palazzetti

![icon](./images/palazzetti.png)
Visit on [GitHub ioBroker.palazzetti](https://github.com/inapsis/ioBroker.palazzetti)

![screenshot](./images/screenshot.png)

---

## Prerequisites

Works with [Palazzetti Connection Box](https://www.google.com/search?client=safari&rls=en&q=connection+box+palazzetti&ie=UTF-8&oe=UTF-8)

---

## Adapter Setup

![configuration](./images/adapter-configuration.png)

| Setting       | Description
| :--           | :--
| IP Address    | Define local IP address of connection box.
| Port          | Define port number of connection box. Default 80.
| Polling Time  | Define polling time to request current values frequently.

---

## Adapter Objects: palazzetti.{instance number}

### Channels

#### Info

Channel to get system states as read only values.

| Datapoint | Description
| :--       | :--
| aplts     | Current Date and Time
| fwdate    | Firmware Date
| mac       | MAC Address
| mbtype    | Main Board
| model     | Model
| name      | Name
| ver       | Version

#### Get

Channel to get current states as read only values.

| Datapoint | Description                           | Values
| :--       | :--                                   | :--
| aplwday   | day of weekday                        | 1 - 7
| chrstatus | Timer Status                          | 0: Timer Off, 1: Timer On
| dp        | Delta Pressure                        | >= 0
| dpt       | Target Pressure                       | >= 0
| f1rpm     | Fan Exhaust Revolutions Per Minute    | >= 0
| f1v       | Fan Exhaust                           | >= 0
| f2lf      | Fan Level                             | 0 - 7
| f2v       | Fan                                   | >= 0
| fdr       | Pellet Feed Rate                      | 0 - 5
| in        | In                                    | >= 0
| out       | Out                                   | >= 0
| pqt       | Spent Pellets                         | >= 0 in KG
| pump      | Pump Speed                            | >= 0
| status    | Current Status                        | 0: Off, <br>1: Off Timer, <br>2: Test Fire, <br>3: Heat Up, <br>4: Fuel Ignition,<br>5: Ignition Test, <br>6: Burning, <br>9: Cool Fluid, <br>10: Fire Stop, <br>11: Clean Fire, <br>12: Cool
|           | Error Status                          | 241: Chimney Alarm, <br>243: Grate Error, <br>244: NTC2 Alarm, <br>245: NTC3 Alarm, <br>247: Door Alarm, <br>248: Press Alarm, <br>249: NTC1 Alarm, <br>250: TC1 Alarm, <br>252: Gas Alarm, <br>253: No Pellet Alarm
| t1        | Temperature Room                      | in °C
| t2        | Temperature Return                    | in °C
| t3        | Temperature Exhaust                   | in °C
| t4        | Temperature Multi Fire                | in °C
| t5        | Temperature Accumulation              | in °C

#### Control

Channel to display and manage current states.

| Datapoint | Description               | Values
| :--       | :--                       | :--
| f2l       | Fan Level                 | 0 - 5, High, Auto
| onoff     | Turn Power On Off         | true, false
| pwr       | Power Fire Level          | 0 - 5
| setp      | Temperature Set Point     | target temperature

#### Timer

Channel to display timer setting values in json format.

* Timer program assignments to a day (maximum of three program assignments possible)

        {
            "M1:    "OFF" or Program "P1" - "P6",
            "M2":   "OFF" or Program "P1" - "P6",
            "M3":   "OFF" or Program "P1" - "P6",
        }

* Timer program settings

        {
            "CHRSETP":21,       target temperature
            "START":"05:30",    start time
            "STOP":"07:15"      end time
        }

| Datapoint | Description
| :--       | :--
| d1        | Timer program assignment on Monday
| d2        | Timer program assignment on Tuesday
| d3        | Timer program assignment on Wednesday
| d4        | Timer program assignment on Thursday
| d5        | Timer program assignment on Friday
| d6        | Timer program assignment on Saturday
| d7        | Timer program assignment on Sunday
| p1        | Timer program "P1"
| p2        | Timer program "P2"
| p3        | Timer program "P3"
| p4        | Timer program "P4"
| p5        | Timer program "P5"
| p6        | Timer program "P6"