import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import { Ionicons,FontAwesome5,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

const markersHazardWaste = [
  {latlng:{latitude:47.06,longitude:-122.47}},
  {latlng:{latitude:47.06,longitude:-122.41}},
  {latlng:{latitude:47.06,longitude:-122.41}},
  {latlng:{latitude:47.12,longitude:-122.44}},
  {latlng:{latitude:47.06,longitude:-122.41}},
  {latlng:{latitude:47.21,longitude:-122.41}},
  {latlng:{latitude:47.21,longitude:-122.38}},
  {latlng:{latitude:47.03,longitude:-122.47}},
  {latlng:{latitude:47.3,longitude:-122.41}},
  {latlng:{latitude:47.21,longitude:-122.44}},
  {latlng:{latitude:47.27,longitude:-122.44}},
  {latlng:{latitude:47.09,longitude:-122.17}},
  {latlng:{latitude:47.09,longitude:-122.44}},
  {latlng:{latitude:47.18,longitude:-122.05}},
  {latlng:{latitude:47.18,longitude:-122.47}},
  {latlng:{latitude:47.48,longitude:-122.23}},
  {latlng:{latitude:47.27,longitude:-122.35}},
  {latlng:{latitude:47.03,longitude:-122.08}},
  {latlng:{latitude:47.6,longitude:-122.02}},
  {latlng:{latitude:47.18,longitude:-122.26}},
  {latlng:{latitude:47.51,longitude:-122.08}},
  {latlng:{latitude:47.03,longitude:-122.44}},
  {latlng:{latitude:47.06,longitude:-122.35}},
  {latlng:{latitude:47.36,longitude:-122.23}},
  {latlng:{latitude:47.45,longitude:-122.26}},
  {latlng:{latitude:47.75,longitude:-122.41}},
  {latlng:{latitude:47.06,longitude:-122.05}},
  {latlng:{latitude:47.24,longitude:-122.2}},
  {latlng:{latitude:47.33,longitude:-122.2}},
  {latlng:{latitude:47.18,longitude:-121.66}},
  {latlng:{latitude:47.45,longitude:-121.54}},
  {latlng:{latitude:47.66,longitude:-122.14}},
  {latlng:{latitude:47.51,longitude:-121.66}},
  {latlng:{latitude:47.51,longitude:-121.84}},
  {latlng:{latitude:47.3,longitude:-121.63}},
  {latlng:{latitude:47.06,longitude:-121.66}},
  {latlng:{latitude:47.87,longitude:-122.11}},
  {latlng:{latitude:48.17,longitude:-121.81}},
  {latlng:{latitude:48.2,longitude:-122.17}},
  {latlng:{latitude:47.78,longitude:-121.33}},
  {latlng:{latitude:47.57,longitude:-122.29}},
  {latlng:{latitude:47.87,longitude:-122.08}},
  {latlng:{latitude:48.05,longitude:-121.93}},
  {latlng:{latitude:47.81,longitude:-121.9}},
  {latlng:{latitude:48.35,longitude:-122.02}},
  {latlng:{latitude:47.27,longitude:-122.41}},
  {latlng:{latitude:48.23,longitude:-121.24}},
  {latlng:{latitude:47.87,longitude:-121.45}},

]

const markersRecyclingCenter = [
  {latlng:{latitude:47.043,longitude:-122.46}},
{latlng:{latitude:47.073,longitude:-122.46}},
{latlng:{latitude:47.073,longitude:-122.39999999999999}},
{latlng:{latitude:47.043,longitude:-122.42999999999999}},
{latlng:{latitude:47.073,longitude:-122.42999999999999}},
{latlng:{latitude:47.103,longitude:-122.30999999999999}},
{latlng:{latitude:47.132999999999996,longitude:-122.33999999999999}},
{latlng:{latitude:47.132999999999996,longitude:-122.42999999999999}},
{latlng:{latitude:47.103,longitude:-122.28}},
{latlng:{latitude:47.043,longitude:-122.30999999999999}},
{latlng:{latitude:47.223,longitude:-122.30999999999999}},
{latlng:{latitude:47.073,longitude:-122.28}},
{latlng:{latitude:47.373,longitude:-122.46}},
{latlng:{latitude:47.433,longitude:-122.33999999999999}},
{latlng:{latitude:47.132999999999996,longitude:-122.03999999999999}},
{latlng:{latitude:47.253,longitude:-122.19}},
{latlng:{latitude:47.163,longitude:-122.30999999999999}},
{latlng:{latitude:47.073,longitude:-122.13}},
{latlng:{latitude:47.253,longitude:-122.19}},
{latlng:{latitude:47.193,longitude:-122.36999999999999}},
{latlng:{latitude:47.403,longitude:-122.42999999999999}},
{latlng:{latitude:47.403,longitude:-121.89}},
{latlng:{latitude:47.702999999999996,longitude:-122.46}},
{latlng:{latitude:47.342999999999996,longitude:-122.28}},
{latlng:{latitude:47.643,longitude:-122.13}},
{latlng:{latitude:47.373,longitude:-122.39999999999999}},
{latlng:{latitude:47.613,longitude:-121.94999999999999}},
{latlng:{latitude:47.433,longitude:-122.22}},
{latlng:{latitude:47.193,longitude:-122.30999999999999}},
{latlng:{latitude:47.193,longitude:-121.67999999999999}},
{latlng:{latitude:47.793,longitude:-122.03999999999999}},
{latlng:{latitude:47.583,longitude:-121.77}},
{latlng:{latitude:47.103,longitude:-122.16}},
{latlng:{latitude:47.373,longitude:-121.44}},
{latlng:{latitude:47.312999999999995,longitude:-122.1}},
{latlng:{latitude:47.163,longitude:-122.39999999999999}},
{latlng:{latitude:48.153,longitude:-122.16}},
{latlng:{latitude:47.223,longitude:-121.97999999999999}},
{latlng:{latitude:47.913,longitude:-121.58999999999999}},
{latlng:{latitude:47.373,longitude:-122.33999999999999}},
{latlng:{latitude:47.103,longitude:-121.47}},
{latlng:{latitude:47.163,longitude:-122.30999999999999}},
{latlng:{latitude:47.073,longitude:-121.44}},
{latlng:{latitude:48.183,longitude:-122.00999999999999}},
{latlng:{latitude:47.312999999999995,longitude:-122.22}},
{latlng:{latitude:47.223,longitude:-121.41}},
{latlng:{latitude:48.422999999999995,longitude:-122.28}},
{latlng:{latitude:48.153,longitude:-121.38}},
]

const markersYardWaste = [
  {latlng:{latitude:47.053000000000004,longitude:-122.39}},
{latlng:{latitude:47.11300000000001,longitude:-122.39}},
{latlng:{latitude:47.053000000000004,longitude:-122.39}},
{latlng:{latitude:47.053000000000004,longitude:-122.36}},
{latlng:{latitude:47.143,longitude:-122.33}},
{latlng:{latitude:47.173,longitude:-122.27}},
{latlng:{latitude:47.173,longitude:-122.24000000000001}},
{latlng:{latitude:47.293000000000006,longitude:-122.24000000000001}},
{latlng:{latitude:47.173,longitude:-122.39}},
{latlng:{latitude:47.353,longitude:-122.12}},
{latlng:{latitude:47.263000000000005,longitude:-122.18}},
{latlng:{latitude:47.203,longitude:-122.09}},
{latlng:{latitude:47.323,longitude:-122.24000000000001}},
{latlng:{latitude:47.173,longitude:-122.18}},
{latlng:{latitude:47.353,longitude:-122.3}},
{latlng:{latitude:47.173,longitude:-122.09}},
{latlng:{latitude:47.533,longitude:-122.06}},
{latlng:{latitude:47.143,longitude:-121.88000000000001}},
{latlng:{latitude:47.353,longitude:-122.06}},
{latlng:{latitude:47.413000000000004,longitude:-122.39}},
{latlng:{latitude:47.413000000000004,longitude:-122.18}},
{latlng:{latitude:47.413000000000004,longitude:-122.33}},
{latlng:{latitude:47.503,longitude:-122.3}},
{latlng:{latitude:47.743,longitude:-122.15}},
{latlng:{latitude:47.683,longitude:-122.36}},
{latlng:{latitude:47.353,longitude:-121.76}},
{latlng:{latitude:47.353,longitude:-122.18}},
{latlng:{latitude:47.683,longitude:-121.97}},
{latlng:{latitude:47.473000000000006,longitude:-122.33}},
{latlng:{latitude:47.773,longitude:-121.7}},
{latlng:{latitude:47.713,longitude:-121.73}},
{latlng:{latitude:47.563,longitude:-122.42}},
{latlng:{latitude:47.803000000000004,longitude:-121.85000000000001}},
{latlng:{latitude:47.683,longitude:-121.82000000000001}},
{latlng:{latitude:47.473000000000006,longitude:-121.91}},
{latlng:{latitude:48.013000000000005,longitude:-122.09}},
{latlng:{latitude:47.053000000000004,longitude:-122.3}},
{latlng:{latitude:47.413000000000004,longitude:-121.37}},
{latlng:{latitude:47.503,longitude:-121.55}},
{latlng:{latitude:47.263000000000005,longitude:-121.67}},
{latlng:{latitude:47.383,longitude:-121.43}},
{latlng:{latitude:47.383,longitude:-121.82000000000001}},
{latlng:{latitude:47.173,longitude:-121.55}},
{latlng:{latitude:47.563,longitude:-121.64}},
{latlng:{latitude:48.253,longitude:-122.27}},
{latlng:{latitude:48.283,longitude:-121.58}},
{latlng:{latitude:47.953,longitude:-122.03}},
{latlng:{latitude:47.11300000000001,longitude:-121.22}}
]

const markersLandFill = [
  {latlng:{latitude:47.143,longitude:-122.365}},
{latlng:{latitude:47.173,longitude:-122.395}},
{latlng:{latitude:47.113,longitude:-122.365}},
{latlng:{latitude:47.202999999999996,longitude:-122.30499999999999}},
{latlng:{latitude:47.263,longitude:-122.365}},
{latlng:{latitude:47.233,longitude:-122.215}},
{latlng:{latitude:47.173,longitude:-122.395}},
{latlng:{latitude:47.233,longitude:-122.365}},
{latlng:{latitude:47.143,longitude:-122.335}},
{latlng:{latitude:47.353,longitude:-122.185}},
{latlng:{latitude:47.113,longitude:-122.155}},
{latlng:{latitude:47.202999999999996,longitude:-122.24499999999999}},
{latlng:{latitude:47.263,longitude:-122.335}},
{latlng:{latitude:47.503,longitude:-122.125}},
{latlng:{latitude:47.562999999999995,longitude:-122.30499999999999}},
{latlng:{latitude:47.503,longitude:-122.335}},
{latlng:{latitude:47.353,longitude:-122.365}},
{latlng:{latitude:47.113,longitude:-122.24499999999999}},
{latlng:{latitude:47.473,longitude:-122.125}},
{latlng:{latitude:47.202999999999996,longitude:-122.27499999999999}},
{latlng:{latitude:47.323,longitude:-122.065}},
{latlng:{latitude:47.323,longitude:-121.88499999999999}},
{latlng:{latitude:47.173,longitude:-121.855}},
{latlng:{latitude:47.803,longitude:-122.24499999999999}},
{latlng:{latitude:47.443,longitude:-121.735}},
{latlng:{latitude:47.562999999999995,longitude:-121.88499999999999}},
{latlng:{latitude:47.263,longitude:-122.065}},
{latlng:{latitude:47.833,longitude:-122.125}},
{latlng:{latitude:47.742999999999995,longitude:-121.825}},
{latlng:{latitude:47.353,longitude:-121.49499999999999}},
{latlng:{latitude:47.202999999999996,longitude:-121.585}},
{latlng:{latitude:47.353,longitude:-122.125}},
{latlng:{latitude:47.473,longitude:-121.435}},
{latlng:{latitude:47.683,longitude:-122.365}},
{latlng:{latitude:47.503,longitude:-122.27499999999999}},
{latlng:{latitude:47.443,longitude:-122.365}},
{latlng:{latitude:47.803,longitude:-121.975}},
{latlng:{latitude:48.132999999999996,longitude:-122.095}},
{latlng:{latitude:47.263,longitude:-121.91499999999999}},
{latlng:{latitude:47.833,longitude:-122.185}},
{latlng:{latitude:48.013,longitude:-121.225}},
{latlng:{latitude:48.132999999999996,longitude:-122.30499999999999}},
{latlng:{latitude:47.803,longitude:-122.155}},
{latlng:{latitude:47.742999999999995,longitude:-122.035}},
{latlng:{latitude:48.223,longitude:-122.24499999999999}},
{latlng:{latitude:47.623,longitude:-122.095}},
{latlng:{latitude:47.562999999999995,longitude:-121.465}},
{latlng:{latitude:47.772999999999996,longitude:-121.345}}
]

const donationLocations = [
  {latlng:{latitude:47.153000000000006,longitude:-122.445}},
{latlng:{latitude:47.153000000000006,longitude:-122.41499999999999}},
{latlng:{latitude:47.123000000000005,longitude:-122.35499999999999}},
{latlng:{latitude:47.123000000000005,longitude:-122.41499999999999}},
{latlng:{latitude:47.213,longitude:-122.29499999999999}},
{latlng:{latitude:47.153000000000006,longitude:-122.265}},
{latlng:{latitude:47.303000000000004,longitude:-122.445}},
{latlng:{latitude:47.273,longitude:-122.38499999999999}},
{latlng:{latitude:47.36300000000001,longitude:-122.41499999999999}},
{latlng:{latitude:47.123000000000005,longitude:-122.235}},
{latlng:{latitude:47.18300000000001,longitude:-122.265}},
{latlng:{latitude:47.303000000000004,longitude:-122.145}},
{latlng:{latitude:47.513000000000005,longitude:-122.05499999999999}},
{latlng:{latitude:47.543000000000006,longitude:-122.235}},
{latlng:{latitude:47.423,longitude:-122.265}},
{latlng:{latitude:47.333000000000006,longitude:-122.175}},
{latlng:{latitude:47.393,longitude:-122.205}},
{latlng:{latitude:47.213,longitude:-122.445}},
{latlng:{latitude:47.303000000000004,longitude:-122.41499999999999}},
{latlng:{latitude:47.723000000000006,longitude:-122.145}},
{latlng:{latitude:47.663000000000004,longitude:-122.32499999999999}},
{latlng:{latitude:47.243,longitude:-121.99499999999999}},
{latlng:{latitude:47.423,longitude:-121.99499999999999}},
{latlng:{latitude:47.633,longitude:-122.02499999999999}},
{latlng:{latitude:47.543000000000006,longitude:-121.93499999999999}},
{latlng:{latitude:47.543000000000006,longitude:-122.32499999999999}},
{latlng:{latitude:47.753,longitude:-122.235}},
{latlng:{latitude:47.93300000000001,longitude:-121.905}},
{latlng:{latitude:47.18300000000001,longitude:-122.32499999999999}},
{latlng:{latitude:47.453,longitude:-122.32499999999999}},
{latlng:{latitude:47.783,longitude:-122.41499999999999}},
{latlng:{latitude:47.393,longitude:-122.02499999999999}},
{latlng:{latitude:47.693000000000005,longitude:-122.265}},
{latlng:{latitude:47.543000000000006,longitude:-122.235}},
{latlng:{latitude:47.213,longitude:-122.115}},
{latlng:{latitude:47.453,longitude:-122.445}},
{latlng:{latitude:47.693000000000005,longitude:-121.845}},
{latlng:{latitude:48.263000000000005,longitude:-121.66499999999999}},
{latlng:{latitude:48.11300000000001,longitude:-121.30499999999999}},
{latlng:{latitude:47.753,longitude:-122.32499999999999}},
{latlng:{latitude:47.543000000000006,longitude:-121.725}},
{latlng:{latitude:48.023,longitude:-122.02499999999999}},
{latlng:{latitude:47.603,longitude:-121.485}},
{latlng:{latitude:47.753,longitude:-121.515}},
{latlng:{latitude:47.213,longitude:-122.35499999999999}},
{latlng:{latitude:47.93300000000001,longitude:-121.63499999999999}},
{latlng:{latitude:48.173,longitude:-122.115}},
{latlng:{latitude:47.843,longitude:-121.27499999999999}},
]
export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      style={{width:Dimensions.get('window').width,height: Dimensions.get('window').height}}

      >
        {markersHazardWaste.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            pinColor="red"
            >
            <View style = {{backgroundColor: 'gold', borderRadius: 20,padding: 5, borderWidth:1.5,borderColor:'white'}}>
              <FontAwesome5 name="biohazard"color="white" size={20}/>
            </View>
           
            </Marker>
        ))}
        {markersRecyclingCenter.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            pinColor="green"
            >
            <View style = {{backgroundColor: 'blue', borderRadius: 20,padding: 5, borderWidth:1.5,borderColor:'white'}}>
              <FontAwesome name="recycle"color="white" size={20}/>
            </View>
           
            </Marker>
        ))}
        {markersYardWaste.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            pinColor="yellow"
          >
            <View style = {{backgroundColor: "#008B8B", borderRadius: 20,padding: 5, borderWidth:1.5,borderColor:'white'}}>
              <FontAwesome name="tree" color="white" size={20}/>
            </View>
           
            </Marker>
        ))}
        {markersLandFill.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            pinColor="blue"
            >
            <View style = {{backgroundColor: 'green', borderRadius: 20,padding: 5, borderWidth:1.5,borderColor:'white'}}>
              <Ionicons name="ios-trash-bin" color="white" size={20}/>
            </View>
           
            </Marker>
        ))}
        {donationLocations.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            pinColor="blue"
            >
            <View style = {{backgroundColor: 'purple', borderRadius: 20,padding: 5, borderWidth:1.5,borderColor:'white'}}>
              <MaterialCommunityIcons name="charity" size={20} color="white" />
            </View>
           
            </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
