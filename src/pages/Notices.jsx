import React from 'react';

const notices = [
    { id: 1, title: '2025년 친환경 농자재 지원 사업 안내', date: '2025-03-15', author: '관리자' },
    { id: 2, title: '농업회사법인 수성(주) 홈페이지 리뉴얼 오픈', date: '2025-01-10', author: '관리자' },
    { id: 3, title: '신제품 출시 기념 할인 이벤트', date: '2024-12-01', author: '관리자' },
    { id: 4, title: '추석 연휴 배송 안내', date: '2024-09-10', author: '관리자' },
];

const Notices = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">공지사항</h1>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16 text-center">No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32 text-center">작성자</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32 text-center">작성일</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {notices.map((notice) => (
                            <tr key={notice.id} className="hover:bg-gray-50 transition duration-150 cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{notice.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notice.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{notice.author}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{notice.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notices;
