import { Card, Table, Col, Row } from 'antd'
import { useState } from 'react';
import { Store } from '../../source'

export const TableList = () => {
    const [data, setData] = useState([]);
    
    const columns = [
        {
            title: '#',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Email',
            dataIndex: 'mail',
            key: 'address',
        },
        {
            title: 'Mobile',
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