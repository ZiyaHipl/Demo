import React from 'react';
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';

let nextId = 0;

const Home = ({ navigation }) => {
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


    // this.focusListener = this.props.navigation.addListener("focus", () => {
    //     Helper.getData('userdata').then((responseData) => {
    //       if (responseData === null || responseData === 'undefined' || responseData === '') {
    //         return;
    //       }
    //       this.setState({
    //         userdata: responseData,
    //         Fname: responseData.first_name,
    //         Lname: responseData.last_name,
    //         mobile: responseData.mobile,
    //         email: responseData.email,
    //         startdate: responseData.dob,
    //         imagesPath:responseData.profile_image
    //       }, () => { console.log("============>userdatatata", JSON.stringify(responseData)) })
    //     })
    //   })

    const addarray = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { }}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={{ marginHorizontal: 20 }}>
                {/* {
                    artists.map((item, index) => (
                        <Text key={index}>{item.name}</Text>
                    ))
                } */}
                <FlatList
                    renderItem={addarray}
                    data={artists}
                    keyExtractor={(item, index) => index.toString()}
                />
                <TextInput
                    placeholder='Name Add'
                    value={name}
                    onChangeText={(e) => { setName(e) }}
                />
                <TouchableOpacity onPress={() => { navigation.navigate('Login')}}>
                    <Text>Hello</Text>
                </TouchableOpacity>
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

