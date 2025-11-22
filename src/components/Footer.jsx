import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">농업회사법인 수성(주)</h2>
                        <p className="text-gray-400 text-sm">
                            상호 : 농업회사법인(주) <span className="mx-2">|</span> T. 033-682-3600 <span className="mx-2">|</span> F. 033-682-3601
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                            대표이사 : 이경호 <span className="mx-2">|</span> Email : ceo@bmpgo.com
                        </p>
                    </div>
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Agricultural Corporation Suseong Co., Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
