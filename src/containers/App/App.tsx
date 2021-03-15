import React, { useState } from 'react';
import { EditOptions } from '../../components/EditOptions/EditOptions';

export const App = () => {
    
    const [currentAttribute, setCurrentAttribute] = useState("fur");

    return (
        <main>
            <EditOptions currentAttribute={currentAttribute} />
        </main>
    );
}