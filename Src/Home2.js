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
    Image
} from 'react-native';
import Helper from './Component/Lib/Helper';
import NetInfo from "@react-native-community/netinfo";
import AlertMsg from './Component/Lib/AlertMsg';
import LoadImage from './Component/Lib/LoadImage';

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
        NetInfo.fetch().then(state => {
            if (!state.isConnected) {
                Helper.showToast(AlertMsg.error.INTERNET_CONNECTION);
                return false;
            } else {
                {
                    Helper.globalLoader.showLoader()
                    Helper.makeRequest({ url: 'https://dummyjson.com/products', method: "GET" }).then((response) => {
                        // if (response.status == 200) {
                        setDataSource(response.products)
                        setIsRefreshing(false)
                        Helper.globalLoader.hideLoader()
                        // }
                        // else {
                        //     Helper.globalLoader.hideLoader()
                        //     Helper.showToast(response.message);
                        // }

                    }).catch(err => {
                        this.globalLoader.hideLoader()
                    })
                }
            }
        })
    }

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
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.itemStyle}>
                    {item.brand}
                </Text>
                <LoadImage style={{ height: 200, width: 200, resizeMode: 'contain' }} source={{ uri: item.thumbnail }} />
            </View>
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