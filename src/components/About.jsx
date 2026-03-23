import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Users className="w-8 h-8 text-brand-orange" />,
            title: "Nhóm Sinh Viên FPT",
            description: "Chúng tôi là những sinh viên đại học năng động, khao khát cống hiến và san sẻ tình yêu thương."
        },
        {
            icon: <Heart className="w-8 h-8 text-brand-red" />,
            title: "Lan Toả Yêu Thương",
            description: "Dự án mang sứ mệnh đem đến một cái Tết trọn vẹn và hơi ấm mùa xuân cho những hoàn cảnh khó khăn."
        },
        {
            icon: <Target className="w-8 h-8 text-brand-yellow" />,
            title: "Khai Trí Tuệ",
            description: "Trao tri thức qua những cuốn sách, mở ra cánh cửa tương lai tươi sáng hơn cho các em nhỏ."
        }
    ];

    return (
        <section id="about" className="section-padding bg-white relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl mb-4 text-brand-dark"
                    >
                        Về Dự Án Của Chúng Tôi
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        "Tết Sẻ Chia - Khai Trí Tuệ" là dự án đến từ một nhóm sinh viên Trường Đại học FPT với sứ mệnh lan tỏa tình yêu thương đến những em nhỏ thiếu may mắn và góp hơi ấm cho ngày Tết của các em thêm trọn vẹn.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-brand-light/30 border border-brand-yellow/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
