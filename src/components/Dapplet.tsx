import React, {FC} from 'react';
import burger from "../assets/burger.png";
import close from "../assets/close.svg";

export  interface DappletPropsInterface {
    id: string
    icon: string
    title: string
    author: string
    rating: number
    address: string
    released: string
    downloads: number
    description: string
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
    text_8: string
    text_9: string
    tags: string[]
}

const Dapplet: FC<DappletPropsInterface> = ({icon, title, address, description, author}) => {
    return (
        <div className="dapplet__item">
            <div className={'dapplet__actions'}>
                <img src={burger} alt="burger"/>
            </div>
            <img className={'dapplet__icon'} width={50} height={50} src={` https://dapplets-hiring-api.herokuapp.com/api/v1/files/${icon}`} alt=""/>
            <div className={'dapplet__about'}>
                <div className={'dapplet__title'}>{title}</div>
                <div className={'dapplet__address'}>{address}</div>
            </div>
            <div className="dapplet__description">
                {description}
            </div>
            <div className="dapplet__author">{author}</div>
            <div className="dapplet__tags tags">
                <ul className='dapplet__tags tags__list'>
                    {
                        ['Social Media', 'Finances', 'Twitter', 'Top 100',].map((item, index) =>
                            // ToDo: change index to id
                            <li key={index} className={'tags__item tags__item-green'}>
                                {item}
                                <img className={'close-icon'} src={close} alt="close"/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <button className="dapplet__install">install</button>
        </div>
    );
};

export default Dapplet;
