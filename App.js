import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Root} from 'native-base';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image, TouchableOpacity, ViewPagerAndroid, View} from 'react-native';
import {Card, CardItem, H1, H2, H3, Toast} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Platform from './orientation.js';
import {Dimensions} from 'react-native';


// yo rn-toolbox:assets --icon icon.png


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.setOrientation = this.setOrientation.bind(this);
    }

    componentWillMount() {
        this.setOrientation();
    }

    componentDidMount() {
        // Event Listener for orientation changes
        Dimensions.addEventListener('change', this.setOrientation);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.setOrientation);
    }

    render() {
        const {orientation} = this.state;
        console.info('orientation', orientation);
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row>
                            <Col>
                                <TouchableOpacity
                                    onPress={() => navigate('Book', {'name': 'gogga'})}>
                                    <Card>
                                        <CardItem header>
                                            <Text>Die Gogga Boek</Text>
                                        </CardItem>
                                        <CardItem cardBody>
                                            <Image source={require('./img/gogga/0.jpg')}
                                                   style={{height: 200, width: null, flex: 1}}
                                                   resizeMethod="auto"/>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                            {(orientation == 'landscape') ? <Col></Col> : null}
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }

    setOrientation() {
        console.info('setorientation');
        this.setState({
            orientation: Platform.isPortrait() ? 'portrait' : 'landscape'
        });
    }
}


class GoggaBoek extends Component {
    title = 'Die Gogga Boek';

    render() {
        const {orientation} = this.props;
        const fd = orientation == 'portrait' ? 'column' : 'row';
        return (
            <ViewPagerAndroid initialPage={0} style={{flex: 1}}>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{flex: 5, padding: 10}}>
                        Goggas doen ook goeie goed.{"\n"}
                        In my tuin bly gogga goed.{"\n"}
                        {"\n"}
                        Ek is nie vir hulle bang.{"\n"}
                        En wil hulle ook nie vang.{"\n"}
                        {"\n"}
                        Kom ons kyk 'n bietjie rond,{"\n"}
                        wat ons sien in die lug en op die grond.
                    </Text>
                    <Text style={{flex: 1}}>
                        <Icon name="long-arrow-left" size={10} color="#222" /> blaai om
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/3.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        Duisendpoot is glad nie groot,{"\n"}
                        maar loop vinnig deur die sloot.{"\n"}
                        {"\n"}
                        By is slim, hy kan heuning maak.{"\n"}
                        Vir hom is dit 'n maklike taak.
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/5.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        Naaldekoker het 'n plan,{"\n"}
                        hy vang insekte in die dam.
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/7.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        Lieweheersbesie het kolle op sy dop, {"\n"}
                        vir hom hoef jy nie te pas op.
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/9.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        As slak skrik hoef hy nie te vlug, {"\n"}
                        want hy dra sy huis op sy rug.
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/11.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        Kriek dink hy is die baas{"\n"}
                        van die plaas{"\n"}
                        met sy groot geraas.{"\n"}
                        {"\n"}
                        Erdwurms is skaam en bly onder die grond,{"\n"}
                        vir hulle is dit gesond.{"\n"}
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/13.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        Spinnekop gebruik sy kop {"\n"}
                        en vang 'n vuurvlieg wat vreeslik jok.
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{flex: 5, width: '100%', height: '100%'}} resizeMode="contain" source={require('./img/gogga/15.jpg')}/>
                    <Text style={{flex: 3, padding: 10}}>
                        Mier is flukser as 'n tier,{"\n"}
                        hulle hol op die grond {"\n"}
                        en dra kossies rond.
                    </Text>
                </View>

                <View style={{flex: 1, flexDirection: fd, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{flex: 5, padding: 10}}>
                        Goggas doen ook goeie goed.{"\n"}
                        Elke gogga groot en klein wil ook lewe.{"\n"}
                        Vir ons sit hul en bewe.{"\n"}
                        {"\n"}
                        As 'n gogga in jou huis verdwaal;{"\n"}
                        laat die goggas vry.{"\n"}
                        Dit maak hulle baie bly.
                    </Text>
                    <Text style={{flex: 1}}>
                        <Icon name="thumbs-o-up" size={14} color="#444" /> Die einde
                    </Text>

                </View>
            </ViewPagerAndroid>
        );
    }
}


class BookFactory {
    static build(nav, name, orientation) {
        switch (name) {
            case 'gogga':
                nav.setParams({title: 'Die Gogga Boek'});
                return <GoggaBoek orientation={orientation}/>;
            default:
                return undefined;
        }
    }
}


class BookScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.title}`,
        };
    };

    constructor(props) {
        super(props);
        this.buildBook = this.buildBook.bind(this);
    }

    componentWillMount() {
        this.buildBook();
    }

    componentDidMount() {
        // Event Listener for orientation changes
        Dimensions.addEventListener('change', this.buildBook);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.buildBook);
    }

    render() {
        console.log('render', this.state.book);
        return this.state.book;
    }

    buildBook() {
        console.log('buildBook', this.props.navigation.state.params.name);
        this.setState({
            book: BookFactory.build(
                this.props.navigation,
                this.props.navigation.state.params.name,
                Platform.isPortrait() ? 'portrait' : 'landscape'),
        });
    }
}


const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'My Boekies',
        },
    },
    Book: {
        path: '/book/:name',
        screen: BookScreen,
    },
});


export default () => <Root>
    <RootNavigator/>
</Root>;

