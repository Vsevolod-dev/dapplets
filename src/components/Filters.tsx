import React, {FC, useEffect, useState} from 'react';
import searchImg from "../assets/search.svg";
import {RootState, useAppDispatch} from "../redux/store";
import {setDirection, setSearch, setSort} from "../redux/slices/filtersSlice";
import {useSelector} from "react-redux";
import useDebounce from "../hooks/useDebounce";

const Filters: FC = () => {
    const {search, sort, direction} = useSelector((state: RootState) => state.filters)
    const dispatch = useAppDispatch()

    const [searchFilter, setSearchFilter] = useState(search);
    const debouncedSearchFilter = useDebounce(searchFilter, 1000)

    useEffect(() => {
        dispatch(setSearch(debouncedSearchFilter))
        setSearchFilter(debouncedSearchFilter)
    }, [debouncedSearchFilter])

    return (
        <div className="content__filters">
            <div className={'content__search'}>
                <img src={searchImg} alt="search"/>
                <input
                    value={searchFilter}
                    placeholder={'Search'}
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
            </div>
            <select className="content__sort" value={sort} onChange={e => dispatch(setSort(e.target.value))}>
                <option value="title">Title</option>
                <option value="released">Release Date</option>
                <option value="downloads">Downloads</option>
                <option value="rating">Rating</option>
            </select>
            <select className="content__direction" value={direction} onChange={e => dispatch(setDirection(e.target.value))}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select>
        </div>
    );
};

export default Filters;
