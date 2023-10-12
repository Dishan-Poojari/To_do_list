import React, { useEffect, useState } from 'react';

export default function CustomDataForm() {
    const [newDate, setNewDate] = useState('');

    useEffect(() => {
        const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        let todayDate = new Date();
        let day = daysOfWeek[todayDate.getDay()];
        let date = String(todayDate.getDate()).padStart(2, '0');
        let month = getMonthName(todayDate.getMonth());
        let year = todayDate.getFullYear();

        setNewDate(`${month} ${day} ${date}, ${year}`);
    }, []);

    const getMonthName = (month) => {
        const monthNames = [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
        return monthNames[month];
    };

    return (
        <div>
            <div>{newDate}</div>
        </div>
    );
}
