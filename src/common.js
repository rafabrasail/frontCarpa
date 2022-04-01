import axios from 'axios';

const server = 'http://127.0.0.1:8000'

// async function getRobots(){
//     return axios
//         .get(`${server}/Robot/`)
//         .then(res => res.data);
// }

  const robots = [
    {
        "id": 1,
        "url": "http://127.0.0.1:8000/Robot/1/",
        "name": "IRB120",
        "joints": [
            "http://127.0.0.1:8000/Joint/1/",
            "http://127.0.0.1:8000/Joint/2/",
            "http://127.0.0.1:8000/Joint/3/"
        ],
        "points": [
            "http://127.0.0.1:8000/Point/1/",
            "http://127.0.0.1:8000/Point/2/"
        ]
    },
    {
        "id": 2,
        "url": "http://127.0.0.1:8000/Robot/2/",
        "name": "MH5",
        "joints": [],
        "points": []
    }    
  ] 

  const joints = [
    {
        "id": 1,
        "url": "http://127.0.0.1:8000/Joint/1/",
        "name": "j1",
        "type": "R",
        "screw_s_x": 0.0,
        "screw_s_y": 0.0,
        "screw_s_z": 10.0,
        "screw_s0_x": 0.0,
        "screw_s0_y": 0.0,
        "screw_s0_z": 0.0,
        "screw_t": 0.0,
        "screw_theta": 0.0,
        "denavit_alpha": 0.0,
        "denavit_a": 0.0,
        "denavit_d": 0.0,
        "denavit_theta": 0.0,
        "file": null
    },
    {
        "id": 2,
        "url": "http://127.0.0.1:8000/Joint/2/",
        "name": "j2",
        "type": "R",
        "screw_s_x": 0.0,
        "screw_s_y": 2.0,
        "screw_s_z": 13.0,
        "screw_s0_x": 0.0,
        "screw_s0_y": 0.0,
        "screw_s0_z": 0.0,
        "screw_t": 0.0,
        "screw_theta": 0.0,
        "denavit_alpha": 0.0,
        "denavit_a": 0.0,
        "denavit_d": 0.0,
        "denavit_theta": 0.0,
        "file": null
    },
    {
        "id": 3,
        "url": "http://127.0.0.1:8000/Joint/3/",
        "name": "base",
        "type": "R",
        "screw_s_x": 0.0,
        "screw_s_y": 0.0,
        "screw_s_z": 0.0,
        "screw_s0_x": 0.0,
        "screw_s0_y": 0.0,
        "screw_s0_z": 0.0,
        "screw_t": 0.0,
        "screw_theta": 0.0,
        "denavit_alpha": 0.0,
        "denavit_a": 0.0,
        "denavit_d": 0.0,
        "denavit_theta": 0.0,
        "file": null
    }    
  ]

  const points = [
    {
        "id": 1,
        "url": "http://127.0.0.1:8000/Point/1/",
        "name": "p1",
        "position_x": 5.0,
        "position_y": 5.0,
        "position_z": 5.0,
        "orientation_x": 0.0,
        "orientation_y": 0.0,
        "orientation_z": 0.0
    },
    {
        "id": 2,
        "url": "http://127.0.0.1:8000/Point/2/",
        "name": "p2",
        "position_x": 7.0,
        "position_y": 7.0,
        "position_z": 7.0,
        "orientation_x": 0.0,
        "orientation_y": 0.0,
        "orientation_z": 0.0
    }    
  ]

export {server, robots, joints, points}