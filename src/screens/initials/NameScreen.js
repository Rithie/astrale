import React from "react";
import {StyleSheet, View, TextInput} from "react-native";
import {Button, Headline, Text, TextInput as PaperTextInput} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Logo from "../../svgs/Logo";
import Constellation from "../../svgs/Constellation";
import Aquarius from "../../svgs/Aquarius";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function NameScreen({navigation}) {
    const [name, setName] = React.useState();
    const buttonDisabled = !name || name.length < 2;
    return (
        <DefaultView>
            <Aquarius width={80} height={80} style={styles.aquarius}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>1/5</Text>
                </View>
            </View>
            <View style={{flex: 1}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>What is your name?</Headline>
                <Text style={styles.textText}>To give you a precise personal prediction please
                    let us know some info about you.</Text>
            </View>
            <View style={styles.logoContainer}>
                <Logo width={70} height={70}/>
            </View>
            <View style={styles.inputContainer}>
                <PaperTextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.inputStyle}
                    underlineColor='#ffffff00'
                    render={props => <TextInput {...props} style={{
                        textAlign: 'center',
                        marginTop: 10,
                        color: 'white',
                        fontSize: 30
                    }}/>}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" disabled={buttonDisabled} onPress={() => navigation.push('BirthDate')}>Continue</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    aquarius: {
        zIndex: 0, position: 'absolute', top: 20, right: 20, opacity: 0.2
    },
    counterContainer: {
        position: 'absolute', top: 20, left: 20
    },
    counterView: {
        padding: 5, borderRadius : 5, backgroundColor: '#00000050'
    },
    counterText : {
        letterSpacing: 2
    },
    textContainer: {
        flex: 1, alignSelf: 'center', paddingHorizontal: 20
    },
    textHeadline: {
        textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'
    },
    textText: {
        textAlign: 'center', paddingVertical: 5
    },
    logoContainer: {
        flex: 1, alignSelf: 'center', paddingVertical: 40, zIndex: 1
    },
    inputContainer: {
        flex: 1, paddingHorizontal: 20, opacity: 0.9
    },
    inputStyle: {
        borderRadius: 5,  fontSize: 30, textAlign: 'center',
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent : 'flex-end', marginBottom: 20
    }
})


export default NameScreen;