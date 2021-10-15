import React from 'react';
import useFirebase from '../hooks/useFirebase';



const Meals = () => {
    const { searchMeals } = useFirebase();
    return (
        <div>
            <input type="search" name="search" id="search" onChange={searchMeals} className="border-2" />
        </div>
    );
};

export default Meals;