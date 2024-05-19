import React from 'react';
import {Button} from '@gravity-ui/uikit';
import Carriers from "./Carriers/Carriers";
import styles from './main.module.css'


const Main = () => {
    return (
        <div className={styles.container}>
            <Carriers/>
        </div>
    );
};

export default Main;