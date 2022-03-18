import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';
import Reactotron from 'reactotron-react-native';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {

  const onPress=()=>{
    let options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_N4iEJ4CKOBrO4j',
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
      RazorpayCheckout.open(options).then((data) => {
        Reactotron.log({data});
      // handle success
      // alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      
      // handle failure
      Reactotron.log({error});
      // alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  return (
    <View style={{flex:1, backgroundColor:'lightBlue'}}>
    <TouchableOpacity onPress={onPress}>
      <Text>Sample Button</Text>
    </TouchableOpacity>
    </View>
  );
}
