import React from 'react';
import NewChild from './NewChild';

const Parent: React.FC = () => (
    <div>
        <NewChild word="World" />
    </div>
);

export default Parent;