import React from 'react';
import { AlertTriangle, CheckCircle, Sprout } from 'lucide-react';

const SulfurIntro = () => {
    return (
        <div className="bg-white">
            {/* Hero Banner */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">유황성분(유황·바이오) 소개</h1>
                    <p className="text-xl text-gray-600">지속 가능한 농업을 위한 혁신적인 솔루션</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* The Problem Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="flex items-center mb-8">
                        <AlertTriangle className="text-red-500 w-10 h-10 mr-4" />
                        <h2 className="text-3xl font-bold text-gray-800">현재의 문제점: 악순환의 고리</h2>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            현재 한국의 농·축·수산업은 생산성 향상을 위해 <strong>화학비료와 항생제</strong>에 지나치게 의존하고 있습니다.
                            이는 단기적인 생산량 증대를 가져왔지만, 장기적으로는 심각한 부작용을 초래하고 있습니다.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                                <span className="text-gray-700"><strong>토양 산성화 및 황폐화:</strong> 화학비료의 남용으로 땅이 힘을 잃어가고 있습니다.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                                <span className="text-gray-700"><strong>수질 오염:</strong> 축산 분뇨와 비료 성분이 하천으로 유입되어 수질을 오염시킵니다.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                                <span className="text-gray-700"><strong>먹거리 안전 위협:</strong> 잔류 농약과 항생제 문제는 소비자의 건강을 위협합니다.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* The Solution Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <Sprout className="text-primary w-10 h-10 mr-4" />
                        <h2 className="text-3xl font-bold text-gray-800">우리의 솔루션: 유황·바이오</h2>
                    </div>

                    <div className="bg-green-50 border-l-4 border-primary p-8 rounded-r-lg mb-12">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            농업회사법인 수성(주)는 이러한 문제를 해결하기 위해 <strong>천연 유황과 바이오 기술</strong>을 결합한 혁신적인 솔루션을 제시합니다.
                            유황은 '제8의 영양소'로 불리며, 생명체의 필수 구성 요소이자 강력한 해독 작용을 합니다.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-3">
                                    <CheckCircle className="text-primary w-6 h-6 mr-2" />
                                    <h3 className="font-bold text-lg">토양 개량 및 지력 회복</h3>
                                </div>
                                <p className="text-gray-600">산성화된 토양을 중화시키고 미생물을 활성화하여 땅심을 높입니다.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-3">
                                    <CheckCircle className="text-primary w-6 h-6 mr-2" />
                                    <h3 className="font-bold text-lg">병해충 저항성 증대</h3>
                                </div>
                                <p className="text-gray-600">작물의 면역력을 강화하여 농약 사용을 획기적으로 줄일 수 있습니다.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-3">
                                    <CheckCircle className="text-primary w-6 h-6 mr-2" />
                                    <h3 className="font-bold text-lg">고품질 농산물 생산</h3>
                                </div>
                                <p className="text-gray-600">맛, 향, 저장성이 뛰어난 고기능성 농산물을 생산합니다.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-3">
                                    <CheckCircle className="text-primary w-6 h-6 mr-2" />
                                    <h3 className="font-bold text-lg">친환경 순환 농업</h3>
                                </div>
                                <p className="text-gray-600">축산 분뇨 악취 제거 및 자원화를 통해 환경을 보호합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SulfurIntro;
