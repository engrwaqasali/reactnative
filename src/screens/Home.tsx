import * as React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const Home = (props: Props) => {

    const { navigation } = props;

    return (

        <View style={styles.container}>
            <Text style={{color: '#595959'}}>Home Screen</Text>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323'
    }
});

export default Home;
