import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('./assets/img/bg.jpg')} style={styles.banner} />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}> Que hacer en paris</Text>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('./assets/img/actividad1.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./assets/img/actividad2.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./assets/img/actividad3.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./assets/img/actividad4.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./assets/img/actividad5.jpg')}
              style={styles.ciudad}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}> Los mejores alojamientos</Text>
        <View>
          <Image
            source={require('./assets/img/mejores1.jpg')}
            style={styles.mejores}
          />
        </View>
        <View>
          <Image
            source={require('./assets/img/mejores2.jpg')}
            style={styles.mejores}
          />
        </View>
        <View>
          <Image
            source={require('./assets/img/mejores3.jpg')}
            style={styles.mejores}
          />
        </View>

        <Text style={styles.titulo}> Hospedades en LA</Text>

        <View style= {styles.listado}>
          <View style= {styles.listadoItem}>
            <Image
              source={require('./assets/img/hospedaje1.jpg')}
              style={styles.mejores}
            />
          </View>
          <View style= {styles.listadoItem}>
            <Image
              source={require('./assets/img/hospedaje2.jpg')}
              style={styles.mejores}
            />
          </View>
          <View style= {styles.listadoItem}>
            <Image
              source={require('./assets/img/hospedaje3.jpg')}
              style={styles.mejores}
            />
          </View>
          <View style= {styles.listadoItem}>
            <Image
              source={require('./assets/img/hospedaje4.jpg')}
              style={styles.mejores}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1, //como el padre tiene la propiedad  flexDirection: 'row'} al agregar flex 1 a esta vista la imagen se mustra completa en un 100%
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
});

export default App;
