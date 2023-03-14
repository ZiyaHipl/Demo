import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TextInput
} from 'react-native';

const Home2 = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);
    const [offset, setOffset] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [search, setSearch] = useState('')

    const onRefresh = () => {
        setIsRefreshing(true)
        getData(false)
    }
    
    useEffect(() => {
        getData()
    }, [navigation]);
    const getData = () => {
        console.log('getData');
        setLoading(false);
        fetch(`http://universities.hipolabs.com/search?country=india`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('responseJsonresponseJson', responseJson);
                setDataSource(responseJson);
                setIsRefreshing(false)
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderFooter = () => {
        return (
            //Footer View with Load More button
            <View style={styles.footer}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={getData}
                    //On Click of button load more data
                    style={styles.loadMoreBtn}>
                    <Text style={styles.btnText}>Load More</Text>
                    {loading ? (
                        <ActivityIndicator
                            color="white"
                            style={{ marginLeft: 8 }} />
                    ) : null}
                </TouchableOpacity>
            </View>
        );
    };

    const ItemView = ({ item }) => {
        return (
            <Text
                style={styles.itemStyle}
                onPress={() => { isRefreshing == false ? getItem(item) : null }}>
                {item.name}
                {'.'}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        alert('Id : ' + item.alpha_two_code + ' Title : ' + item.web_pages[0]);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    enableEmptySections={true}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl
                            tintColor={'bluie'}
                            refreshing={isRefreshing}
                            onRefresh={() => onRefresh()}
                        />
                    }
                    keyboardShouldPersistTaps="handled"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default Home2;