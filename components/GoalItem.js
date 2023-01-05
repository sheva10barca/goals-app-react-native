import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
   return (
      <View style={styles.goalItem}>
         <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.pressedItem}
            android_ripple={{ color: '#210644' }}
         >
            <Text style={styles.goalText}>{props.text}</Text>
         </Pressable>
      </View>
   );
}

export default GoalItem;

const styles = StyleSheet.create({
   goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
   },
   pressedItem: {
      opacity: 0.5,
   },
   goalText: {
      color: 'white',
      padding: 8,
   },
});
