import React from 'react';
import {View} from 'react-native';
import GraphBox from './Graphbox';
import FlexBackGround from './FlexBackground';

const Overview = () => {
    return(
        <View>
            <FlexBackGround>
                <View>
                    <GraphBox />
                    <GraphBox />
                    <GraphBox />
                    <GraphBox />
                    <GraphBox />

                </View>
            </FlexBackGround>
        </View>
    );
}

export default Overview;

// const styles = StyleSheet.create({
//     graphbox: {
//         margin: 10,
//         width: Dimensions.get('window').width / 3 - 50,
//         height: 300,
//         backgroundColor: '#eeeeee',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 30,
//       },
// })