import React from 'react';

const CategorySection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["AI", "Startups", "Health", "Security", "Apps", "Tech", "Fintech", "Enterprise", "Work", "Gadgets"];

    return (
        <div className='px-4 mb-8 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
            <button onClick={() => onSelectCategory(null)} className={`mr-4 lg:mr-6 ${activeCategory ? "" : "text-orange-500 underline underline-offset-8"}`}>All</button>
            {
                categories.map((category) => (
                    <button 
                        onClick={() => onSelectCategory(category)}
                        className={`mr-4 lg:mr-6 ${activeCategory === category ? "text-orange-500 underline underline-offset-8" : ""}`}
                        key={category}>
                        {category}
                    </button>
                ))
            }
        </div>
    );
};

export default CategorySection;
