import React from 'react';
import { FlatList, Animated,ActivityIndicator, Text, View , TouchableWithoutFeedback } from 'react-native';

export default class CustomItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scaleValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.scaleValue, {
            toValue: 1,
            duration : 600,
            delay: this.props.index * 350
        }).start();
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.state.scaleValue }}>
                { this.props.children }
            </Animated.View>
        );
    }
}
