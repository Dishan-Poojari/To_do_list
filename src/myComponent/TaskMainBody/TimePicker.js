import React, { useEffect, useState } from 'react';

export default function TimePicker() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    const getAmPm = (hours) => {
        return hours >= 12 ? 'PM' : 'AM';
    };

    const formatHours = (hours) => {
        if (hours === 0) {
            return '12';
        } else if (hours > 12) {
            return String(hours - 12);
        } else {
            return String(hours);
        }
    };

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amPm = getAmPm(hours);

    return (
        <div>
            <div>
                {`${formatHours(hours)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`}
            </div>
        </div>
    );
}
