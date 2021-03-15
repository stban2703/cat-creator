import React, { useState } from 'react';
import { EditOptions } from '../../components/EditOptions/EditOptions';

const catProps = {
    furType: "noPattern",
    currentAttribute: "fur"
}

export const App = () => {

    const [currentAttribute, setCurrentAttribute] = useState(catProps.currentAttribute);

    return (
        <main>
            <EditOptions currentAttribute={currentAttribute} />
        </main>
    );
}