import React, {FC, useEffect, useRef, useState} from 'react';
import {IDapplet} from "../@types/dapplet";
import Dapplet from "./Dapplet";
import {RootState, useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {getDapplets} from "../redux/slices/dappletsSlice";
import InfiniteScroll from "react-infinite-scroll-component";

interface DappletsListProps {
    className: string
}

const DappletsList: FC<DappletsListProps> = ({className}) => {
    const dispatch = useAppDispatch()
    const {dapplets, total} = useSelector((state: RootState) => state.dapplets)
    const {search, sort, direction} = useSelector((state: RootState) => state.filters)
    const [start, setStart] = useState(0);

    const fetchDapplets = () => {
        setStart(p => p + 10)
        dispatch(getDapplets({search, sort, direction, start}))
    }

    useEffect(() => {
        fetchDapplets()
    }, [search, sort, direction]);

    return (
        <InfiniteScroll
            dataLength={dapplets.length}
            next={fetchDapplets}
            hasMore={dapplets.length !== total}
            loader={<h2>Loading...</h2>}
            className={className}
        >
            {
                dapplets
                    ? dapplets.map((dapplet: IDapplet) => <Dapplet key={dapplet.id} {...dapplet} />)
                    : <h2>Loading...</h2>
            }
        </InfiniteScroll>
    );
};

export default DappletsList;
