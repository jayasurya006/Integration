import { Card, Table, Col, Row } from 'antd'
import { useState } from 'react';
import { Store } from '../../source'

export const TableList = ({ datas }) => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            mail: 'test@gmail.com',
            mobile: 'test@gmail.com',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            mail: 'test@gmail.com',
            mobile: 'test@gmail.com',
        },
    ];

    const columns = [
       
        {
            title: datas.addUser.name,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: datas.addUser.age,
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: datas.addUser.email,
            dataIndex: 'mail',
            key: 'address',
        },
        {
            title: datas.addUser.mobile,
            dataIndex: 'mobile',
            key: 'address',
        },
    ];
    return (
        <>
            <Table dataSource={dataSource} columns={columns} />
        </>
    )
}