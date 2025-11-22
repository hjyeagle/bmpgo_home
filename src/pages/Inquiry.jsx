import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Inquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">문의하기</h1>
                <p className="text-gray-600 text-center mb-8">궁금한 사항을 남겨주시면 친절하게 안내해 드리겠습니다.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="홍길동"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                placeholder="example@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                placeholder="010-1234-5678"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의내용</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                            placeholder="문의하실 내용을 입력해주세요."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-green-800 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center"
                    >
                        <Send size={20} className="mr-2" /> 문의하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Inquiry;
