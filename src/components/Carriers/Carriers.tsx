import React from 'react';
import {Table, withTableActions, withTableSettings} from '@gravity-ui/uikit';

const Carriers = () => {
    const MyTable = withTableActions(Table);
    const data = [
        {'Номер заявки': 1, 'Дата и время получения': 'Hello',
            'Название фирмы клиента': 'Название',
            'ФИО перевозчика': 'ABJs' },
        {'Номер заявки': 2, text: 'World'},
    ];
    const columns = [{id: 'Номер заявки', name: 'номер заявки', width: '50px'},
        {id: 'Дата и время получения'},
        {id: 'Название фирмы клиента'},
        {id: 'ФИО перевозчика'}];
    // const getRowActions = () => {
    //     return [
    //         {
    //             text: 'Print',
    //             // handler: () => {},
    //         },
    //         {
    //             text: 'Remove',
    //             // handler: () => {},
    //             theme: 'danger',
    //         },
    //     ];
    // };
    return (
        <div>
            <MyTable data={data} columns={columns}/>
        </div>
    );
};

export default Carriers;