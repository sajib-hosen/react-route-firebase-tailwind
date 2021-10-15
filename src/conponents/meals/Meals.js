import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Meals = () => {
    const { meals, SearchMeals } = useFirebase();
    console.log( meals )
    return (
        <div>
            <p className="text-red-600">Error has to fixe</p>
            <input type="search" name="search" id="search" onBlur={SearchMeals} className="border-2" />
        </div>
    );
};

export default Meals;