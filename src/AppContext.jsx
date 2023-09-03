import React, { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';

const AppContext = (props) => {
    const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
    const [locationInfo, setLocationInfo] = useState({});

    const [user, setUser] = React.useState(() => {
        const storedState = localStorage.getItem("user");
        return storedState ? JSON.parse(storedState) : { data: null }
    })
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <GlobalContext.Provider value={{
            user, setUser,
            weatherAndForecastInfo, setWeatherAndForecastInfo,
            locationInfo, setLocationInfo
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
export default AppContext;