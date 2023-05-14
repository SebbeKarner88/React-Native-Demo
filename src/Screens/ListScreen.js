import React from 'react';
import {View, Dimensions, ImageBackground, FlatList} from "react-native";
import Header from "../components/Header";
import TitleBox from "../components/TitleBox";
import GameBox from "../components/GameBox";

const ListScreen = ({navigation}) => {

    const gameList = [
        {
            key: 1,
            title: 'Bloodborne',
            system: 'PS5',
            rating: '4.3',
            image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg',
            link: 'https://www.playstation.com/en-se/games/bloodborne/'
        },
        {
            key: 2,
            title: 'God of War',
            system: 'PC, PS5',
            rating: '4.9',
            image: 'https://assetsio.reedpopcdn.com/god-of-war-ragnarok-header.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
            link: 'https://www.playstation.com/sv-se/games/god-of-war-ragnarok/'
        },
        {
            key: 3,
            title: 'GTA 5',
            system: 'PS5',
            rating: '5.0',
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=780&thumb=false',
            link: 'https://www.rockstargames.com/gta-v'
        },
        {
            key: 4,
            title: 'R.D.R 2',
            system: 'PS5, XBOX',
            rating: '4.7',
            image: 'https://www.xboxgames.in/wp-content/uploads/2021/04/rdr2.jpeg',
            link: 'https://www.rockstargames.com/reddeadredemption2/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2Freddeadredemption2%2F&options=&locale=en_us'
        },
        {
            key: 5,
            title: 'Half-Life',
            system: 'PC',
            rating: '5.0',
            image: 'https://assets-prd.ignimgs.com/2022/01/26/half-life-generic-1643168587518.jpg?width=300&crop=1%3A1%2Csmart',
            link: 'https://www.half-life.com/sv/halflife'

        },
        {
            key: 6,
            title: 'Zelda',
            system: 'Switch',
            rating: '4.9',
            image: 'https://sm.ign.com/t/ign_nordic/cover/t/the-legend/the-legend-of-zelda-tears-of-the-kingdom_cpat.128.jpg',
            link: 'https://www.zelda.com/'
        },
        {
            key: 7,
            title: 'Jedi: S',
            system: 'PS5, XBOX',
            rating: '4.3',
            image: 'https://gaming-cdn.com/images/products/13976/616x353/star-wars-jedi-survivor-deluxe-edition-deluxe-edition-pc-game-origin-cover.jpg?v=1683557225',
            link: 'https://www.playstation.com/sv-se/games/star-wars-jedi-survivor/?emcid=pa-co-422363&gad=1&gclid=CjwKCAjw6vyiBhB_EiwAQJRophPupfMWhwT1KChmwcTwXWaro-hVWOw2Q12ORPAQR-fOYJYoytg9WhoCUTcQAvD_BwE&gclsrc=aw.ds'
        },
        {
            key: 8,
            title: 'Hogwarts',
            system: 'PS5',
            rating: '4.3',
            image: 'https://i0.wp.com/onemoregame.ph/wp-content/uploads/2023/02/hogwarts-legacy-key-art-2.jpg?fit=1000%2C538&ssl=1',
            link: 'https://www.hogwartslegacy.com/sv-se'
        },
        {
            key: 9,
            title: 'TBA',
            system: '-',
            rating: '0.0',
            image: 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg',
            link: 'https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg'
        }
    ]

    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
            source={require('../../assets/background-grey.jpg')}>
            <View>
                <Header navigation={navigation}/>
                <TitleBox title={'Games List'}/>

                <View style={{height: 560, marginTop: 10}}>
                    <FlatList
                        data={gameList}
                        keyExtractor={(item => item.key)}
                        renderItem={({item}) =>
                            <GameBox title={item.title} system={item.system} rating={item.rating}
                                     image={item.image} link={item.link}/>
                        }/>
                </View>
            </View>
        </ImageBackground>
    )

};


export default ListScreen;