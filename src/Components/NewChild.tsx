import React from 'react';

interface ChildProps {
    word: string
}

const NewChild: React.FC<ChildProps> = (props: ChildProps) => (
    <h1>Tost {props.word}</h1>    
);

export default NewChild;
