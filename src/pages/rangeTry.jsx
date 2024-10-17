import { useState, useEffect } from 'react'

const rangeTry = () => {

    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(7000);
    const min = 100;
    const max = 10000;

    const minThumbPercentage = ((minPrice - min) / (max - min)) * 100;
    const maxThumbPercentage = ((maxPrice - min) / (max - min)) * 100;

    const handleMinPriceChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 500);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 500);
        setMaxPrice(value);
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="relative max-w-xl w-full">
                <input
                    type="range"
                    step="100"
                    min={min}
                    max={max}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="absolute z-20 h-2 w-full cursor-pointer"
                    style={{ opacity: 0, pointerEvents: 'all' }} // make it interactable
                />
                <input
                    type="range"
                    step="100"
                    min={min}
                    max={max}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="absolute z-20 h-2 w-full cursor-pointer"
                    style={{ opacity: 0, pointerEvents: 'all' }} // make it interactable
                />

                <div className="relative z-10 h-2">
                    <div className="absolute left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                    <div
                        className="absolute top-0 bottom-0 rounded-md bg-green-300"
                        style={{
                            left: `${minThumbPercentage}%`,
                            right: `${100 - maxThumbPercentage}%`,
                        }}
                    ></div>
                    <div
                        className="absolute z-30 w-6 h-6 bg-green-300 rounded-full -mt-2"
                        style={{ left: `${minThumbPercentage}%` }}
                    ></div>
                    <div
                        className="absolute z-30 w-6 h-6 bg-green-300 rounded-full -mt-2"
                        style={{ left: `${maxThumbPercentage}%` }}
                    ></div>
                </div>

                <div className="flex justify-between items-center py-5">
                    <input
                        type="text"
                        maxLength="5"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
                    />
                    <input
                        type="text"
                        maxLength="5"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default rangeTry