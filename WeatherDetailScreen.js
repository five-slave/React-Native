import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Right } from 'react-native';
import { Constants } from 'expo';
import CityList from './CityList';





export default class WeatherDetailScreen extends React.Component {
  
  static cityname;
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
      headerStyle : {
        backgroundColor: '#CEECF5',
      }
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', null);
    cityname = navigation.getParam('city', null);
    const appid = '60e21efcd8bb3bd710da3006556ad8e8';
    //const city = 'Daejeon';
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Image 
            style ={{height: '100%' , width: '100%'}}
            source = {require('./assets/data-loading.png') }/>
        </View>
      );
    }

    let celsius = this.state.main.temp - 273.15;
    let huminity = this.state.main.temp; //m
    let clouds = this.state.clouds.all;
    let windspeed = this.state.wind.speed;
    let winddirection = this.state.wind.deg; //degree
    
    
    if(clouds >= 90) //흐린날씨
    {
       if(huminity >= 80) 
      {
        if(celsius >= 20)
       {
          return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/cloudy-back-font.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection.toFixed(1)}º
                {"\n"}Huminity : {huminity.toFixed(1)}% </Text>
              <Image 
              style = {{width : '7%', height : '7%'}}
              source = {require('./assets/bad.png')}/>
              <Text style ={styles.textsmall}>불쾌지수가 높으니 주의하세요 </Text>
            </ImageBackground>
        );
       }
      }
      else {
        return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/cloudy-back-font.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection.toFixed(1)}º
                {"\n"}Huminity : {huminity.toFixed(1)}% </Text>
              <Text style ={styles.textsmall}>날씨가 뜨거우니 자외선에 주의하세요 </Text>
              
            </ImageBackground>
        );
      }
       if (celsius <= 5)
       {
        return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/cloud-winter-back-font.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection}º
                {"\n"}Huminity : {huminity}% </Text>
              <Text style ={styles.textsmall}>날씨가 추우니 감기에 조심하세요 </Text>
            </ImageBackground>
        );
       }
       else {
        return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/cloudy-back-font.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection}º
                {"\n"}Huminity : {huminity}% </Text>
            </ImageBackground>
        );
       }
      }
      else {
        if(huminity >= 80) 
      {
        if(celsius >= 20)
       {
          return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/clear-summer-back.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection.toFixed(1)}º
                {"\n"}Huminity : {huminity.toFixed(1)}% </Text>
              <Image 
              style = {{width : '7%', height : '7%'}}
              source = {require('./assets/bad.png')}/>
              <Text style ={styles.textsmall}>불쾌지수가 높으니 주의하세요 </Text>
              
            </ImageBackground>
        );
       }
      }
      else {
        return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/clear-summer-back.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection.toFixed(1)}º
                {"\n"}Huminity : {huminity.toFixed(1)}% </Text>
              <Text style ={styles.textsmall}>날씨가 뜨거우니 자외선에 주의하세요 </Text>
              
            </ImageBackground>
        );
      }
       if (celsius <= 5)
       {
        return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/clear-winter-back-font.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection}º
                {"\n"}Huminity : {huminity}% </Text>
              <Text style ={styles.textsmall}>날씨가 추우니 감기에 조심하세요 </Text>
            </ImageBackground>
        );
       }
       else {
        return (
          <ImageBackground
            style = {{height: '100%', width : '100%'}}
            source = {require('./assets/sunny-back-font.png')}>
            <Text style ={styles.textcityname}>{"\n\n\n\n\n\n"}{cityname}</Text>
            <Text style ={styles.texttemp}> {celsius.toFixed(1)}º</Text>
            <Text style ={styles.textinfo}>Cloudiness : {clouds}%
                {"\n"}Wind Speed : {windspeed}m/s
                {"\n"}Wind Direction : {winddirection}º
                {"\n"}Huminity : {huminity}% </Text>
            </ImageBackground>
        );
       }
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff0000',
    marginTop: Constants.statusBarHeight,
  },
  texttemp :{
    fontSize : 45,
    textAlign: 'center',
    color : 'black',
    },
    textcityname:{
      fontSize : 35,
      textAlign : 'center',
      color : 'black'
    },
    textinfo :{
      fontSize : 25,
      textAlign : 'left',
      color : 'black'
    },  
    textsmall :{
      fontSize : 20,
      flexDirection: 'row',
      color : 'black'
    }
  
});