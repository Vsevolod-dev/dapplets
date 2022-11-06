import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import Header from "./Header";
import Filters from "./Filters";
import Dapplet, {DappletPropsInterface} from "./Dapplet";

const Content: FC = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets')
            .then(res => {
                setCompanies(res.data.data)
            })
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
                            companies.map((dapplet: DappletPropsInterface) => <Dapplet key={dapplet.id} {...dapplet}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
