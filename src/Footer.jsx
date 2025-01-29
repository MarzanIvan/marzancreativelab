import {useEffect} from "react";
import './Footer.css'

function Footer() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../src/min_main.js';
        script.async = true;
        const mobilescript = document.createElement('script');
        mobilescript.src = '../src/custom.js';
        mobilescript.async = true;
        document.body.appendChild(mobilescript);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(mobilescript);
        };
    }, []);
    return (
        <>
            <footer aria-label="primary" className="StaticFooter-footerContainer-jf4">
                <div className="StaticFooter-footerContent-OnA">
                    <div className="StaticFooter-mainFooterContainer-Bqa">
                        <div className="StaticFooter-behanceLinkContainer-qBT">
                            <a href="/" className="hidden-mobile logotype__link borderless">
                                <svg width='308' height='112'
                                     xmlns="http://www.w3.org/2000/svg" x="0px"
                                     y="0px" viewBox="0 0 140 41">
                                    <g id="Layer_1-2">
                                        <g>
                                            <path className="st0" d="M9,24c1.5,0,2.8-0.5,3.8-1.6l1.1,2.7c-0.6,0.6-1.4,1-2.3,1.4C10.7,26.8,9.8,27,8.9,27c-2.3,0-4.2-0.8-5.8-2.4
			c-1.6-1.6-2.4-3.5-2.4-5.7s0.8-4.1,2.4-5.7c1.6-1.6,3.5-2.4,5.8-2.4c0.9,0,1.8,0.2,2.7,0.5c0.9,0.3,1.7,0.8,2.3,1.3l-1.1,2.7
			c-1.1-1-2.3-1.6-3.8-1.6s-2.7,0.5-3.8,1.5s-1.6,2.2-1.6,3.6s0.5,2.6,1.6,3.6C6.3,23.5,7.5,24,9,24L9,24z"/>
                                            <path className="st0" d="M19.1,17.6c0.4-0.8,1-1.5,1.8-2s1.8-0.7,2.9-0.8v3.5c-0.8-0.2-1.5-0.2-2.2,0c-0.7,0.2-1.3,0.6-1.8,1.2
			c-0.5,0.6-0.8,1.4-0.8,2.3v4.8h-2.9V15.2h2.9C19.1,15.2,19.1,17.6,19.1,17.6z"/>
                                            <path className="st0" d="M36.3,20.9c0,0.2,0,0.5,0,0.9H28c0.2,0.8,0.6,1.4,1.2,1.9s1.3,0.7,2.2,0.7c1.3,0,2.4-0.4,3.4-1.1l0.8,2.5
			c-0.1,0.1-0.3,0.2-0.5,0.3s-0.7,0.3-1.4,0.5c-0.7,0.2-1.5,0.3-2.3,0.3c-2.1,0-3.7-0.6-4.8-1.7c-1.1-1.1-1.6-2.6-1.6-4.4
			s0.5-3.2,1.5-4.4c1-1.1,2.5-1.7,4.4-1.7c1.8,0,3.1,0.5,4.1,1.6S36.3,19,36.3,20.9L36.3,20.9z M28,19.6h5.1c0-0.5-0.2-1.1-0.7-1.5
			c-0.5-0.5-1.1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.8,0.7C28.3,18.6,28,19.1,28,19.6L28,19.6z"/>
                                            <path className="st0" d="M46.9,15.2h2.9v11.4h-2.9v-1.2C46,26.5,44.8,27,43.4,27c-1.6,0-2.9-0.6-4-1.8c-1.1-1.2-1.7-2.6-1.7-4.3
			s0.6-3.1,1.7-4.3c1.1-1.2,2.5-1.8,4-1.8c1.4,0,2.6,0.5,3.5,1.6C46.9,16.5,46.9,15.2,46.9,15.2z M41.6,23.1
			c0.6,0.6,1.3,0.9,2.2,0.9s1.6-0.3,2.2-0.9c0.6-0.6,0.9-1.3,0.9-2.2s-0.3-1.6-0.9-2.2s-1.3-0.9-2.2-0.9s-1.6,0.3-2.2,0.9
			c-0.6,0.6-0.9,1.3-0.9,2.2C40.7,21.8,41,22.5,41.6,23.1z"/>
                                            <path className="st0" d="M53.5,23.4v-5.6h-1.5v-2.6h1.5v-4h2.9v4h2.2v2.6h-2.2v4.8c0,0.8,0.2,1.3,0.6,1.5c0.4,0.2,0.9,0.2,1.6,0v2.6
			C58,26.9,57.3,27,56.5,27c-1,0-1.8-0.3-2.2-1S53.5,24.5,53.5,23.4L53.5,23.4z"/>
                                            <path className="st0" d="M64.1,13.2c-0.4,0.4-0.9,0.6-1.4,0.6c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.6,0.2-1,0.6-1.4
			c0.4-0.4,0.9-0.6,1.4-0.6c0.6,0,1,0.2,1.4,0.6c0.4,0.4,0.6,0.9,0.6,1.4C64.7,12.3,64.5,12.8,64.1,13.2z M61.2,26.6V15.2h2.9v11.4
			H61.2z"/>
                                            <path className="st0"
                                                  d="M70.2,26.6l-4.8-11.4h3.3l2.6,7l2.6-7h3.3l-4.8,11.4L70.2,26.6L70.2,26.6z"/>
                                            <path className="st0" d="M88.9,20.9c0,0.2,0,0.5,0,0.9h-8.3c0.2,0.8,0.6,1.4,1.2,1.9c0.6,0.5,1.3,0.7,2.2,0.7c1.3,0,2.4-0.4,3.4-1.1
			l0.8,2.5c-0.1,0.1-0.3,0.2-0.5,0.3c-0.2,0.1-0.7,0.3-1.4,0.5c-0.7,0.2-1.5,0.3-2.3,0.3c-2.1,0-3.7-0.6-4.8-1.7
			c-1.1-1.1-1.6-2.6-1.6-4.4s0.5-3.2,1.5-4.4c1-1.1,2.5-1.7,4.4-1.7c1.8,0,3.1,0.5,4.1,1.6C88.4,17.5,88.9,19,88.9,20.9L88.9,20.9z
			 M80.6,19.6h5.1c0-0.5-0.2-1.1-0.7-1.5c-0.5-0.5-1.1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.8,0.7C80.9,18.6,80.6,19.1,80.6,19.6L80.6,19.6
			z"/>
                                            <path className="st0" d="M101,23.7h6.2v2.9h-9.2V11.2h2.9V23.7L101,23.7z"/>
                                            <path className="st0" d="M117.8,15.2h2.9v11.4h-2.9v-1.2c-0.9,1.1-2.1,1.6-3.5,1.6c-1.6,0-2.9-0.6-4-1.8c-1.1-1.2-1.7-2.6-1.7-4.3
			s0.6-3.1,1.7-4.3c1.1-1.2,2.5-1.8,4-1.8c1.4,0,2.6,0.5,3.5,1.6C117.8,16.5,117.8,15.2,117.8,15.2z M112.5,23.1
			c0.6,0.6,1.3,0.9,2.2,0.9s1.6-0.3,2.2-0.9c0.6-0.6,0.9-1.3,0.9-2.2s-0.3-1.6-0.9-2.2c-0.6-0.6-1.3-0.9-2.2-0.9s-1.6,0.3-2.2,0.9
			c-0.6,0.6-0.9,1.3-0.9,2.2C111.6,21.8,111.9,22.5,112.5,23.1z"/>
                                            <path className="st0" d="M129.9,14.9c1.6,0,2.9,0.6,4,1.8c1.1,1.2,1.7,2.6,1.7,4.3s-0.6,3.1-1.7,4.3c-1.1,1.2-2.4,1.8-4,1.8
			c-1.4,0-2.6-0.5-3.5-1.6v1.2h-2.9V10.5h2.9v6C127.4,15.4,128.5,14.9,129.9,14.9L129.9,14.9z M127.4,23.1c0.6,0.6,1.3,0.9,2.2,0.9
			c0.9,0,1.6-0.3,2.2-0.9c0.6-0.6,0.9-1.3,0.9-2.2s-0.3-1.6-0.9-2.2c-0.6-0.6-1.3-0.9-2.2-0.9c-0.9,0-1.6,0.3-2.2,0.9
			c-0.6,0.6-0.9,1.3-0.9,2.2C126.5,21.8,126.8,22.5,127.4,23.1z"/>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <span className="whitespan">
                                © 2025. Creative Lab.<br/> Ваш путеводитель<br/> в сфере дизайна.
                            </span>
                        </div>
                        <div className="StaticFooter-sectionContainer-Kyo">

                            <div className="StaticFooter-footerSection-E69">
                            <div className="StaticFooter-footerSectionHeader-xFg">Creative lab</div>
                                <div>
                                    <ul>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="/projects"><p
                                            className="FooterLinks-text-3wz">Проекты</p></a></li>

                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="/order">
                                            <p className="FooterLinks-text-3wz">Оформить заказ</p></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="StaticFooter-footerSection-E69">
                                <div className="StaticFooter-footerSectionHeader-xFg">Social</div>
                                <div>
                                    <ul>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="http://t.me/dieserpaniker" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>Telegram
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://vk.com/ioannweb" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>VK
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://wa.me/79628774982" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>WhatsApp
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://github.com/MarzanIvan" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>Github
                                            </p>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer