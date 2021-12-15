import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#181926',
        // alignItems: 'center',
        justifyContent: 'center',
    },

    bg:{
        width: '100%',
        height: '100%',
        position: 'absolute'
    },

    img: {
        alignSelf: 'center',
        marginBottom: 50,
    },

    press: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop: 20,
    },

    button:{
        borderWidth: 1,
        borderColor: "#009899",
        borderRadius: 15,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 25,
    },

    text :{
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Montserrat-Bold'
    }

    
})