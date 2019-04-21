import React from 'react';
import { FlatList, Image,ListView,Animated,ActivityIndicator,Text, View,TouchableWithoutFeedback, Easing } from 'react-native';
import { Container ,List, Button  ,Header,DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon} from 'native-base';

export default class DrinkDeck extends React.Component {

  constructor (props) {
    super (props);
    this.state = { isLoading: true,page:1,scaleValue: new Animated.Value(0)}
  }

  componentDidMount(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.drinks,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
  
    return (
      
      <Container>
        <View>
        <DeckSwiper
          dataSource={this.state.dataSource}
          renderItem={item =>
           
                      <Card style={{ elevation: 3 }}>
                      <CardItem>
                        <Left>
                          <Thumbnail source={{uri : item.strDrinkThumb}} />
                          <Body>
                            <Text>{item.strDrink}</Text>
                            <Text note>{this.props.title}</Text>
                          </Body>
                        </Left>
                      </CardItem> 
                      <CardItem cardBody>
                        <Image style={{ height: 300, flex: 1 }} source={{ uri : item.strDrinkThumb }} />
                      </CardItem>
                      <CardItem>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.strDrink}</Text>
                      </CardItem>
                    </Card>

          }
        />

      </View>
      </Container>
    );
  }
}
