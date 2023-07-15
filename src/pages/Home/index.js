import React from 'react';
import NavBar from '../../components/NavBar';
import NavBarMobile from '../../components/NavBarMobile';
import Card from '../../components/Card/Card';
import { AreaContent } from './style';
import CardMobile from '../../components/CardMobile';
import Footer from '../../components/Footer';

const Home = () => {

    const [clientWindow, setClientWindow] = React.useState(window.innerWidth);

    window.addEventListener('resize', function() {
        setClientWindow(window.innerWidth);
    });

    return (
        <>
            {clientWindow < 1068 ? <NavBarMobile/> : <NavBar/>}
            <AreaContent>
                {clientWindow < 1068 ? (<>
                    <CardMobile
                        cardimg='img/wine-image.jpeg'
                        title='A história do vinho'
                        text='Entenda como esta bebida colonizou os continentes'
                        btntext='Leia a história do vinho'
                        btncolor='#FFFFFF'
                        btnbackcolor='#5E72EB'
                    />
                    <CardMobile
                        cardimg='img/winery-image.jfif'
                        title='Roteiro do vinho'
                        text='Vinícolas, Adegas e Restaurantes onde você pode degustar excelentes vinhos e passar bons momentos.'
                        btntext='Veja mais passeios'
                        btncolor='#000000'
                        btnbackcolor='#FFB038'
                    />
                    <CardMobile
                        cardimg='img/restaurant-image.jpg'
                        title='Bardega'
                        text='O Bardega foi o primeiro wine bar do Brasil. Seus sócios são apaixonados por vinhos e sempre gostaram de variedade.'
                        btntext='Conheça o restaurante'
                        btncolor='#000000'
                        btnbackcolor='#FE928F'
                    />
                    <CardMobile
                        cardimg='img/wine-accessories-image.jpg'
                        title='Acessórios'
                        text='Conheça os principais acessórios para vinho e suas funções'
                        btntext='Conheça os acessórios'
                        btncolor='#FFFFFF'
                        btnbackcolor='#1C1C1C'
                    />
                </>) : (
                    <>
                        <Card
                            cardimg='img/wine-image.jpeg'
                            title='A história do vinho'
                            text='Entenda como esta bebida colonizou os continentes'
                            btntext='Leia a história do vinho'
                            btncolor='#FFFFFF'
                            btnbackcolor='#5E72EB'
                        />
                        <Card
                            direction='row-reverse'
                            cardimg='img/winery-image.jfif'
                            title='Roteiro do vinho'
                            text='Vinícolas, Adegas e Restaurantes onde você pode degustar excelentes vinhos e passar bons momentos.'
                            btntext='Veja mais passeios'
                            btncolor='#000000'
                            btnbackcolor='#FFB038'
                        />
                        <Card
                            cardimg='img/restaurant-image.jpg'
                            title='Bardega'
                            text='O Bardega foi o primeiro wine bar do Brasil. Seus sócios são apaixonados por vinhos e sempre gostaram de variedade.'
                            btntext='Conheça o restaurante'
                            btncolor='#000000'
                            btnbackcolor='#FE928F'
                        />
                        <Card
                            direction='row-reverse'
                            cardimg='img/wine-accessories-image.jpg'
                            title='Acessórios'
                            text='Conheça os principais acessórios para vinho e suas funções'
                            btntext='Conheça os acessórios'
                            btncolor='#FFFFFF'
                            btnbackcolor='#1C1C1C'
                        />
                    </>
                ) }
                
            </AreaContent>
            <Footer/>
        </>
    );
}

export default Home;