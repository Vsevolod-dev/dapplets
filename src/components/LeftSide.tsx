import React, {FC} from 'react';
import RPlLogo from "../assets/RR_Logo.svg";
import rightArrow from "../assets/arrow-right.svg";
import codesandbox from "../assets/codesandbox.svg";
import heart from "../assets/heart.svg";
import grid from "../assets/grid.svg";
import users from "../assets/users.svg";
import trendingUp from "../assets/trending-up.svg";
import close from "../assets/close.svg";

const LeftSide: FC = () => {
    return (
        <div className="left-side">

            <div className="left-side__title">
                <img src={RPlLogo} alt="RPlLogo"/>
                <div>Dapplets Project<span>.</span></div>
                <img className={'left-side__right-arrow'} src={rightArrow} alt="rightArrow"/>
            </div>

            <div className={'left-side__tabs '}>
                <div className={'left-side__tab left-side__tab-active'}>
                    <img src={codesandbox} alt="codesandbox"/>
                    All Dapplets
                </div>
                <div className={'left-side__tab '}>
                    <img src={heart} alt="heart"/>
                    Editor’s Choice
                </div>
                <div className={'left-side__tab'}>
                    <img src={grid} alt="grid"/>
                    Essential Dapplets
                </div>
                <div className={'left-side__tab'}>
                    <img src={users} alt="users"/>
                    Social Networks
                </div>
                <div className={'left-side__tab'}>
                    <img src={trendingUp} alt="trendingUp"/>
                    Financial Dapplets
                </div>
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
    );
};

export default LeftSide;
