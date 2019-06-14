import React from 'react';
import { View,
         Text,
         StyleSheet
 } from 'react-native';





export default class SplashScreen extends React.Component{
  static navigationOptions={
    header: null
  }

  componentWillMount()
  {
    setInterval(() => {
      this.props.navigation.navigate('Picture');
    }, 5000)
  }
  render(){
    return(
      <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
}}>
    <Text style={styles.text}>
        Loading...
    </Text>


    <Text style={styles.smalltext}>
        warning this app needs internet connection to function
    </Text>
</View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    flex:1

  },
  text: {
    fontSize: 30,
    color:'white',
    justifyContent: 'center',
    alignSelf:'center'
  },
  smalltext: {
    fontSize: 10,
    color:'white',
    justifyContent: 'center',
    alignSelf:'center'
  }
})
