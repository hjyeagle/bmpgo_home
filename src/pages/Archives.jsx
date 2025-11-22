import React from 'react';
import { FileText, Video, Download } from 'lucide-react';

const resources = [
    { id: 1, title: '제품 사용 설명서 (농업용)', type: 'pdf', date: '2024-11-20' },
    { id: 2, title: '시험성적서 모음집', type: 'pdf', date: '2024-10-15' },
    { id: 3, title: '홍보 동영상 - 유황의 기적', type: 'video', date: '2024-09-01' },
    { id: 4, title: '친환경 인증서 사본', type: 'image', date: '2024-08-20' },
];

const Archives = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">자료실</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-100">
                        <div className="flex justify-center mb-4">
                            {item.type === 'video' ? (
                                <Video size={48} className="text-red-500" />
                            ) : (
                                <FileText size={48} className="text-blue-500" />
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 text-center truncate">{item.title}</h3>
                        <p className="text-sm text-gray-500 text-center mb-4">{item.date}</p>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded flex items-center justify-center transition duration-300">
                            <Download size={16} className="mr-2" /> 다운로드
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Archives;
