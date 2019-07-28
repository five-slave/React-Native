import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';



export default class CityList extends React.Component {
  static navigationOptions = {
    title: 'Weather #5',
    headerStyle : {
      backgroundColor: '#CEECF5',
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      search_cities: [],
      search_input : "",
    };
  }

  componentDidMount() {
    fetch('http://demo6468405.mockable.io/weather-crawlers/cities')
      .then(response => response.json())
      .then(cities => {
        console.log('cities =', cities.length);
        this.setState({
          cities : cities,
          search_cities : cities
        });
        
      });
  }

  onPressCity(item) {
    this.props.navigation.navigate(
      'Detail',
      {
        city: item
      }
    );
  }
  onKeyPressInput(){
    let search_input = this.state.search_input;
    let cities = this.state.cities;

    this.setState({
      search_cities : cities.filter(city=>city.indexOf(search_input)>-1)
    })


  }
  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <Input
          placeholder='City Name'
          onKeyPress={()=>this.onKeyPressInput()}
          onChangeText={(search_input) => this.setState({search_input})}
          value={this.state.search_input}
        />
        <FlatList style={styles.container}
                  renderItem={({ item }) => this.renderItem(item)}
                  keyExtractor={item => item}
                  data={this.state.search_cities}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },

  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor : 'white'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});