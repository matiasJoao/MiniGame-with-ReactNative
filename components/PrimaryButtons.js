import { View, Text, Pressable, StyleSheet } from 'react-native';
function PrimaryButton({ children }) {
    return (
        <View style={styles.buttoncontainer}>
            <Pressable style={styles.buttoninnerconatainer} android_ripple={{ color: '#00008B' }}>
                <Text style={styles.textContainer}>{children}</Text>
            </Pressable>
        </View>
    )

}
export default PrimaryButton

const styles = StyleSheet.create({
    buttoncontainer: {
        borderRadius: 20,
        margin: 3,
        overflow: 'hidden',
    },
    buttoninnerconatainer: {
        backgroundColor: '#483D8B',
        paddingVertical: 4,
        paddingHorizontal: 7,
        elevation: 5,
    },
    textContainer: {
        color: '#0000CD',
        textAlign: 'center'
    }
});    
