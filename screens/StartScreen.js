import { TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButtons';
function StartScreen (){
    return(
        <View>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};
export default StartScreen;