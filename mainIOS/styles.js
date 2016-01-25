'use strict';
import React, {
  StyleSheet
} from 'react-native';

export const colors = {
    blackColor: '#50514F',
    redColor: '#F25F5C',
    yellowColor: '#FFE066',
    blueColor: '#247BA0',
    greenColor: '#70C1B3',
};

const styleBasics = {
    mainTitle: {
    },
    body: {
        //backgroundColor: colors.yellowColor,
        flex: 1,
    },
    topBar: {
        height: 62,
        backgroundColor: '#000', //colors.blackColor,
    },
    topBar__h1: {
        textAlign: 'center',
        fontFamily: 'GothamRounded-Bold',
        color: 'white',
        fontSize: 20,
        marginTop: 30,
    },
    card: {
        justifyContent: 'center',
        marginTop: 4,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        borderColor: '#ffffff',
        borderWidth: 1,

        shadowColor: colors.blackColor, // 'rgba(0,0,0,.12)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 2,
        },
    },
    card__h1: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'GothamRounded-Bold',
        paddingLeft: 8,
        paddingTop: 8,
    },
    container: {
        flex: 1,
    },
    padd: {
        marginTop: 50,
    },
    h1: {
        fontSize: 40,
        marginTop: 80,
        color: 'black',
        fontFamily: 'Arial',
    },
    input: {
        height: 36,
        padding: 4,
        borderColor: '#fff', //colors.blueColor,
        borderWidth: 1,
        margin: 5,
        marginBottom: 0,
        fontFamily: 'GothamRounded-Book',
        fontSize: 14,
    },
    button: {
        height: 36,
        padding: 8,
        backgroundColor: colors.blueColor,
        borderColor: colors.blueColor,
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
    },
    button__text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'GothamRounded-Bold',
    },
};

export const styles = StyleSheet.create( styleBasics );
export const StyleOps = {
    join() {
        var args = [].slice.call( arguments );

        var f = args.reduce((obj, arg) => {
            if ( styleBasics[ arg ] ) {
                Object.assign( obj, styleBasics[ arg ] );
            }
            return obj;
        }, {})
console.log(StyleSheet.create(f));
        return StyleSheet.create({});
    }
}
