import React, {FC, RefObject, useEffect} from 'react';
import Header from "./Header";
import Filters from "./Filters";
import Dapplet from "./Dapplet";
import {RootState, useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {getTags} from "../redux/slices/dappletsSlice";
import {IDapplet} from "../@types/dapplet";

type ContentProps = {
    contentRef: RefObject<HTMLDivElement>
}

const Content: FC<ContentProps> = ({contentRef}) => {
    const dispatch = useAppDispatch()
    const {dapplets} = useSelector((state: RootState) => state.dapplets)

    useEffect(() => {
        dispatch(getTags())
    }, [])

    return (
        <div className="content" ref={contentRef}>
            {/*<div className="container">*/}
                <Header/>
                <div className="content__main">
                    <Filters/>
                    <hr/>
                    <div className="content__dapplets dapplets">
                        {
                            dapplets
                                ? dapplets.map((dapplet: IDapplet) => <Dapplet key={dapplet.id} {...dapplet} />)
                                : <h2>Loading...</h2>
                        }
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default Content;
