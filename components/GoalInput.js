import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
      const [enteredGoalText, SetEnteredGoalText] = useState('');

      function goalnputHandler(enteredText) {
        SetEnteredGoalText(enteredText)
      }

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        SetEnteredGoalText("");
      }
    
      return(
        <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput 
            style={styles.textInput}
            placeholder='Your Course Goal!'
            onChangeText={goalnputHandler}
            value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>

            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>

            <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
            </View>
            
            </View>
           </View>
        </Modal>
        );


}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#311b6b',
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 16,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
})