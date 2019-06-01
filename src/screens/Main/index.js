import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import Theme from '../../contexts/Theme';
import { setBrand } from '../../store/actions/app';

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

const Main = ({ setBrand }) => {
  console.log('Main Screen Rendered');
  const { background, color } = useContext(Theme);

  return (
    <View style={[style.container, { backgroundColor: background }]}>
      <Text style={[style.text, { color }]}>MAIN PART</Text>
      <Button
        title="Change theme to green"
        onPress={() => setBrand('GREEN')}
      />
    </View>
  );
};

const mapDispatchToProps = {
  setBrand
};

export default connect(null, mapDispatchToProps)(Main);
