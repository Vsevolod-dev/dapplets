import React, {FC} from 'react';
import search from "../assets/search.svg";

const Filters: FC = () => {
    return (
        <div className="content__filters">
            <div className={'content__search'}>
                <img src={search} alt="search"/>
                <input placeholder={'Search'}/>
            </div>
            <select className="content__release-date">
                <option value="0">Release Date</option>
            </select>
            <select className="content__descending">
                <option value="0">Descending</option>
            </select>
        </div>
    );
};

export default Filters;
