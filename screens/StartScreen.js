import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButtons';
function StartScreen (){
    return(
        <View style = {styles.inputContainer}>
            <TextInput style = {styles.numberInput} maxLength={2} keyboardType="number-pad"
             autoCapitalize='none'
             autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};
export default StartScreen;

const styles =  StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 30,
        backgroundColor: '#191970',
        elevation: 5,
    },
    numberInput: {
        height: 30,
        width: 30,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#4169E1',
        marginVertical: 6,
        marginHorizontal: 118,
        fontWeight: 'bold',
        color: '#6959CD',
        textAlign: 'center',
    }
});