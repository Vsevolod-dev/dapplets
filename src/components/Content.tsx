import React, {FC, RefObject, useEffect} from 'react';
import Header from "./Header";
import Filters from "./Filters";
import {RootState, useAppDispatch} from "../redux/store";
import {getTags} from "../redux/slices/dappletsSlice";
import DappletsList from "./DappletsList";

type ContentProps = {
    contentRef: RefObject<HTMLDivElement>
}

const Content: FC<ContentProps> = ({contentRef}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTags())
    }, [])

    return (
        <div className="content" ref={contentRef}>
            <Header/>
            <div className="content__main">
                <Filters/>
                <hr/>
                <DappletsList className="content__dapplets dapplets"/>
            </div>
        </div>
    );
};

export default Content;
