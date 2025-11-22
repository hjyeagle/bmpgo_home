import React, { useState } from 'react';
import agricultureImg from '../assets/agriculture.jpg';
import livestockImg from '../assets/livestock.jpg';
import fisheriesImg from '../assets/fisheries.jpg';

const ApplicationFields = () => {
    const [activeTab, setActiveTab] = useState('agriculture');

    const tabs = [
        { id: 'agriculture', label: '농업분야' },
        { id: 'livestock', label: '축산분야' },
        { id: 'fisheries', label: '수산분야' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-primary py-12 text-white text-center">
                <h1 className="text-4xl font-bold mb-4">유황성분 활용분야</h1>
                <p className="text-lg opacity-90">농업, 축산, 수산 전 분야에 걸친 혁신적인 적용 사례</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto">
                    {activeTab === 'agriculture' && (
                        <div className="animate-fade-in">
                            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                                <img src={agricultureImg} alt="Agriculture" className="rounded-xl shadow-lg w-full h-80 object-cover" />
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-4">농업분야 적용</h2>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                        유황 바이오 비료는 작물의 생육을 촉진하고 병해충에 대한 저항성을 길러줍니다.
                                        특히 벼농사, 과수원, 시설 하우스 등 다양한 작물에 적용하여 탁월한 효과를 입증하고 있습니다.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>뿌리 발육 촉진 및 도복 방지</li>
                                        <li>저장성 향상 및 당도 증가</li>
                                        <li>연작 장해 해소</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">시험성적서 및 인증현황</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {/* Placeholders for certificates */}
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm text-center h-48 flex flex-col items-center justify-center">
                                            <div className="w-16 h-20 bg-gray-200 mb-2 mx-auto"></div>
                                            <span className="text-sm text-gray-500">시험성적서 {i}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'livestock' && (
                        <div className="animate-fade-in">
                            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                                <img src={livestockImg} alt="Livestock" className="rounded-xl shadow-lg w-full h-80 object-cover" />
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-4">축산분야 적용</h2>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                        유황 사료 첨가제는 가축의 면역력을 높이고 육질을 개선합니다.
                                        또한 축사 내 악취를 획기적으로 저감시켜 쾌적한 사육 환경을 조성합니다.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>항생제 대체 효과</li>
                                        <li>육질 등급 향상 (마블링 개선)</li>
                                        <li>분뇨 악취 90% 이상 제거</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">시험성적서 및 인증현황</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm text-center h-48 flex flex-col items-center justify-center">
                                            <div className="w-16 h-20 bg-gray-200 mb-2 mx-auto"></div>
                                            <span className="text-sm text-gray-500">인증서 {i}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'fisheries' && (
                        <div className="animate-fade-in">
                            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                                <img src={fisheriesImg} alt="Fisheries" className="rounded-xl shadow-lg w-full h-80 object-cover" />
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-4">수산분야 적용</h2>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                        수질 정화 및 양식장 환경 개선에 탁월한 효과를 발휘합니다.
                                        어류의 활력을 높이고 폐사율을 낮추어 어가 소득 증대에 기여합니다.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>양식장 수질 개선 (적조 예방)</li>
                                        <li>어류 면역력 강화</li>
                                        <li>성장 속도 향상</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">시험성적서 및 인증현황</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm text-center h-48 flex flex-col items-center justify-center">
                                            <div className="w-16 h-20 bg-gray-200 mb-2 mx-auto"></div>
                                            <span className="text-sm text-gray-500">특허증 {i}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplicationFields;
