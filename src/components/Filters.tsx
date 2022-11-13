import React, {FC, useEffect, useState} from 'react';
import search from "../assets/search.svg";
import {getDapplets} from "../redux/slices/dappletsSlice";
import {useAppDispatch} from "../redux/store";
import useDebounce from "../hooks/useDebounce";

const Filters: FC = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const debouncedSearchFilter = useDebounce(searchFilter, 1000)
    const [sortFilter, setSortFilter] = useState('title');
    const [sortFilterDirection, setSortFilterDirection] = useState('DESC');


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDapplets({
            'search': debouncedSearchFilter,
            'sort': sortFilter,
            'direction': sortFilterDirection
        }))
    }, [debouncedSearchFilter, sortFilter, sortFilterDirection])

    return (
        <div className="content__filters">
            <div className={'content__search'}>
                <img src={search} alt="search"/>
                <input
                    value={searchFilter}
                    placeholder={'Search'}
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
            </div>
            <select className="content__sort" value={sortFilter} onChange={e => setSortFilter(e.target.value)}>
                <option value="title">Title</option>
                <option value="released">Release Date</option>
                <option value="downloads">Downloads</option>
                <option value="rating">Rating</option>
            </select>
            <select className="content__direction" value={sortFilterDirection} onChange={e => setSortFilterDirection(e.target.value)}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select>
        </div>
    );
};

export default Filters;
