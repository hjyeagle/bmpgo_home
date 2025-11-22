import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleMouseEnter = (menu) => setActiveDropdown(menu);
    const handleMouseLeave = () => setActiveDropdown(null);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
                {/* Logo & Company Name (Left) */}
                <Link to="/" className="flex items-center space-x-3 z-20">
                    <img src="/src/assets/logo.png" alt="농업회사법인 수성(주)" className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold text-gray-900">농업회사법인 수성(주)</span>
                </Link>

                {/* Desktop Navigation (Center) */}
                <nav className="hidden md:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
                    <Link to="/company" className="text-gray-800 hover:text-primary font-bold text-lg">회사소개</Link>

                    <div
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter('product')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center text-gray-800 hover:text-primary font-bold text-lg focus:outline-none">
                            제품소개 <ChevronDown size={16} className="ml-1" />
                        </button>
                        {activeDropdown === 'product' && (
                            <div className="absolute left-0 pt-4 w-56 z-50">
                                <div className="bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg py-2">
                                    <Link to="/product/sulfur" className="block px-4 py-3 hover:bg-gray-700 hover:text-primary transition-colors">유황성분(유황.바이오)소개</Link>
                                    <Link to="/product/fields" className="block px-4 py-3 hover:bg-gray-700 hover:text-primary transition-colors">유황성분 활용분야</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter('community')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center text-gray-800 hover:text-primary font-bold text-lg focus:outline-none">
                            커뮤니티 <ChevronDown size={16} className="ml-1" />
                        </button>
                        {activeDropdown === 'community' && (
                            <div className="absolute left-0 pt-4 w-48 z-50">
                                <div className="bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg py-2">
                                    <Link to="/community/notices" className="block px-4 py-3 hover:bg-gray-700 hover:text-primary transition-colors">공지사항</Link>
                                    <Link to="/community/archives" className="block px-4 py-3 hover:bg-gray-700 hover:text-primary transition-colors">자료실</Link>
                                    <Link to="/community/inquiry" className="block px-4 py-3 hover:bg-gray-700 hover:text-primary transition-colors">문의하기</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Right Side Placeholder (to balance layout if needed, or Login/Logout if auth existed) */}
                <div className="hidden md:block w-32">
                    {/* Placeholder for future auth or empty to keep logo left and nav center */}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700 focus:outline-none z-20" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 absolute w-full">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <Link to="/company" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">회사소개</Link>

                        <div className="px-3 py-2">
                            <div className="font-medium text-gray-700 mb-1">제품소개</div>
                            <Link to="/product/sulfur" className="block pl-4 py-1 text-sm text-gray-600 hover:text-primary">유황성분(유황.바이오)소개</Link>
                            <Link to="/product/fields" className="block pl-4 py-1 text-sm text-gray-600 hover:text-primary">유황성분 활용분야</Link>
                        </div>

                        <div className="px-3 py-2">
                            <div className="font-medium text-gray-700 mb-1">커뮤니티</div>
                            <Link to="/community/notices" className="block pl-4 py-1 text-sm text-gray-600 hover:text-primary">공지사항</Link>
                            <Link to="/community/archives" className="block pl-4 py-1 text-sm text-gray-600 hover:text-primary">자료실</Link>
                            <Link to="/community/inquiry" className="block pl-4 py-1 text-sm text-gray-600 hover:text-primary">문의하기</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
