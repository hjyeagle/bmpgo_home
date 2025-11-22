import React from 'react';

const CompanyIntro = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">회사소개</h1>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                            "자연과 사람을 생각하는 기업, 농업회사법인 수성(주)입니다."
                        </h2>

                        <p className="mb-6">
                            안녕하십니까? 농업회사법인 수성(주) 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
                        </p>

                        <p className="mb-6">
                            저희 수성(주)는 급변하는 농업 환경 속에서 지속 가능한 농업과 안전한 먹거리 생산을 위해 끊임없이 노력하고 있습니다.
                            특히 화학비료와 농약의 과다 사용으로 인한 토양 오염과 생태계 파괴 문제를 해결하고자,
                            친환경 유황 바이오 제품을 연구하고 개발하는 데 앞장서고 있습니다.
                        </p>

                        <p className="mb-6">
                            농업은 생명 산업이자 우리의 미래입니다.
                            저희는 농업인 여러분께는 고소득을, 소비자 여러분께는 건강한 식탁을 제공함으로써
                            모두가 행복한 세상을 만들어 가고자 합니다.
                        </p>

                        <p className="mb-6">
                            앞으로도 끊임없는 혁신과 도전으로 대한민국 농업 발전에 기여하는 기업이 되겠습니다.
                            여러분의 많은 관심과 성원을 부탁드립니다.
                        </p>

                        <p className="mb-12">
                            감사합니다.
                        </p>

                        <div className="text-right mt-12">
                            <p className="font-bold text-xl text-gray-800">농업회사법인 수성(주) 임직원 일동</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyIntro;
