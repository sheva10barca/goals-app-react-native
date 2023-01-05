import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
   const [modalIsVisible, setModalIsVisible] = useState(false);
   const [goals, setGoals] = useState([]);

   function startAddGoalHandler() {
      setModalIsVisible(true);
   }

   function endAddGoalHandler() {
      setModalIsVisible(false);
   }

   function addGoalHandler(enteredGoalText) {
      setGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
      endAddGoalHandler();
   }

   function deleteGoalHandler(id) {
      setGoals((currentGoals) => {
         return currentGoals.filter((goal) => goal.id !== id);
      });
   }

   return (
      <>
         <StatusBar style='light' />
         <View style={styles.appContained}>
            <Button title='Add New Goal' color='#b180f0' onPress={startAddGoalHandler} />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
            <View style={styles.goalsContainer}>
               <FlatList
                  data={goals}
                  renderItem={(itemData) => {
                     return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />;
                  }}
                  keyExtractor={(item, index) => {
                     return item.id;
                  }}
               />
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   appContained: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
   },
   goalsContainer: {
      flex: 5,
   },
});
