import React, {FC, useEffect, useRef, useState} from 'react';
import burger from "../assets/burger.png";
import close from "../assets/close.svg";
import {IDapplet} from "../@types/dapplet";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {ITag} from "../@types/tag";
import RRLogo from '../assets/RR_Logo.svg'

const Dapplet: FC<IDapplet> = (props) => {
    const expandedRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [installed, setInstalled] = useState('true' === localStorage.getItem(props.id));

    useEffect(() => {
        const expandedElem: HTMLDivElement = expandedRef.current as HTMLDivElement

        expandedElem!.style.padding = expanded ? '20px 0' : ''
        expandedElem!.style.transform = expanded ? 'translateY(0)' : 'translateY(-50%)'
        expandedElem!.style.height = expanded ? 'unset' : '0'
    }, [expanded]);

    const installHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        localStorage.setItem(props.id, `${!installed}`)
        setInstalled(p => !p)
    }

    const {tags: tagsName} = useSelector((state: RootState) => state.dapplets)
    const tagsForView: string[] = []
    props.tags.map((item) => {
        const correct = tagsName.find((tagName: ITag) => tagName.id === item)
        if (correct) tagsForView.push(correct.name)
    })

    return (
        <div className="dapplet__item" onClick={() => setExpanded(p => !p)}>
            <div className={'dapplet__main'}>
                <div className={'dapplet__actions'}>
                    <img src={burger} alt="burger"/>
                </div>
                <img
                    className={'dapplet__icon'}
                    width={50}
                    height={50}
                    src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${props.icon}`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null
                        currentTarget.src = RRLogo
                    }}
                    alt=""/>
                <div className={'dapplet__about'}>
                    <div className={'dapplet__title'}>{props.title}</div>
                    <div className={'dapplet__address'}>{props.address}</div>
                </div>
                <div className="dapplet__description">
                    {props.description}
                </div>
                <div className="dapplet__author">{props.author}</div>
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
                <button className={`dapplet__install ` + (installed ? 'dapplet__install-installed' : '')} onClick={(e) => installHandler(e)}>{installed ? 'installed' : 'install'}</button>
            </div>
            {
                <div className="dapplet__expanded" ref={expandedRef}>
                    <div className="dapplet__text-main">
                        <div>Lorem</div>
                        {props.text_1}
                    </div>
                    <div className="dapplet__other">
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_2}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_3}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_4}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_5}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_6}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_7}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_8}
                        </div>
                        <div className="dapplet__text-secondary">
                            <div>Lorem</div>
                            {props.text_9}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Dapplet;
