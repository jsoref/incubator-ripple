/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
module.exports = {

    "id": "Z10",
    "name": "BlackBerry Z10",
    "model": "Z10",
    "osName": "BlackBerry",
    "uuid": "42",
    "osVersion": "10.0.10",
    "manufacturer": "BlackBerry",
    "hardwareId": "0x04002607",

    "skin": "Z10",

    "capabilities": [
        "input.touch",
        "location.gps",
        "media.audio.capture",
        "media.video.capture",
        "media.recording",
        "network.bluetooth",
        "network.wlan"
    ],

    "screen": {
        "width": 768,
        "height": 1280
    },
    "viewPort": {
        "portrait": {
            "width": 768,
            "height": 1280,
            "paddingTop": 0,
            "paddingLeft": 0
        },
        "landscape": {
            "width": 1280,
            "height": 768,
            "paddingTop": 0,
            "paddingLeft": 0
        }
    },

    "defaultOrientation": "portrait",

    "ppi": 356,
    "userAgent": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.10.261 Mobile Safari/537.10+",
    "platforms": ["web", "webworks.bb10", "cordova"],
    "mediaQueryEmulation": {
        "-webkit-device-pixel-ratio": 2.24
    }
};
