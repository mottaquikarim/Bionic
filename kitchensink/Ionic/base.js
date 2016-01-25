export const variables = {

    $headerHeight: 44,
    $headerH1Size: 20,
    $h1Size: 20,

    $seperator: '#ddd',
    $seperatorWidth: 1,

    $greenColor: '#33cd5f',
    $whiteColor: '#fff',
    $lightColor: '#f5f5f5',
    $blackColor: '#000',
    $blueColor: '#387ef5',
    $lightBlueColor: '#11c1f3',
    $greenColor: '#33cd5f',
    $yellowColor: '#ffc900',
    $redColor: '#ef473a',
    $purpleColor: '#886aea',
    $darkColor: '#444',

    $blueBorder: '#0c60ee',
    $lightBlueBorder: '#0a9dc7',
    $greenBorder: '#28a54c',
    $yellowBorder: '#e6b500',
    $redBorder: '#e42112',
    $purpleBorder: '#6b46e5',
    $darkBorder: '#111',

    $statusBarHeight: 22,

    $buttonPad: 12,
    $buttonRadius: 2,
    $buttonMarg: 8,

    $listPadLeft: 8,
    $listPadRight: 8,
    $listPadTop: 10,
    $listPadBottom: 10,
};

export const Utils = {
    join() {
        var args = [].slice.call( arguments );

        return args.reduce(( stylesheet, arg ) => {
            stylesheet = Object.assign({}, stylesheet, arg);

            return stylesheet;
        }, {});
    }
}
