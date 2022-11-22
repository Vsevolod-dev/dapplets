import React, {FC, useEffect, useRef, useState} from 'react';
import {IDapplet} from "../@types/dapplet";
import Dapplet from "./Dapplet";
import {RootState, useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {setDapplets, addDapplets} from "../redux/slices/dappletsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import DappletsService from "./../api/DappletsService";

interface DappletsListProps {
    className: string
}

const DappletsList: FC<DappletsListProps> = ({className}) => {
    const dispatch = useAppDispatch()
    const {dapplets, total} = useSelector((state: RootState) => state.dapplets)
    const {search, sort, direction} = useSelector((state: RootState) => state.filters)
    const start = useRef(0);

    const fetchDapplets = async (type: 'set' | 'add', currentStart?: number) => {
        if (currentStart || currentStart === 0) start.current = currentStart
        else start.current += 10

        try {
            const response = await DappletsService.fetchDapplets({search, sort, direction, start: start.current})
            switch (type) {
                case 'set':
                    dispatch(setDapplets(response.data))
                    break
                case 'add':
                    dispatch(addDapplets(response.data))
                    break
            }
        } catch (e) {
            fetchDapplets(type, currentStart)
        }
    }

    useEffect(() => {
        fetchDapplets('set', 0)
    }, [search, sort, direction]);

    const LoadingItem = () => {
        return (
            <h2 className={'dapplet__item'}>
                <div className="dapplet__loading">
                    Loading...
                </div>
            </h2>
        )
    }

    return (
        <InfiniteScroll
            dataLength={dapplets.length}
            next={() => fetchDapplets('add')}
            hasMore={dapplets.length !== total}
            loader={<LoadingItem/>}
            className={className}
        >
            {
                dapplets.map((dapplet: IDapplet) => <Dapplet key={dapplet.id} {...dapplet} />)
            }
        </InfiniteScroll>
    );
};

export default DappletsList;
