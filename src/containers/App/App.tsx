import React from 'react';
import { EditSection } from '../../components/EditSection/EditSection';

const furPatterns = [
    {
        id: 0,
        name: "noPattern",
        checked: true
    },
    {
        id: 1,
        name: "lines",
        checked: false
    },
    {
        id: 2,
        name: "colorAndwhite",
        checked: false
    },
    {
        id: 3,
        name: "siamese",
        checked: false
    },
    {
        id: 4,
        name: "tricolor",
        checked: false
    }
]

export const App = () => {
    return (
        <main>
            <EditSection name="Pelaje" itemList={furPatterns}/>
        </main>
    );
}