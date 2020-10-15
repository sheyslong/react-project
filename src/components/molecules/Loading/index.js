import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Load } from './styled';

export const Loading = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Load indicator={antIcon} />;
}

export default Loading;