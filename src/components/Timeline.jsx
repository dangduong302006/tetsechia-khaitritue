import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Timeline = () => {
    const events = [
        {
            day: "Mùng 1 Tết",
            time: "Giờ Thìn (7h - 9h) | Giờ Thân (15h - 17h)",
            description: "Khởi hành chuyến đi đầu năm, trao tặng lì xì sách và phần quà học tập tại các điểm trường khó khăn.",
            color: "bg-red-500",
            borderColor: "border-red-500",
            textColor: "text-red-600"
        },
        {
            day: "Mùng 2 Tết",
            time: "Giờ Tỵ (9h - 11h) | Giờ Mùi (13h - 15h)",
            description: "Tổ chức hoạt động 'Đọc sách ngày xuân' cùng các em nhỏ, giáo dục kỹ năng sống qua những trang sách.",
            color: "bg-orange-500",
            borderColor: "border-orange-500",
            textColor: "text-orange-600"
        },
        {
            day: "Mùng 3 Tết",
            time: "Giờ Thìn (7h - 9h)",
            description: "Giao lưu văn nghệ, trao quà cho những hoàn cảnh đặc biệt tại các trung tâm bảo trợ xã hội.",
            color: "bg-amber-500",
            borderColor: "border-amber-500",
            textColor: "text-amber-600"
        },
        {
            day: "Mùng 4 Tết",
            time: "Giờ Tỵ (9h - 11h) | Giờ Dậu (17h - 19h)",
            description: "Tổng kết chiến dịch, trao bằng khen cho các cá nhân lan tỏa nhiều giá trị tích cực và lên kế hoạch dài hạn.",
            color: "bg-brand-red",
            borderColor: "border-brand-red",
            textColor: "text-brand-red"
        }
    ];

    return (
        <section id="timeline" className="section-padding bg-brand-light/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4 text-brand-dark">Lịch Trình Hoạt Động</h2>
                    <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Hành trình "Tết Sẻ Chia - Khai Trí Tuệ" trải dài xuyên suốt những ngày đầu năm mới.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical line connecting timeline items */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-brand-yellow/40 md:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 md:left-1/2 w-10 h-10 -ml-[5px] md:-translate-x-1/2 rounded-full border-4 border-white shadow-lg ${event.color} z-10 flex items-center justify-center`}>
                                    <Calendar className="w-4 h-4 text-white" />
                                </div>

                                {/* Content Box */}
                                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                    }`}>
                                    <div className={`p-6 bg-white rounded-2xl shadow-xl border-t-4 ${event.borderColor} hover:scale-105 transition-transform duration-300 relative`}>

                                        {/* Decorative Triangle for Desktop */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-b rotate-45 ${index % 2 === 0 ? '-right-2 border-r  border-gray-100' : '-left-2 border-l border-gray-100'
                                            }`}></div>

                                        <h3 className={`text-2xl font-display font-bold mb-2 ${event.textColor}`}>
                                            {event.day}
                                        </h3>

                                        <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm font-medium bg-gray-50 px-3 py-1 rounded-md inline-flex">
                                            <Clock className="w-4 h-4 text-brand-orange" />
                                            {event.time}
                                        </div>

                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
