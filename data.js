var APP_DATA = {
  "scenes": [
    {
      "id": "0-outdoor",
      "name": "Outdoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1625253194988456,
          "pitch": 0.09148943661267595,
          "rotation": 0,
          "target": "1-front-house"
        },
        {
          "yaw": 0.6706744710616626,
          "pitch": 0.0807160784343175,
          "rotation": 0,
          "target": "2-living-room-and-kichen-area"
        },
        {
          "yaw": -0.0361122112603649,
          "pitch": 0.07665462545600121,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-house",
      "name": "Front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6934861983622476,
          "pitch": 0.08566800916233497,
          "rotation": 0,
          "target": "0-outdoor"
        },
        {
          "yaw": -0.02905836356951852,
          "pitch": 0.09154483711129657,
          "rotation": 0,
          "target": "2-living-room-and-kichen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room-and-kichen-area",
      "name": "Living room and kichen area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.060235929302685065,
          "pitch": 0.26004223248243186,
          "rotation": 0,
          "target": "0-outdoor"
        },
        {
          "yaw": 3.130401039952572,
          "pitch": 0.30922204074364856,
          "rotation": 0,
          "target": "1-front-house"
        },
        {
          "yaw": 1.4704610277733776,
          "pitch": 0.19634005817998457,
          "rotation": 0,
          "target": "3-front-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-bed-room",
      "name": "Front bed room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8338087870003914,
          "pitch": 0.15223444457991775,
          "rotation": 0,
          "target": "2-living-room-and-kichen-area"
        },
        {
          "yaw": 1.1219598419127088,
          "pitch": 0.1840232563932922,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 1.4241684347227412,
          "pitch": 0.3595951815871601,
          "rotation": 0.7853981633974483,
          "target": "8-bed-room-1"
        },
        {
          "yaw": -2.8280778931885457,
          "pitch": 0.3181109283117838,
          "rotation": 5.497787143782138,
          "target": "9-bed-room-2"
        },
        {
          "yaw": -2.3895111659213253,
          "pitch": 0.26028429780535056,
          "rotation": 0,
          "target": "10-bath-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1059158241278162,
          "pitch": 0.3315194009566991,
          "rotation": 0,
          "target": "0-outdoor"
        },
        {
          "yaw": -3.0539801595269864,
          "pitch": 0.3008994688557678,
          "rotation": 0,
          "target": "3-front-bed-room"
        },
        {
          "yaw": 1.853915108852883,
          "pitch": 0.38518336900928674,
          "rotation": 0,
          "target": "5-dressing-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dressing-room",
      "name": "Dressing room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.045488094396063,
          "pitch": 0.3980624481771109,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -0.8466320330767392,
          "pitch": 0.4878632451158289,
          "rotation": 0,
          "target": "7-master-bath-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bath-room-1",
      "name": "ฺBath room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5935783852039229,
          "pitch": 0.42955898130713166,
          "rotation": 0,
          "target": "8-bed-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bath-room",
      "name": "Master bath room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8254071590388348,
          "pitch": 0.4241610445912123,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bed-room-1",
      "name": "Bed room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11828442570934783,
          "pitch": 0.23358607265567777,
          "rotation": 0,
          "target": "3-front-bed-room"
        },
        {
          "yaw": -0.8866802866967927,
          "pitch": 0.2911653882321801,
          "rotation": 0,
          "target": "6-bath-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bed-room-2",
      "name": "Bed room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.005722729056262921,
          "pitch": 0.20088278835276085,
          "rotation": 0,
          "target": "3-front-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bath-room-2",
      "name": "Bath room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3799210416272274,
          "pitch": 0.48381624458657413,
          "rotation": 0,
          "target": "3-front-bed-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360 view The Riverside Type B",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
