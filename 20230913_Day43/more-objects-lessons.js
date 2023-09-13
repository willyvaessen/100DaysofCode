// //  Manipulating Complex Objects
//
// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   }
// ];
//
// console.log(myMusic.length);
// console.log(myMusic[0]);
//
// let newEntry = {
//     "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   };
//
// // console.log(newEntry);
// // myMusic[myMusic.length +1] = newEntry;
// // console.log(myMusic);
//
// myMusic.push(newEntry);
// console.log(myMusic);


// //  Accessing Nested Objects
//
// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };
//
// // const gloveBoxContents = undefined;
// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// //  Accessing Nested Arrays
//
// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];
//
// // const secondTree = "";
// const secondTree = myPlants[1].list[1];
// console.log(secondTree);


//  Record Collection

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop === "tracks") {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');