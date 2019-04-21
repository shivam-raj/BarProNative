import React from 'react';
import { FlatList, ListView,Animated,ActivityIndicator, Text, View , TouchableWithoutFeedback, Easing } from 'react-native';
import CustomItem from './CustomItem'
import { Container ,List, Button , Header } from'native-base'

export default class DrinkCard extends React.Component {

  constructor (props) {
    super (props);
    this.state = { isLoading: true,page:1,scaleValue: new Animated.Value(0)}
  }

  componentDidMount(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.drinks,
        }, function(){
        });
        this.state.dataSource.sort();
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  actionOnRow(item) {
    var name = item.strIngredient1
    let url2 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name
    fetch(url2)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          page:2,
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
   var sizet=parseInt(this.props.size);
    return (
      
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          extraData={this.state.page}
          renderItem={({item}) =>
           <Button transparent light style={{marginLeft: "auto", marginRight: "auto",}}>
                <Text style={{height:sizet+20,fontSize:sizet,textAlign:'center'}}>{item.strIngredient1}</Text>
           </Button>

          }
          keyExtractor={({id}, index) => index.toString()}
        />
      </View>
    );
  }
}
