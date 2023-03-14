import React from 'react';
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

let nextId = 0;

const Home = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    const onAddItem = () => {
        if (name == '') {
            Alert.alert('okay')
        } else {
            setName('');
            artists.push({
                id: nextId++,
                name: name,
            })
        }
        console.log('artistsartistsartistsartists', artists);
    }

    return (
        <View style={styles.screen}>
            <View style={{ marginHorizontal: 20 }}>
                {
                    artists.map((item, index) => (
                        <Text key={index}>{item.name}</Text>
                    ))
                }
                <TextInput
                    placeholder='Add Name'
                    onChangeText={(e) => { setName(e) }}
                    value={name}
                />
                <TouchableOpacity onPress={() => { onAddItem() }}>
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default Home;


// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setName('');
//         artists.push({
//           id: nextId++,
//           name: name,
//         });
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }



// increment Array
// import { useState } from 'react';

// let initialCounters = [
//   0, 0, 0
// ];

// export default function CounterList() {
//   const [counters, setCounters] = useState(
//     initialCounters
//   );

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button onClick={() => {
//             handleIncrementClick(i);
//           }}>+1</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

