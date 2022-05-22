import * as React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const Splash = (props: Props) => {

    const { navigation } = props;

    React.useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('HomeStackNav'))
        }, 1000);
    }, [])

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={{color: '#898989'}}>Splash screen</Text>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212'
    }
});

export default Splash;
