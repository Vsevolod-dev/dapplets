import React, {FC, useEffect} from 'react';
import Header from "./Header";
import Filters from "./Filters";
import Dapplet from "./Dapplet";
import {RootState, useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {getDapplets, getTags} from "../redux/slices/dappletsSlice";
import {IDapplet} from "../@types/dapplet";

const Content: FC = () => {
    const dispatch = useAppDispatch()
    const {dapplets} = useSelector((state: RootState) => state.dapplets)

    useEffect(() => {
        dispatch(getTags())
        dispatch(getDapplets())
    }, [])

    return (
        <div className="content">
            <div className="container">
                <Header/>
                <div className="content__main">
                    <Filters/>
                    <hr/>
                    <div className="content__dapplets dapplets">
                        {
                            dapplets
                                ? dapplets.map((dapplet: IDapplet) => <Dapplet key={dapplet.id} {...dapplet} />)
                                : <div>Loading...</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
