import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#0c0f1d',
      padding: 8,
    },
    alert:{
      marginBottom: 20,
      backgroundColor: '#343746',
      elevation: 8,
      justifyContent: 'center',
      height: 50,
      width: '100%',
      alignSelf: 'center',
    },
    alertContent:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    top:{
      height: '10%',
    },
    middle:{
      height: '50%',
      backgroundColor: '#343746'
    },
    imageContainer:{
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 10,
      width: '70%',
      height: '70%',
    },
    imageContent:{
      width: '100%',
      height: '100%',
    },
  })

  export default Styles