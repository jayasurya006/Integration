import { Card, Table, Col, Row } from 'antd'
import { useState } from 'react';
import { Store } from '../../source'

export const TableList = ({ datas, dataSource }) => {

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
            dataIndex: 'email',
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
            <Table dataSource={dataSource.reverse()} columns={columns} />
        </>
    )
}