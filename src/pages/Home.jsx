import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/livestock.jpg';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen max-h-[800px] flex items-center justify-center text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Agriculture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        자연과 함께하는<br />
                        <span className="text-accent">농업회사법인 수성(주)</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                        건강한 먹거리와 지속 가능한 농업을 위해 끊임없이 연구하고 노력합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/product/sulfur" className="bg-primary hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition duration-300 flex items-center justify-center">
                            제품 소개 보기 <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link to="/company" className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium transition duration-300">
                            회사 소개
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 사업 분야</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            농업, 축산, 수산 분야의 혁신적인 솔루션을 제공합니다.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Agriculture */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/src/assets/agriculture.jpg" alt="Agriculture" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">농업 분야</h3>
                                <p className="text-gray-600 mb-4">
                                    친환경 유황 비료를 통한 고품질 농산물 생산을 지원합니다.
                                </p>
                                <Link to="/product/fields" className="text-primary font-medium hover:underline flex items-center">
                                    자세히 보기 <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Livestock */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/src/assets/livestock.jpg" alt="Livestock" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">축산 분야</h3>
                                <p className="text-gray-600 mb-4">
                                    건강한 가축 사육을 위한 기능성 사료 첨가제를 공급합니다.
                                </p>
                                <Link to="/product/fields" className="text-primary font-medium hover:underline flex items-center">
                                    자세히 보기 <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Fisheries */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/src/assets/fisheries.jpg" alt="Fisheries" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">수산 분야</h3>
                                <p className="text-gray-600 mb-4">
                                    수질 개선 및 수산물 품질 향상을 위한 솔루션을 제공합니다.
                                </p>
                                <Link to="/product/fields" className="text-primary font-medium hover:underline flex items-center">
                                    자세히 보기 <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Banner */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">궁금한 점이 있으신가요?</h2>
                    <p className="mb-8 text-green-100">
                        언제든지 문의해 주시면 친절하게 답변해 드리겠습니다.
                    </p>
                    <Link to="/community/inquiry" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
                        문의하기
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
