import React, {FC, RefObject} from 'react';
import RPlLogo from "../assets/RR_Logo.svg";
import rightArrow from "../assets/arrow-right.svg";
import codesandbox from "../assets/codesandbox.svg";
import heart from "../assets/heart.svg";
import grid from "../assets/grid.svg";
import users from "../assets/users.svg";
import trendingUp from "../assets/trending-up.svg";
import close from "../assets/close.svg";

type LeftSideProps = {
    leftSideRef: RefObject<HTMLDivElement>
    hideShow: (side: 'left' | 'right', value: boolean) => void
}

const LeftSide: FC<LeftSideProps> = ({leftSideRef, hideShow}) => {
    const tabs = [
        {
            img: codesandbox,
            text: 'All Dapplets'
        },
        {
            img: heart,
            text: 'Editor’s Choice'
        },
        {
            img: grid,
            text: 'Essential Dapplets'
        },
        {
            img: users,
            text: 'Social Networks'
        },
        {
            img: trendingUp,
            text: 'Financial Dapplets'
        }
    ]

    return (
        <div>
            <div className={'echo__left-side'}/>
            <div className="left-side" ref={leftSideRef}>
                <div className="left-side__title">
                    <img src={RPlLogo} alt="RPlLogo"/>
                    <div className={'left-side__text'}>Dapplets Project<span>.</span></div>
                    <img className={'left-side__right-arrow'} src={rightArrow} alt="rightArrow" onClick={() => hideShow('left', true)}/>
                </div>

                <div className={'left-side__tabs '}>
                    {
                        tabs.map((tab, index) =>
                            <div
                                key={index}
                                className={'left-side__tab tab ' + (index === 0 ? 'left-side__tab-active' : '')}
                                onClick={() => hideShow('left', false)}
                            >
                                <img src={tab.img} alt="trendingUp"/>
                                <span className={'tab__text'}>{tab.text}</span>
                            </div>
                        )
                    }
                </div>

                <hr/>

                <div className="my-lists">
                    <div className="my-lists__title">My lists</div>
                    <ul className="my-lists__list">
                        {
                            [
                                {name: 'TOP-10 Twitter Dapplets', owner: 'Me'},
                                {name: 'Best Financial dapplets by Jack', owner: 'Jack'},
                                {name: 'TOP-10 Twitter Dapplets', owner: 'Me'}
                            ].map((item, index) =>
                                <li key={index} className="my-lists__item">
                                    {item.name} (<span>{item.owner}</span>)
                                </li>
                            )
                        }
                    </ul>
                </div>

                <hr/>

                <div className="tags">
                    <div className="tags__title">My tags</div>
                    <ul className='tags__list'>
                        {
                            ['Twitter', 'Social Media', 'Top 10', 'Finances', 'Media', 'Test', 'ToDo'].map((item, index) =>
                                // ToDo: change index to id
                                <li key={index} className={'tags__item tags__item-purple'}>
                                    {item}
                                    <img className={'close-icon'} src={close} alt="close"/>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
