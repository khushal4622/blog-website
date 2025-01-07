import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySection from './CategorySection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:3000/blogs?page=${currentPage}&limit=${pageSize}`;

            // Filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    // Page changing button
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Category change button
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // reset page to 1 when changing category
        setActiveCategory(category);
    };

    return (
        <div>
            {/* Category section */}
            <div>
                <CategorySection
                    onSelectCategory={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    activeCategory={activeCategory}
                />
            </div>

            {/* Blog cards section */}
            <div className="w-full flex flex-col lg:flex-row sm:gap-6 gap-12">
                {/* Blog cards component */}
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedCategory={selectedCategory}
                    pageSize={pageSize}
                />

                {/* Sidebar component */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* Pagination section */}
            <div>
                <Pagination
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                    blogs={blogs}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
};

export default BlogPage;
