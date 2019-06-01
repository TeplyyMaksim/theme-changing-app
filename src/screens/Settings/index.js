import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Theme from '../../contexts/Theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

const Settings = ({  }) => {
  const { background, color } = useContext(Theme);

  return (
    <View style={[style.container, { backgroundColor: background }]}>
      <Text style={[style.text, { color }]}>SETTINGS PART</Text>
    </View>
  );
};

export default Settings;
