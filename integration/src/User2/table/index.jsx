import { Card, Table, Col, Row } from 'antd'
import { useState } from 'react';
import { Store } from '../../source'

export const TableList = ({datas}) => {
    const [data, setData] = useState([]);
    
    const columns = [
        {
            title: '#',
            dataIndex: 'name',
            key: 'name',
        },
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
            <Table dataSource={data} columns={columns} />
        </>
    )
}