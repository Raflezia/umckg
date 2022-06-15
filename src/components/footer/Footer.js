import React from 'react';
import logo from "../../image/image 4 (Traced) (1).svg"
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
            <footer id="footer">

                <div className="container">
                    <div className="grid lgMedia:grid-cols-3 mdMedia:grid-cols-2 smMedia:grid-cols-1">
                        <div className="footer--start">
                            <img src={logo} alt="" className="footer--start--img"/>
                            <span className="footer--start--block">
                            <h1 className="footer--start--block--title">УМЦ
                                Государственной службы 
                                финансовой разведки при Министерстве
                                 финансов Кыргызской Республики</h1>

                                <ul className="footer--start--block--items">
                                    <NavLink to={"/"}><li>Главная</li></NavLink>
                                    <NavLink to={"/courses"}><li>Курсы</li></NavLink>
                                    <NavLink to={"/certificate"}><li>Проверка сертификатов</li></NavLink>
                                    <NavLink to={"/about"}><li>О нас</li></NavLink>
                                </ul>
                            </span>
                        </div>
                        <div className="footer--middle">
                            <h1 className="footer--middle--title">Связаться с нами</h1>
                            <p className="footer--middle--desc">
                                Если у вас возникли какие-либо
                                вопросы, пожалуйста, напишите
                                нам:
                                ashimovbayastan@gmail.com
                            </p>
                            <span className="footer--middle--icons">
                                {/*<SocialMediaIconsReact icon="instagram" borderColor="#white" iconColor="#01487E"*/}
                                {/*                       backgroundColor="white" url="https://instagram.com/" size="32"/>*/}
                                {/*<SocialMediaIconsReact icon="facebook" borderColor="white" iconColor="#01487E"*/}
                                {/*                       backgroundColor="white" url="https://facebook.com/" size="32"/>*/}
                                {/*<SocialMediaIconsReact icon="instagram" borderColor="white" iconColor="#01487E"*/}
                                {/*                       backgroundColor="white" url="https://telegram.com/" size="32"/>*/}
                                {/*<SocialMediaIconsReact icon="whatsapp" borderColor="white" iconColor="#01487E"*/}
                                {/*                       backgroundColor="white" url="https://whatsapp.com/" size="32"/>*/}
                                {/*<SocialMediaIconsReact borderColor="#01487E" icon="twitter"*/}
                                {/*                       iconColor="rgba(255,255,255,1)" backgroundColor="#01487E"*/}
                                {/*                       url="https://twitter.com/" size="32"/>*/}
                        </span>
                        </div>
                        <div className="footer--end">
                            <h1 className="footer--end--title">Контакты</h1>

                            <span className="footer--end--address">
                                <h5 className="footer--end--address--desc">(+996) 500 004912</h5>
                                <h5 className="footer--end--address--desc">info@umc.kg</h5>
                                <h5 className="footer--end--address--desc">Бишкек, ул. Тоголок-Молдо 21-а, здание Государственной службы финансовой разведки</h5>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>

    );
};

export default Footer;