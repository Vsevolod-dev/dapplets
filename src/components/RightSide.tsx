import React, {FC, RefObject} from 'react';
import rightArrow from "../assets/arrow-right.svg";
import close from "../assets/close.svg";
import closeOrange from "../assets/close_orange.svg";

type RightSideProps = {
    rightSideRef: RefObject<HTMLDivElement>
    hideShow: (side: 'left' | 'right', value: boolean) => void
}

const RightSide: FC<RightSideProps> = ({rightSideRef, hideShow}) => {
    return (
        <div>
            <div className="echo__left-right"/>
            <div className="right-side" ref={rightSideRef}>
            <img className={'right-side__right-arrow'} src={rightArrow} alt="rightArrow" onClick={() => hideShow('right', true)}/>
            <div className="right-side__title title">Dapplet Settings</div>
            <div className="create">
                <div className="create__title">Create new list</div>
                <div className={'create__content'}>
                    <input type="text" className="create__input" placeholder={'List Name'}/>
                    <button className="create__btn">Create</button>
                </div>
            </div>
            <div className="create">
                <div className="create__title">New tag</div>
                <div className={'create__content'}>
                    <input type="text" className="create__input" placeholder={'Tag name'}/>
                    <button className="create__btn">Create</button>
                </div>
            </div>
            <div className="tags">
                <div className="tags__title title">My tags</div>
                <ul className='tags__list'>
                    {
                        ['Twitter', 'Social Media', 'Top 10', 'Finances'].map((item, index) =>
                            // ToDo: change index to id
                            <li key={index} className={'tags__item tags__item-green'}>
                                {item}
                                <img className={'close-icon'} src={close} alt="close"/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="tags">
                <div className="tags__title title">Community tags</div>
                <ul className='tags__list'>
                    {
                        ['Social', 'Top 100', 'Testing', 'Favourites'].map((item, index) =>
                            // ToDo: change index to id
                            <li key={index} className={'tags__item tags__item-purple'}>
                                {item}
                                <img className={'close-icon'} src={close} alt="close"/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <hr/>
            <div className="working-on">
                <div className="working-on__title title">
                    Working on
                </div>
                <ul className="working-on__list">
                    {
                        [
                            'twitter.com',
                            'twitter.com/randomusername',
                            'facebook.com',
                            'facebook.com/randomusername'
                        ].map((item, index) =>
                            <li key={index} className={'working-on__item'}>
                                <img className={'working-on__close'} src={closeOrange} alt="close"/>
                                {item}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
        </div>
    );
};

export default RightSide;
