import React, { Component } from 'react';
import { View,
  StyleSheet,
  TouchableOpacity,
  Image ,
  Text,
  Button,
   } from 'react-native';
import { Constants, ImagePicker, Permissions  } from 'expo';
//import RNFetchBlob from 'react-native-fetch-blob';


let apiUrl = 'https://lit-mountain-89099.herokuapp.com/predict';


export default class CameraComponent extends Component {
  static navigationOptions={
    title:'Camera',
    headerLeft: null
  }

  constructor(){
    super();
      this.state = {
          image: null,
          Displayprediction: " ",
          username: ""
  };
}









  takePicture = async () => {
    //await Permissions.askAsync(Permissions.CAMERA);
    //await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true
    });

        if (!result.cancelled) {

          this.setState({ image: result.uri })
          console.log(this.state.image)
          let base64Img = `${result.base64}`

          //Add your cloud name


          let message = {
            "image":base64Img,
          }
          console.log(message);
          fetch(apiUrl, {
            body: JSON.stringify(message),
            headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
            },
            method: 'POST',
          }).then(response => response.json())
            .then((responseJson) => {
              JSON.stringify(responseJson)
              alert(responseJson.prediction);
              this.setState({Displayprediction: responseJson.prediction})

          })
          //then(async response => {
          //    let data = await response()
          //    console.log(data);
              //self.setState({prediction: response.prediction})
              //return response.prediction
        .catch(err=>console.log(err))
      }

    }

    componentdidMount= async () =>
    {
      await Permissions.askAsync(Permissions.CAMERA);
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }


  render() {
    return (
      <View style={styles.container}>
      <Text style={{justifyContent:'center', paddingVertical:30, fontSize:40}}>Fruit picker</Text>
      <Text style={{justifyContent:'center', paddingVertical:20}}>Please press on the circle to open the camera</Text>
        <TouchableOpacity onPress={()=>this.takePicture()} style={{width: 200, alignSelf: 'center'}}>
          <View style={{backgroundColor:'transparent'}}>
            {this.state.image?
              <Image source={{uri: this.state.image}} style={{width: 200, height: 200, borderRadius: 100, alignSelf:'center'}}/>
              :
              <View style={{ backgroundColor: 'grey',width: 200, height: 200, borderRadius: 100}}/>
            }

      </View>
      </TouchableOpacity>


              <Text style={{justifyContent:'center'}}>Im guessing its a </Text>
              <Text style={{justifyContent:'center'}}>{this.state.Displayprediction} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },container2: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
    buttonContainer: {
        flex: 1,
        paddingVertical:10
    }
});
