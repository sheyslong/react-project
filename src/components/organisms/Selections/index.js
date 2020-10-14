import React, { useState } from 'react'
import { List } from 'antd';
import { Selection, Details } from '../../molecules'
import { color } from '../../../styles/colors';

export const Selections = ({data}) => {
    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState({})

    const openDetails = (item) => {
        setOpen(true)
        setDetails(item)
    }

    return <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Selection 
                        projectName={ item.projectName } 
                        job={ item.job } 
                        description={ item.description } 
                        labName={ item.labName } 
                        colors={ color(item.job) }
                        onClick={() => openDetails(item)}
                    />
                </List.Item>
            )}
        />
        <Details
            projectName={ details.projectName } 
            job={ details.job } 
            description={ details.description } 
            colors={ color(details.job) }
            labName={ details.labName } 
            visible={ open }
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        />
    </>;
};

export default Selections;
