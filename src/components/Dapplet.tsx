import React, {FC} from 'react';
import burger from "../assets/burger.png";
import close from "../assets/close.svg";
import {IDapplet} from "../@types/dapplet";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {ITag} from "../@types/tag";

const Dapplet: FC<IDapplet> = ({icon, title, address, description, author, tags}) => {
    const {tags: tagsName} = useSelector((state: RootState) => state.dapplets)
    const tagsForView: string[] = []
    tags.map((item) => {
        const correct =  tagsName.find((tagName: ITag) => tagName.id === item)
        if (correct) tagsForView.push(correct.name)
    })

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
                        tagsForView.map((item, index) =>
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
