import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const image = { uri: "http://s2.glbimg.com/vME2Bq4OSpm6f6IE16BhcVLR98U=/695x0/s.glbimg.com/po/tt2/f/original/2014/11/14/java-logo.jpg" };


const Pessoa = ({nome,quandoPressionar,link}) => (
    <View>
      <Pressable onPress={quandoPressionar}>

        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
)


const DATA = [
        {
            "id": 1,
            "email": "felipe.nogueira@linked.in",
            "first_name": "Felipe",
            "last_name": "Nogueira",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "Paula.barros@hotmail.com",
            "first_name": "Paula",
            "last_name": "Barros",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "Tainara.santos@outlook.com",
            "first_name": "Tainara",
            "last_name": "Santos",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "Jose.maria@msn.com",
            "first_name": "Jose",
            "last_name": "Maria",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 7,
            "email": "soraka.fumiko@linked.in",
            "first_name": "Soraka",
            "last_name": "Fumiko",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 10,
            "email": "Logan.p.paulo@gmail.com",
            "first_name": "Logan",
            "last_name": "Paulo",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        }
    ];

export default function App() {
  
  //função que renderiza cada item do FlatList
  function meuItem({item}){
    
    let nomeCompleto = item.first_name + " " + item.last_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              quandoPressionar={()=>(alert(item.email))}
              link={item.avatar}
      />
    )
  }
  

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    paddingTop: Constants.expoRuntimeVersion,
    backgroundColor: 'blue',
    padding: 20,
  },
  paragraph: {
    margin: 14,
    padding: 14,
    fontSize: 24,
    fontWeight: '200',
    textAlign: 'justify',
    backgroundColor: 'gray'
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
});
