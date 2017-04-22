//  RoboRadio JavaScript Streaming Player by MSR Interactive

var $animation = document.getElementById("animation");
var $speaker = document.getElementsByClassName("speaker");
var $pauseButton = document.getElementById("playPause");
var musicarray = [

    //POP GENRE
    [
        {
            info: "QMR Sugar Radio",
            url: "http://78.129.146.97:7108/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 0
        },
        {
            info: "Mix Radio Extra",
            url: "http://51.255.127.128:8032/stream?icy=http",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 1
        },
        {
            info: "Teen FM",
            url: "http://82.223.28.90:8091/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 2
        },
        {
            info: "StarDusk FM",
            url: "http://206.190.136.141:1966/Live;stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 3
        },
        {
            info: "Plus Radio",
            url: "http://170.75.144.250:13338/;stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 4
        },
        {
            info: "POP FM 98.7",
            url: "http://158.69.242.81:4052/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 5
        }
    ],

    //EDM GENRE
    [
        {
            info: "Radio Hunter",
            url: "http://listen.shoutcast.com/radiohunter-theelectronicchannel?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 0
        },
        {
            info: "DEEP FM.AT",
            url: "http://195.66.134.42/sd?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 1
        },
        {
            info: "RadioParty.PL",
            url: "http://176.31.240.87:8000/rp.mp3?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 2
        },
        {
            info: "PulseRadio Dance",
            url: "http://178.32.98.117/pulsHD.mp3?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 3
        },
        {
            info: "Electric FM",
            url: "http://listen.shoutcast.com/electricfmamericasrealdance?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 4
        },
        {
            info: "VirtualDJ Radio",
            url: "http://52.0.120.216:8000/channel1.mp3?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 5
        }

    ],

    // BLUES GENRE
    [
        {
            info: "Bar-legends",
            url: "http://50.7.98.106:8719/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 0
        },
        {
            info: "Deep Jams",
            url: "http://74.50.122.103:9748/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 1
        },
        {
            info: "Music City Roadhouse",
            url: "http://stereo.wavestreamer.com:5022/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 2
        },
        {
            info: "big Blues Swing",
            url: "http://www.bigblueswing.com:8002/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 3
        },
        {
            info: "Caledonia\'s",
            url: "http://66.55.82.222:8031/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 4
        },
        {
            info: "Blues Audiophile",
            url: "http://8.38.78.173:8240/;steam.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 5
        }
    ],

    //Classic Rock
    [
        {
            info: "Rock Radio SI",
            url: "http://212.18.63.135:9034/rock;stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 0
        },
        {
            info: "Beatles Radio",
            url: "http://64.40.99.76:8000/;stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 1
        },
        {
            info: "Classic Rock 109",
            url: "http://198.27.70.42:10042/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 2
        },
        {
            info: "Bob FM",
            url: "http://173.192.70.138:8980/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 3
        },
        {
            info: "Classic Rock NY",
            url: "http://45.79.186.124:8351/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 4
        },
        {
            info: "JUST Classic Rock",
            url: "http://199.168.117.61:8026/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 5
        }
    ],

    //HIP HOP GENRE
    [
        {
            info: "POWER HITZ",
            url: "http://66.85.88.174/1power?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 0
        },
        {
            info: "HOT 108 JAMZ",
            url: "http://66.85.88.174/hot108?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 1
        },
        {
            info: "BREAKZ.FM",
            url: "http://46.4.121.133:8100/stream128?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 2
        },
        {
            info: "BEAT FM ",
            url: "http://89.105.32.27/beat128.mp3?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 3
        },
        {
            info: "103.7 DA BEAT",
            url: "http://46.105.122.141:8742/;?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 4
        },
        {
            info: "WWMR 105 THE HEAT",
            url: "http://38.107.243.187:8000/stream?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 5
        }
    ],

    //RAP GENRE
    [
        {
            info: "TTTRadio.NET",
            url: "http://69.143.55.164/;?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 0
        },
        {
            info: "AOH Radio",
            url: "http://206.190.136.141:3317/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 1
        },
        {
            info: "Unsigned Hype",
            url: "http://51.255.83.127:9597/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 2
        },
        {
            info: "Liquid Hip Hop",
            url: "http://198.105.214.140:1806/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 3
        },
        {
            info: "POWER 101.8 NY",
            url: "http://206.190.136.141:4383/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 4
        },
        {
            info: "Peach Radio",
            url: "http://38.135.36.74:8018/peach?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 5
        }
    ],

    //CHILLOUT GENRE
    [
        {
            info: "The Buzzout Room",
            url: "http://149.56.183.178:8034/stream?icy=http",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 0
        },
        {
            info: "Nebula",
            url: "http://eu.radioboss.fm:8224/live?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 1
        },
        {
            info: "Ambient Sleeping Pill",
            url: "http://176.31.107.8:8446/stream?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 2
        },
        {
            info: "DI Ambient Fantasy",
            url: "http://5.39.71.159:8193/stream?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 3
        },
        {
            info: "TriChrome World",
            url: "http://173.192.105.231:1309/Live?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 4
        },
        {
            info: "Smooth Drops",
            url: "http://5.2.229.172:9876/;?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 5
        }
    ],

    //Dubstep GENRE
    [
        {
            info: "DUBSTEP.FM",
            url: "http://stream.dubstep.fm/64mp3?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 0
        },
        {
            info: "Dubstep Radio .FM",
            url: "http://198.15.94.34:8018/stream?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 1
        },
        {
            info: "Dance Factory",
            url: "http://listen.radionomy.com/DanceFactory?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 2
        },
        {
            info: "HOP SKIP \&DubStep",
            url: "http://192.240.102.131:7637/stream?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 3
        },
        {
            info: "SubSonic FM Radio",
            url: "http://198.27.80.205:5768/stream?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 4
        },
        {
            info: "EDM Colorado Ch.2",
            url: "http://38.107.242.58:8010/edmco2?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 5
        }
    ],

    // College Genre
    [
        {
            info: "RADIO K KUOM",
            url: "http://128.101.73.38:8256/;?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 0
        },
        {
            info: "ACADEMY FM",
            url: "http://37.187.93.104:8097/stream?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 1
        },
        {
            info: "WHUS",
            url: "http://158.69.225.238:7499/WHUS?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 2
        },
        {
            info: "101.5 The Hawk",
            url: "http://142.222.6.62:8000/stream/2/?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 3
        },
        {
            info: "Guerrila Radio",
            url: "http://174.37.16.73:8291/Live?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 4
        },
        {
            info: "88.9 WQSU-FM",
            url: "http://198.105.214.140:9045/Live?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 5
        }
    ],

    //MODERN COUNTRY GENRE
    [
        {
            info: ".113FM Kickin Country",
            url: "http://listen.shoutcast.com/113fmbigkickin-country?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 0
        },
        {
            info: "New Country 93",
            url: "http://173.192.70.138:9170/stream?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 1
        },
        {
            info: "PowerHitz Country",
            url: "http://66.85.88.174/country?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 2
        },
        {
            info: "2 Country",
            url: "http://listen.shoutcast.com/2Country?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 3
        },
        {
            info: "In My Dreams Radio",
            url: "http://158.69.135.138:8028/stream?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 4
        },
        {
            info: "Calm Country",
            url: "http://184.173.142.117:13828/stream?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 5
        }
    ],

    //Classic Country GENRE
    [
        {
            info: "Today's Country",
            url: "http://108.163.197.114:8249/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 0
        },
        {
            info: "Gone Country",
            url: "http://192.99.41.102:5044/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 1
        },
        {
            info: "Steel Radio",
            url: "http://174.127.82.223:16230/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 2
        },
        {
            info: "DI Radio Country",
            url: "http://5.39.71.159:8110/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 3
        },
        {
            info: "Outback Radio",
            url: "http://104.250.155.162:9980/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 4
        },
        {
            info: "ThrowBack Country",
            url: "http://192.99.177.195:8026/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 5
        }
    ],

    //Hard Rock GENRE
    [
        {
            info: "XXXrock.FM",
            url: "http://23.29.71.154:8140/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 0
        },
        {
            info: "Melodic Rock",
            url: "http://37.59.14.77:8124/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 1
        },
        {
            info: "RockXradio",
            url: "http://158.69.227.214:8000/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 2
        },
        {
            info: "Sonora Metal",
            url: "http://46.105.122.141:6664/;?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 3
        },
        {
            info: "DI Hard Rock",
            url: "http://5.39.71.159:8165/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 4
        },
        {
            info: "Hang 10 RockRadio",
            url: "http://158.69.227.214:8113/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 5
        }
    ],

    //METAL GENRE
    [
        {
            info: "Metal Nation",
            url: "http://91.121.164.210:8380/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 0
        },
        {
            info: "Rock & Metal",
            url: "http://192.99.62.212:9964/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 1
        },
        {
            info: "BrainGell",
            url: "http://5.189.142.165:8096/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 2
        },
        {
            info: "MetalHead",
            url: "http://198.178.121.76:8012/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 3
        },
        {
            info: "Prog Palace",
            url: "http://199.168.117.61:8006/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 4
        },
        {
            info: "Metalourgio",
            url: "http://78.46.73.91:9043/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 5
        }
    ],

    //Rockabilly GENRE
    [
        {
            info: "Rockin626.com",
            url: "http://192.99.4.210:3574/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 0
        },
        {
            info: "Bazooka Psychobilly",
            url: "http://86.105.205.246:30130/;?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 1
        },
        {
            info: "Streaming Billy",
            url: "http://209.95.50.189:8066/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 2
        },
        {
            info: "Elvis Presley",
            url: "http://37.59.42.207:8385/stream2?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 3
        },
        {
            info: "Daltons Radio",
            url: "http://94.23.36.117:5210/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 4
        },
        {
            info: "24/7 Rock N Roll",
            url: "http://80.86.84.31:8130/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 5
        }
    ],

    //Alternative GENRE
    [
        {
            info: "AAC Plus Dreampop",
            url: "http://78.47.96.202:8130/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 0
        },
        {
            info: "CAYA Radio 90s",
            url: "http://167.114.210.232:8105/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 1
        },
        {
            info: "London Burning",
            url: "http://192.99.4.210:3800/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 2
        },
        {
            info: "CDNX Indie",
            url: "http://109.123.70.138:8136/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 3
        },
        {
            info: "Malfunction",
            url: "http://188.165.240.90:8424/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 4
        },
        {
            info: "Brittania",
            url: "http://5.189.151.48/;?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 5
        }
    ],

    //SKA PUNK GENRE
    [
        {
            info: "RFP RADIO.com ",
            url: "http://184.171.163.20:8210/stream?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 0
        },
        {
            info: "Gutter Punk Radio",
            url: "http://23.228.66.67:8000/;?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 1
        },
        {
            info: "Celtic Folk Punk",
            url: "http://69.175.94.98:8240/stream?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 2
        },
        {
            info: "Radio No Future",
            url: "http://37.187.124.134:8100/;?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 3
        },
        {
            info: "Punk Rock",
            url: "http://199.87.239.197:8000/;?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 4
        },
        {
            info: "Third Wave Ska",
            url: "http://206.190.136.141:2735/Live?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 5
        }
    ],

    //K Pop GENRE
    [
        {
            info: "K popway ",
            url: "http://198.105.214.140:2684/Live?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 0
        },
        {
            info: "Aewen Kpop",
            url: "http://37.72.100.39:8001/stream?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 1
        },
        {
            info: "Kpop Replay",
            url: "http://167.114.64.181:8325/stream?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 2
        },
        {
            info: "Kpop top100",
            url: "http://121.159.140.57:8000/128?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 3
        },
        {
            info: "Epic Kpop",
            url: "http://158.69.225.238:6070/Live?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 4
        },
        {
            info: "K O Mumyong Radio",
            url: "http://144.217.129.213:9942/stream?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 5
        }
    ],

    // Latin GENRE
    [
        {
            info: "Cafe Romantico ",
            url: "http://192.187.112.50:8190/stream?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 0
        },
        {
            info: "XTREMO Stereo",
            url: "http://94.23.6.53:8053/stream?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 1
        },
        {
            info: "Tropicalisima Bachata",
            url: "http://50.7.56.2:8024/;?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 2
        },
        {
            info: "Radio HUANCAYO Peru",
            url: "http://212.83.146.67:7208/stream?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 3
        },
        {
            info: "Reggaeton Hits AAC",
            url: "http://216.230.231.122:8000/32AAC?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 4
        },
        {
            info: "Tropical 100 Bolero",
            url: "http://108.54.234.102:8024/;?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 5
        }
    ],

    // Classical Symphony GENRE
    [
        {
            info: "Classic Mozart ",
            url: "http://37.251.146.169:8300/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 0
        },
        {
            info: "SignPilot LLC",
            url: "http://198.143.144.226:8037/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 1
        },
        {
            info: "Classic Romania",
            url: "http://37.251.146.169:8000/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 2
        },
        {
            info: "Classic Beethoven",
            url: "http://37.251.146.169:7200/stream2?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 3
        },
        {
            info: "Wayyradio Piano",
            url: "http://37.59.42.207:8367/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 0
        },
        {
            info: "Music101 Piano",
            url: "http://37.59.42.207:8559/stream2?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 1
        }
    ],

    // Reggae GENRE
    [
        {
            info: "Lommok Radio",
            url: "http://37.59.47.192:8696/stream?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 0
        },
        {
            info: "Radio Feverpitch",
            url: "http://82.94.166.107:8097/stream?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 1
        },
        {
            info: "CCMLF Radio",
            url: "http://69.197.169.178:27488/;?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 2
        },
        {
            info: "DFW Caribbean",
            url: "http://69.197.169.178:30202/;?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 3
        },
        {
            info: "NLR Roots",
            url: "http://91.121.205.70:4062/;?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 4
        },
        {
            info: "UPYD 692 ",
            url: "http://91.121.205.70:4062/;?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 5
        }
    ]

//End of musicarray
];

// player functions

var player = {
    station: musicarray[0][0],
    paused: true,
    genreNumber: 0,
    stationNumber: 0
};

var currentAudio = new Audio(player.station.url);
currentAudio.volume = 0.8;

function pause() {
    currentAudio.pause();
    $($speaker).removeClass("pulsing");
    $($animation).addClass("stopped");
    player.paused = true;
}

function playMusic() {
    var vol = currentAudio.volume;
    currentAudio.src = player.station.url;
    player.paused = false;
    //$($pauseButton).innerHTML = "";
    $($animation).removeClass("stopped");
    $($speaker).addClass("pulsing");
    currentAudio.volume = (vol / 4);
    currentAudio.play();
    setTimeout(function(){currentAudio.volume = (vol / 3);},300);
    setTimeout(function(){currentAudio.volume = (vol / 2);},600);
    setTimeout(function(){currentAudio.volume = (vol / 1);},900);
}

function startStopper() {
    if (player.paused === false) {
        pause();
    } else {
        playMusic();
    }
}

function setStation(newStation) {
    player.station = newStation;
    player.stationNumber = newStation.stationNumber;
    player.genreNumber = newStation.genreNumber;
    document.getElementById("station-text").innerHTML = newStation.info;
    document.getElementById("genre-text").innerHTML = newStation.genre;
}

$($speaker).click(function () {
    setStation(player.station);
    startStopper();

});

$("#playPause").click(function () {
    setStation(player.station);
    startStopper();
});

$("#step-forward").click(function () {

    if (player.stationNumber < musicarray[player.genreNumber].length - 1) {
        setStation(musicarray[player.genreNumber][(player.stationNumber + 1)]);
        playMusic();
        console.log("Step-Forward " + player.station.info);
    }
    else {
        setStation(musicarray[player.genreNumber][0]);
        playMusic();
        console.log("Step-Forward " + player.station.info);
    }

});

$("#genre-next").click(function () {
    if (player.genreNumber < musicarray.length - 1) {
        setStation(musicarray[(player.genreNumber + 1)][0]);
        playMusic();
        console.log("Change to Genre " + player.station.genre);
    } else {
        setStation(musicarray[0][0]);
        playMusic();
        console.log("Change to Genre " + player.station.genre);
    }
});

$("#random").click(function () {
    pickGenre = Math.floor(Math.random() * musicarray.length);
    pickSong = Math.floor(Math.random() * musicarray[pickGenre].length);
    setStation(musicarray[pickGenre][pickSong]);
    playMusic();
    console.log("Picked random " + player.station.genre + " " + player.station.info);
});

$(".number-button").click(function (e) {
    newStation = this.getAttribute('data-station');
    setStation(musicarray[player.genreNumber][newStation]);
    playMusic();
});


//  color switching


$(".colorswitch").click(function (e) {
    var newColor = this.getAttribute("data-color");
    var css = "css/" + newColor + ".css";
    $("#theme-switcher").attr("href", "css/" + newColor + ".css");
    console.log("Colors changed to " + newColor);
    showPlayer();
});


// DYNAMIC VIEWS
// ------------------------------

// hide the other views initially so they don't appear until called
$("#genre-list").hide();
$("#about").hide();
$("#colors").hide();
$("#stations-list").hide();
$("#toys").hide();

function hideAllViews(){
    $("#genre-list").hide();
    $("#about").hide();
    $("#colors").hide();
    $("#stations-list").hide();
    //$("#visuals").hide();
    $("section").hide();
    $("#toys").hide();
}

//views

function showPlayer() {
    hideAllViews();
    $("section").fadeIn();
}
function showGenre() {
    hideAllViews();
    $("#genre-list").fadeIn();
}
function showAbout() {
    hideAllViews();
    $("#about").fadeIn();
}
function showColors() {
    hideAllViews();
    $("#colors").fadeIn();
}
function showStations() {
    hideAllViews();
    $("#stations-list").fadeIn();
}


function genreToggle() {
    if ($("#genre-list").is(":visible")) {
        $("#genre-list").hide();
        showPlayer();
    } else {
        showGenre();
    }
}

function aboutToggle() {
    if ($("#about").is(":visible")) {
        $("#about").hide();
        showPlayer();
    } else {
        showAbout();
    }
}

function colorsToggle() {
    if ($("#colors").is(":visible")) {
        $("#colors").hide();
        showPlayer();
    } else {
        showColors();
    }
}
function stationsToggle() {
    if ($("#stations-list").is(":visible")) {
        $("#stations-list").hide();
        showPlayer();
    } else {
        showStations();
    }
}
function visToggle() {
    if ($("#visuals").is(":visible")) {
        $("#visuals").slideUp();
    } else {
        $("#toys").hide();
        $("#visuals").slideDown();
    }
}


//navigation for views

$("#genre-list-trigger").click(function () {
    genreToggle();
});

$("#stations-list-trigger").click(function () {
    stationsToggle();
});

$("#about-trigger").click(function () {
    aboutToggle();
});

$("#robot").click(function () {
    aboutToggle();
});

$("#colors-trigger").click(function () {
    colorsToggle();
});

$(".close-button").click(function () {
    showPlayer();
});
$("#vis-toggle").click(function(){
    visToggle();
});

$(".list-station-link").click(function(){
    stationsToggle();
});

$(".list-genre-link").click(function(){
    genreToggle();
});

$(".list-theme-link").click(function(){
    showColors();
});
$("#show-lists").click(function(){
   showGenre();
});

$("#theme-player-button").click(function(){
    showColors();
});

$(".toy-button").click(function(e){
    var newToy = this.getAttribute("data-toy");
    $("#toys").attr("src", newToy);
    $("#visuals").slideUp();
    $("#toys").show();
});

//  create the genre list from the music array

for (i = 0; i < musicarray.length; i++) {
    var text = ('<h3 class="genre-triggers" data-genre="' + i + '">' + musicarray[i][0].genre + "</h3>");
    $("#genres").append(text);
}

//  Here's the Magic

$(".genre-triggers").click(function (e) {
    var newGenre = this.getAttribute("data-genre");
    console.log("Genre Changed to " + musicarray[newGenre][0].genre);
    setStation(musicarray[newGenre][0]);
    showPlayer();
    playMusic();
});

// create the stations list from the music array


for (i = 0; i < musicarray.length; i++) {
    var genreName = ('<h2 class="genre-names">' + musicarray[i][0].genre + '</h2>'  );
    $("#stations").append(genreName);
    for (j = 0; j < 6; j++) {
        var text = ('<h3 class="station-triggers" data-genre="' + i + '" data-station="' + j + '"  >' + musicarray[i][j].info + "</h3>");
        $("#stations").append(text);
    }

}

// a little more magic

$(".station-triggers").click(function (e) {
    var newGenre = this.getAttribute("data-genre");
    var newStation = this.getAttribute("data-station");
    console.log("Station Changed to " + musicarray[newGenre][newStation].info);
    setStation(musicarray[newGenre][newStation]);
    showPlayer();
    playMusic();
});

$("#attenuate").click(function(){
    if (currentAudio.volume === 0.20){
        currentAudio.volume = 0.9;
    } else {
        currentAudio.volume = 0.20;
    }

});

$("#volume-slider").mouseup(function(){
    currentAudio.volume = ($("#volume-slider")[0].value / 100);
});

$("#volume-slider").click(function(){
    currentAudio.volume = ($("#volume-slider")[0].value / 100);
});
$("#volume-slider").on("change",function(){
    currentAudio.volume = ($("#volume-slider")[0].value / 100);
});
//$("#volume-slider").on("swipe",function(){
//    currentAudio.volume = ($("#volume-slider")[0].value / 100);
//});




//ID3 tagging

//
//document.querySelector('input[type="file"]').onchange = function(e) {
//    var reader = new FileReader();
//
//    reader.onload = function(e) {
//        var dv = new jDataView(this.result);
//
//        // "TAG" starts at byte -128 from EOF.
//        // See http://en.wikipedia.org/wiki/ID3
//        if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
//            var title = dv.getString(30, dv.tell());
//            var artist = dv.getString(30, dv.tell());
//            var album = dv.getString(30, dv.tell());
//            var year = dv.getString(4, dv.tell());
//        } else {
//            // no ID3v1 data found.
//        }
//    };
//
//    reader.readAsArrayBuffer(this.files[0]);
//};
//
