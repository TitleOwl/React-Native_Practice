import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

//https://dev-api.bdms.tech/pharmacist-profile/profile/conditionTreats

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://dev-api.bdms.tech/pharmacist-profile/profile/conditionTreats')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  },[])

  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
      <StatusBar style="auto" />
        <View style ={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 20
        }}></View>
        
        <FlatList
          data={data.data}
          keyExtractor={({ id }, index) => id}
          renderItem ={({ item }) => (
            <Text>
              {item.name} {"\n"}
              {item.nameLocal} {"\n"}
            </Text>
            )
          }
        />
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
