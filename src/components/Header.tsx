import React, {FC} from 'react';
import state from "../assets/clarity_cloud-network-line.svg";
import settings from "../assets/carbon_settings-adjust.svg";

const Header: FC = () => {
    return (
        <header className="content__header">
            <div className="content__state">
                <img src={state} alt="state"/>
                Extension state: <span>Active</span>
            </div>
            <div className="content__settings">
                <img src={settings} alt="settings"/>
                Settings
            </div>
        </header>
    );
};

export default Header;
