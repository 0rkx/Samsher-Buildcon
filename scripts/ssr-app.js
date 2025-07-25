import React from 'react';

// Server-side compatible components (without browser APIs)
const ServerHeader = ({ isScrolled = false }) => {
    return React.createElement('header', {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
            }`
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4 py-4 flex items-center justify-between'
        }, [
            React.createElement('div', {
                key: 'logo',
                className: 'flex items-center space-x-3'
            }, [
                React.createElement('img', {
                    key: 'logo-img',
                    src: '/images/buildcon-header.svg',
                    alt: 'Samsher Buildcon Logo',
                    className: 'h-14 w-auto',
                    loading: 'eager'
                }),
                React.createElement('div', {
                    key: 'logo-text',
                    className: 'hidden sm:block'
                }, [
                    React.createElement('h1', {
                        key: 'company-name',
                        className: 'text-xl font-bold text-gray-900 font-playfair'
                    }, 'Samsher Buildcon'),
                    React.createElement('p', {
                        key: 'tagline',
                        className: 'text-sm text-gray-600'
                    }, 'Premier Construction Services')
                ])
            ]),
            React.createElement('nav', {
                key: 'nav',
                className: 'hidden md:flex space-x-8'
            }, [
                React.createElement('a', {
                    key: 'home',
                    href: '#home',
                    className: 'text-gray-700 hover:text-gray-900 transition-colors font-medium'
                }, 'Home'),
                React.createElement('a', {
                    key: 'about',
                    href: '#about',
                    className: 'text-gray-700 hover:text-gray-900 transition-colors font-medium'
                }, 'About'),
                React.createElement('a', {
                    key: 'services',
                    href: '#services',
                    className: 'text-gray-700 hover:text-gray-900 transition-colors font-medium'
                }, 'Services'),
                React.createElement('a', {
                    key: 'projects',
                    href: '#projects',
                    className: 'text-gray-700 hover:text-gray-900 transition-colors font-medium'
                }, 'Projects'),
                React.createElement('a', {
                    key: 'contact',
                    href: '#contact',
                    className: 'text-gray-700 hover:text-gray-900 transition-colors font-medium'
                }, 'Contact')
            ])
        ])
    ]);
};

const ServerHeroSection = () => {
    return React.createElement('section', {
        id: 'home',
        className: 'relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-amber-50 overflow-hidden'
    }, [
        React.createElement('div', {
            key: 'background',
            className: 'absolute inset-0 bg-[url("/images/glenov-brankovic-DWp5nUqTn6E-unsplash-scaled.jpg")] bg-cover bg-center opacity-20'
        }),
        React.createElement('div', {
            key: 'content',
            className: 'relative z-10 text-center px-4 max-w-4xl mx-auto'
        }, [
            React.createElement('h1', {
                key: 'title',
                className: 'text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-playfair scroll-animate'
            }, 'Samsher Buildcon'),
            React.createElement('h2', {
                key: 'subtitle',
                className: 'text-2xl md:text-3xl text-gray-700 mb-8 font-playfair scroll-animate'
            }, 'Premier Construction Services'),
            React.createElement('p', {
                key: 'description',
                className: 'text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed scroll-animate'
            }, 'Since 2021, Samsher Buildcon has been delivering top-notch civil and mechanical contracting services. We specialize in site analysis, feasibility studies, preliminary design, and permit/zoning applications. Serving Jharkhand, Bihar, West Bengal, and Odisha, we handle industrial, manufacturing, office, retail, recreational, healthcare, and commercial projects.'),
            React.createElement('div', {
                key: 'cta-buttons',
                className: 'flex flex-col sm:flex-row gap-4 justify-center scroll-animate'
            }, [
                React.createElement('a', {
                    key: 'works-btn',
                    href: '#works',
                    className: 'bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
                }, 'View Our Works'),
                React.createElement('a', {
                    key: 'contact-btn',
                    href: '#contact',
                    className: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300'
                }, 'Get In Touch')
            ])
        ])
    ]);
};

const ServerAboutSection = () => {
    return React.createElement('section', {
        id: 'about',
        className: 'py-20 bg-white'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'text-center mb-16 scroll-animate'
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair'
                }, 'What Makes Us Different?'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Since 2021, delivering top-notch civil and mechanical contracting services')
            ]),
            React.createElement('div', {
                key: 'content',
                className: 'grid md:grid-cols-2 gap-12 items-center'
            }, [
                React.createElement('div', {
                    key: 'text',
                    className: 'scroll-animate'
                }, [
                    React.createElement('p', {
                        key: 'para1',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Since 2021, Samsher Buildcon has been delivering top-notch civil and mechanical contracting services. We specialize in site analysis, feasibility studies, preliminary design, and permit/zoning applications. Serving Jharkhand, Bihar, West Bengal, and Odisha, we handle industrial, manufacturing, office, retail, recreational, healthcare, and commercial projects.'),
                    React.createElement('p', {
                        key: 'para2',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Partner with us for exceptional construction services and experience The Samsher Buildcon difference. Our commitment to excellence, safety, and timely delivery has made us a trusted partner across various sectors in Eastern India.'),
                    React.createElement('div', {
                        key: 'ceo-info',
                        className: 'mt-8 p-4 bg-gray-50 rounded-lg'
                    }, [
                        React.createElement('h4', {
                            key: 'ceo-name',
                            className: 'text-xl font-semibold text-gray-900'
                        }, 'Afroz Khan'),
                        React.createElement('h5', {
                            key: 'ceo-title',
                            className: 'text-md text-gray-500'
                        }, 'CEO, Founder'),
                        React.createElement('p', {
                            key: 'ceo-message',
                            className: 'text-gray-600 mt-2'
                        }, 'Leading Samsher Buildcon with a vision to deliver exceptional construction services across Eastern India.')
                    ])
                ]),
                React.createElement('div', {
                    key: 'images',
                    className: 'scroll-animate relative'
                }, [
                    React.createElement('img', {
                        key: 'main-img',
                        src: '/images/glenov-brankovic-DWp5nUqTn6E-unsplash-scaled.jpg',
                        alt: 'Construction site with crane showing Samsher Buildcon construction work',
                        className: 'w-4/5 h-auto object-cover rounded-xl shadow-2xl'
                    }),
                    React.createElement('img', {
                        key: 'overlay-img',
                        src: '/images/WhatsApp-Image-2024-07-25-at-12.57.21-PM-scaled.jpeg',
                        alt: 'Interior construction work by Samsher Buildcon',
                        className: 'absolute top-0 right-0 w-3/5 h-3/5 object-cover rounded-xl shadow-2xl border-8 border-white'
                    })
                ])
            ])
        ])
    ]);
};

const ServerServicesSection = () => {
    const services = [
        {
            title: 'Mixture Machines',
            description: 'Reliable and efficient machines for consistent concrete and mortar mixing on-site. Our mixture machines ensure proper blending of cement, sand, aggregates, and water to achieve optimal concrete strength and consistency for all construction applications.',
            icon: '🏗️',
            imgSrc: '/images/png-transparent-cement-mixers-machine-industry-concrete-maquinaria-gunny-sack-industry-agricultural-machinery-removebg-preview.png'
        },
        {
            title: 'Water Tankers',
            description: 'Ensuring a steady supply of water for all construction needs, from dust control to concrete mixing. Our water tankers provide reliable water supply for construction sites, supporting various activities including concrete preparation, dust suppression, and site cleaning.',
            icon: '🚛',
            imgSrc: '/images/Untitled-design-5.png'
        },
        {
            title: 'Hydraulic Machines',
            description: 'Versatile machinery for various construction tasks, delivering power and precision. Our hydraulic machines provide the necessary force and control for heavy-duty construction operations, including lifting, pressing, and material handling applications.',
            icon: '⚙️',
            imgSrc: '/images/Untitled-design-6.png'
        },
        {
            title: 'Rod Cutting and Binding Machines',
            description: 'High-precision machines for cutting and binding reinforcement rods, ensuring structural integrity. These specialized machines provide accurate cutting and efficient binding of steel reinforcement bars, essential for concrete reinforcement in construction projects.',
            icon: '🔧',
            imgSrc: '/images/Untitled-design-7.png'
        },
        {
            title: 'Comprehensive Civil Construction Tools',
            description: 'A complete arsenal of tools and equipment to tackle any civil construction challenge, big or small. Our comprehensive tool inventory includes hand tools, power tools, and specialized equipment for all phases of construction work.',
            icon: '🛠️',
            imgSrc: '/images/Untitled-design-8.png'
        },
        {
            title: 'Scaffolding Materials',
            description: 'High-quality, safe, and reliable scaffolding systems to support workers and materials at any height. Our scaffolding materials meet safety standards and provide secure working platforms for construction activities at various elevations.',
            icon: '🏗️',
            imgSrc: '/images/Untitled-design-10.png'
        }
    ];

    return React.createElement('section', {
        id: 'services',
        className: 'py-20 bg-gray-50'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'text-center mb-16 scroll-animate'
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair'
                }, 'Tools and Tackles'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Professional construction equipment and machinery for all your project needs')
            ]),
            React.createElement('div', {
                key: 'services-grid',
                className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            }, services.map((service, index) =>
                React.createElement('div', {
                    key: index,
                    className: 'bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow scroll-animate'
                }, [
                    React.createElement('div', {
                        key: 'icon',
                        className: 'text-4xl mb-4'
                    }, service.icon),
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-xl font-bold text-gray-900 mb-3 font-playfair'
                    }, service.title),
                    React.createElement('p', {
                        key: 'description',
                        className: 'text-gray-600 mb-4'
                    }, service.description),
                    service.imgSrc && React.createElement('div', {
                        key: 'image',
                        className: 'mt-4 flex justify-center'
                    }, [
                        React.createElement('img', {
                            key: 'service-img',
                            src: service.imgSrc,
                            alt: service.title,
                            className: 'max-h-20 w-auto object-contain'
                        })
                    ])
                ])
            ))
        ])
    ]);
};

const ServerFooter = () => {
    return React.createElement('footer', {
        className: 'bg-gray-900 text-white py-12'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'content',
                className: 'grid md:grid-cols-3 gap-8'
            }, [
                React.createElement('div', {
                    key: 'company-info'
                }, [
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-xl font-bold mb-4 font-playfair'
                    }, 'Samsher Buildcon'),
                    React.createElement('p', {
                        key: 'description',
                        className: 'text-gray-300 mb-4'
                    }, 'Premier construction and infrastructure development company committed to excellence and quality.')
                ]),
                React.createElement('div', {
                    key: 'services-info'
                }, [
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-xl font-bold mb-4 font-playfair'
                    }, 'Services'),
                    React.createElement('ul', {
                        key: 'list',
                        className: 'text-gray-300 space-y-2'
                    }, [
                        React.createElement('li', { key: 'service1' }, 'Building Construction'),
                        React.createElement('li', { key: 'service2' }, 'Infrastructure Development'),
                        React.createElement('li', { key: 'service3' }, 'Project Management'),
                        React.createElement('li', { key: 'service4' }, 'Civil Engineering')
                    ])
                ]),
                React.createElement('div', {
                    key: 'contact-info'
                }, [
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-xl font-bold mb-4 font-playfair'
                    }, 'Contact'),
                    React.createElement('p', {
                        key: 'description',
                        className: 'text-gray-300'
                    }, 'Get in touch for your construction and infrastructure needs.')
                ])
            ]),
            React.createElement('div', {
                key: 'bottom',
                className: 'border-t border-gray-700 mt-8 pt-8 text-center'
            }, [
                React.createElement('p', {
                    key: 'copyright',
                    className: 'text-gray-400'
                }, `© ${new Date().getFullYear()} Samsher Buildcon. All rights reserved.`)
            ])
        ])
    ]);
};

const ServerProjectsSection = () => {
    const projects = [
        {
            title: 'CKP Bazaar',
            description: 'A landmark multi-functional commercial complex featuring state-of-the-art retail spaces and a magnificent banquet hall. The project showcases modern architectural principles with a focus on user experience and high footfall management.',
            category: 'Commercial',
            imgSrc: '/images/WhatsApp-Image-2024-07-25-at-12.57.21-PM-scaled.jpeg'
        },
        {
            title: 'Eco-Friendly Site Barricading',
            description: 'Implementation of sustainable and robust bamboo barricades for large-scale project sites. This eco-friendly solution provides effective site control while minimizing environmental impact.',
            category: 'Infrastructure',
            imgSrc: '/images/photo_2024-01-29_22-42-42.jpg'
        },
        {
            title: 'National Highway Safety Enhancement',
            description: 'Precision installation of highway crash barriers along key national routes. This critical infrastructure project significantly enhances road safety and prevents accidents through meticulous engineering and execution.',
            category: 'Infrastructure',
            imgSrc: '/images/247792f9-b6cc-4e34-9c9a-78705af5a0e6.jpeg'
        },
        {
            title: 'Office Building Construction, Jharkhand',
            description: 'A comprehensive office building project in Jharkhand featuring modern architectural design, efficient space utilization, and contemporary amenities to support business operations and professional growth.',
            category: 'Commercial',
            imgSrc: '/images/work/commercial 1.jpeg'
        },
        {
            title: 'Water Tower Construction, Bokaro, Jharkhand',
            description: 'Strategic construction of a high-capacity water tower in Bokaro, Jharkhand, engineered to provide reliable water supply infrastructure with advanced storage systems and distribution capabilities for the local community.',
            category: 'Industrial',
            imgSrc: '/images/work/industrial 1.jpeg'
        },
        {
            title: 'Boundary Wall Construction, Orissa',
            description: 'Robust boundary wall construction project in Orissa featuring reinforced concrete structure, security enhancements, and weather-resistant design to provide long-lasting perimeter protection and property demarcation.',
            category: 'Infrastructure',
            imgSrc: '/images/work/industrial 2.jpeg'
        },
        {
            title: 'Warehouse Construction, Orissa',
            description: 'Large-scale warehouse facility construction in Orissa designed for optimal storage capacity, efficient logistics operations, and modern material handling systems to support industrial and commercial distribution needs.',
            category: 'Industrial',
            imgSrc: '/images/work/industrial 3.jpeg'
        },
        {
            title: 'Oxygen Plant, Orissa',
            description: 'Critical oxygen plant construction in Orissa featuring advanced gas production technology, safety systems, and quality control measures to ensure reliable medical and industrial oxygen supply for healthcare and manufacturing sectors.',
            category: 'Industrial',
            imgSrc: '/images/work/industrial 4.jpeg'
        },
        {
            title: 'Colvet Bridge Construction, Saraileka',
            description: 'Engineering excellence in bridge construction at Saraileka featuring reinforced concrete design, load-bearing capacity optimization, and weather-resistant construction to enhance regional connectivity and transportation infrastructure.',
            category: 'Infrastructure',
            imgSrc: '/images/work/infra 1.jpeg'
        },
        {
            title: 'Pipe Laying Work, Jamshedpur',
            description: 'Comprehensive pipe laying infrastructure project in Jamshedpur involving precision installation of water supply and drainage systems with advanced pipeline technology to ensure efficient utility distribution and urban development support.',
            category: 'Infrastructure',
            imgSrc: '/images/work/infra 2.jpeg'
        },
        {
            title: 'House Construction Work, Bihar',
            description: 'Quality residential house construction project in Bihar featuring modern architectural design, durable materials, and efficient space planning to create comfortable living spaces with contemporary amenities and structural integrity.',
            category: 'Residential',
            imgSrc: '/images/work/residential 1.jpeg'
        },
        {
            title: 'Luxury Villas',
            description: 'Premium luxury villa construction featuring bespoke architectural designs, high-end interior finishes, and sophisticated amenities including landscaped gardens, modern security systems, and energy-efficient technologies for discerning homeowners.',
            category: 'Residential',
            imgSrc: '/images/work/residential 2.jpeg'
        }
    ];

    return React.createElement('section', {
        id: 'projects',
        className: 'py-20 bg-white'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'text-center mb-16'
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair'
                }, 'Our Works'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Explore our diverse portfolio of successful projects across various sectors, showcasing our expertise and commitment to excellence.')
            ]),
            React.createElement('div', {
                key: 'projects-grid',
                className: 'grid md:grid-cols-2 gap-8'
            }, projects.map((project, index) =>
                React.createElement('div', {
                    key: index,
                    className: 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
                }, [
                    project.imgSrc && React.createElement('div', {
                        key: 'image',
                        className: 'h-48 overflow-hidden'
                    }, [
                        React.createElement('img', {
                            key: 'project-img',
                            src: project.imgSrc,
                            alt: project.title,
                            className: 'w-full h-full object-cover'
                        })
                    ]),
                    React.createElement('div', {
                        key: 'content',
                        className: 'p-6'
                    }, [
                        React.createElement('span', {
                            key: 'category',
                            className: 'inline-block px-3 py-1 bg-amber-600 text-white text-sm font-medium rounded-full mb-3'
                        }, project.category),
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-xl font-bold text-gray-900 mb-3 font-playfair'
                        }, project.title),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm leading-relaxed'
                        }, project.description)
                    ])
                ])
            ))
        ])
    ]);
};

const ServerClientsSection = () => {
    return React.createElement('section', {
        id: 'clients',
        className: 'py-20 bg-gray-50'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'text-center mb-16'
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair'
                }, 'Our Clients'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Trusted by leading organizations across various industries')
            ]),
            React.createElement('div', {
                key: 'content',
                className: 'text-center'
            }, [
                React.createElement('p', {
                    key: 'description',
                    className: 'text-lg text-gray-600 mb-8 max-w-2xl mx-auto'
                }, 'We are proud to have collaborated with a diverse range of industry leaders and esteemed organizations, building strong partnerships founded on trust and exceptional results. Our valued clients include major corporations and local businesses across Eastern India.'),
                React.createElement('div', {
                    key: 'clients-grid',
                    className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'
                }, [
                    React.createElement('div', {
                        key: 'tata-steel',
                        className: 'bg-white p-6 rounded-lg shadow text-center'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-2'
                        }, 'Tata Steel Foundation'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm'
                        }, 'Major industrial and infrastructure projects')
                    ]),
                    React.createElement('div', {
                        key: 'tata-uisl',
                        className: 'bg-white p-6 rounded-lg shadow text-center'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-2'
                        }, 'Tata Steel UISL'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm'
                        }, 'Specialized construction and maintenance services')
                    ]),
                    React.createElement('div', {
                        key: 'beldih-club',
                        className: 'bg-white p-6 rounded-lg shadow text-center'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-2'
                        }, 'Tata Steel Beldih Club'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm'
                        }, 'Recreational and commercial facility construction')
                    ]),
                    React.createElement('div', {
                        key: 'md-issa',
                        className: 'bg-white p-6 rounded-lg shadow text-center'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-2'
                        }, 'Md Issa khan & Sons'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm'
                        }, 'Private construction and development projects')
                    ]),
                    React.createElement('div', {
                        key: 'diamond-enterprises',
                        className: 'bg-white p-6 rounded-lg shadow text-center'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-2'
                        }, 'New Diamond Enterprises'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm'
                        }, 'Commercial and industrial construction services')
                    ]),
                    React.createElement('div', {
                        key: 'khan-brothers',
                        className: 'bg-white p-6 rounded-lg shadow text-center'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-2'
                        }, 'Khan Brothers & Construction'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600 text-sm'
                        }, 'Collaborative construction and infrastructure projects')
                    ])
                ])
            ])
        ])
    ]);
};

const ServerContactSection = () => {
    return React.createElement('section', {
        id: 'contact',
        className: 'py-20 bg-white'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'text-center mb-16'
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair'
                }, 'Contact Us'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Get in touch for your construction and infrastructure needs')
            ]),
            React.createElement('div', {
                key: 'content',
                className: 'max-w-2xl mx-auto text-center'
            }, [
                React.createElement('p', {
                    key: 'description',
                    className: 'text-lg text-gray-600 mb-8'
                }, 'Ready to start your next construction project? Contact Samsher Buildcon today for professional consultation and competitive quotes. Our experienced team is here to help bring your vision to life with quality construction services across Jharkhand, Bihar, West Bengal, and Odisha.'),
                React.createElement('div', {
                    key: 'contact-info',
                    className: 'bg-gray-50 p-8 rounded-lg'
                }, [
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-xl font-bold text-gray-900 mb-6'
                    }, 'Get Professional Construction Services'),
                    React.createElement('p', {
                        key: 'services-list',
                        className: 'text-gray-600 mb-6'
                    }, 'We provide comprehensive construction services including site analysis, feasibility studies, preliminary design, and permit/zoning applications. We handle industrial, manufacturing, office, retail, recreational, healthcare, and commercial projects across Jharkhand, Bihar, West Bengal, and Odisha.'),
                    React.createElement('div', {
                        key: 'contact-details',
                        className: 'grid md:grid-cols-2 gap-6 mb-6'
                    }, [
                        React.createElement('div', {
                            key: 'office-info',
                            className: 'text-left'
                        }, [
                            React.createElement('h4', {
                                key: 'office-title',
                                className: 'font-semibold text-gray-900 mb-2'
                            }, 'Head Office'),
                            React.createElement('p', {
                                key: 'office-address',
                                className: 'text-sm text-gray-600 mb-2'
                            }, 'Near Makkah Masjid Road Godwon Area, B Block Dhatkidih, Bistupur, Jamshedpur – 831001'),
                            React.createElement('p', {
                                key: 'office-phone1',
                                className: 'text-sm text-gray-600'
                            }, 'Phone: +91 7004503386'),
                            React.createElement('p', {
                                key: 'office-phone2',
                                className: 'text-sm text-gray-600'
                            }, 'Phone: +91 06572951805'),
                            React.createElement('p', {
                                key: 'office-email',
                                className: 'text-sm text-gray-600'
                            }, 'Email: info@samsherbuildcon.com')
                        ]),
                        React.createElement('div', {
                            key: 'service-areas',
                            className: 'text-left'
                        }, [
                            React.createElement('h4', {
                                key: 'areas-title',
                                className: 'font-semibold text-gray-900 mb-2'
                            }, 'Service Areas'),
                            React.createElement('p', {
                                key: 'areas-list',
                                className: 'text-sm text-gray-600 mb-2'
                            }, 'Jharkhand, Bihar, West Bengal, Odisha'),
                            React.createElement('p', {
                                key: 'specialization',
                                className: 'text-sm text-gray-600'
                            }, 'Specializing in civil and mechanical contracting services'),
                            React.createElement('p', {
                                key: 'consultation',
                                className: 'text-sm text-gray-600'
                            }, 'Professional consultation and project management')
                        ])
                    ]),
                    React.createElement('p', {
                        key: 'cta',
                        className: 'text-lg font-semibold text-amber-600'
                    }, 'Contact us today for your construction project consultation!')
                ])
            ])
        ])
    ]);
};

const ServerManpowerSection = () => {
    const manpowerRoles = [
        {
            title: 'Project Estimators',
            description: 'Our estimators provide accurate and reliable cost and time assessments, helping to plan and budget your project effectively.'
        },
        {
            title: 'Architects',
            description: 'Professional architects who design innovative and functional structures, ensuring aesthetic appeal and structural integrity in every project.'
        },
        {
            title: 'Accountants',
            description: 'Expert financial management and budgeting ensure that all aspects of your project are financially sound and well-organized.'
        },
        {
            title: 'Skilled & Experienced Supervisors',
            description: 'Our supervisors oversee each project with a focus on quality and safety, ensuring that all work meets our high standards.'
        },
        {
            title: 'Skilled Craftsmen',
            description: 'Proficient masons and tradespeople who are dedicated to delivering excellent craftsmanship on every task.'
        },
        {
            title: 'Night Guards',
            description: 'Providing security and peace of mind by safeguarding the construction site around the clock.'
        },
        {
            title: 'Experienced Helpers',
            description: 'Support staff with hands-on experience who assist in various construction activities, enhancing efficiency and productivity.'
        }
    ];

    const certifications = [
        'ESIC Registered', 'GST', 'Labour License', 'Udyam Aadhar', 'BOCW', 'MSME', 'NIBOSH', 'IOSH', 'OSHA'
    ];

    return React.createElement('section', {
        id: 'manpower',
        className: 'py-20 bg-gray-50'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'text-center mb-16'
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair'
                }, 'Manpower Strength'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'At Samsher Buildcon, we believe that the foundation of our success is our highly skilled and dedicated workforce. Our team is comprised of professionals who bring a wealth of experience and expertise to every project, ensuring exceptional results.')
            ]),
            React.createElement('div', {
                key: 'manpower-grid',
                className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'
            }, manpowerRoles.map((role, index) =>
                React.createElement('div', {
                    key: index,
                    className: 'bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow'
                }, [
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-lg font-bold text-gray-900 mb-3'
                    }, role.title),
                    React.createElement('p', {
                        key: 'description',
                        className: 'text-gray-600 text-sm'
                    }, role.description)
                ])
            )),
            React.createElement('div', {
                key: 'certifications',
                className: 'bg-white rounded-2xl p-8 shadow-md'
            }, [
                React.createElement('div', {
                    key: 'cert-header',
                    className: 'text-center mb-8'
                }, [
                    React.createElement('h3', {
                        key: 'cert-title',
                        className: 'text-3xl font-bold text-gray-900 mb-4 font-playfair'
                    }, 'Certified and Compliant'),
                    React.createElement('p', {
                        key: 'cert-subtitle',
                        className: 'text-lg text-gray-600'
                    }, 'We are fully registered and compliant with all necessary regulations, ensuring every project is built on a foundation of trust and legality.')
                ]),
                React.createElement('div', {
                    key: 'cert-grid',
                    className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                }, certifications.map((cert, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'
                    }, [
                        React.createElement('div', {
                            key: 'check',
                            className: 'w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center'
                        }, [
                            React.createElement('span', {
                                key: 'checkmark',
                                className: 'text-white text-xs'
                            }, '✓')
                        ]),
                        React.createElement('span', {
                            key: 'cert-name',
                            className: 'text-sm font-medium text-gray-700'
                        }, cert)
                    ])
                ))
            ])
        ])
    ]);
};

const ServerMainPage = () => {
    return React.createElement('div', {}, [
        React.createElement(ServerHeroSection, { key: 'hero' }),
        React.createElement(ServerAboutSection, { key: 'about' }),
        React.createElement(ServerServicesSection, { key: 'services' }),
        React.createElement(ServerManpowerSection, { key: 'manpower' }),
        React.createElement(ServerProjectsSection, { key: 'projects' }),
        React.createElement(ServerClientsSection, { key: 'clients' }),
        React.createElement(ServerContactSection, { key: 'contact' })
    ]);
};

const ServerHSEPolicyPage = () => {
    return React.createElement('div', {
        className: 'min-h-screen bg-white py-12'
    }, [
        React.createElement('div', {
            key: 'container',
            className: 'container mx-auto px-4 max-w-4xl'
        }, [
            React.createElement('h1', {
                key: 'title',
                className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-playfair text-center'
            }, 'Health, Safety & Environment Policy'),
            React.createElement('div', {
                key: 'content',
                className: 'prose prose-lg max-w-none'
            }, [
                React.createElement('p', {
                    key: 'intro',
                    className: 'text-xl text-gray-600 mb-8 text-center'
                }, 'At Samsher Buildcon, we are committed to maintaining the highest standards of health, safety, and environmental protection in all our operations.'),

                React.createElement('section', {
                    key: 'commitment',
                    className: 'mb-12'
                }, [
                    React.createElement('h2', {
                        key: 'commitment-title',
                        className: 'text-2xl font-bold text-gray-900 mb-6 font-playfair'
                    }, 'Our Commitment'),
                    React.createElement('p', {
                        key: 'commitment-text',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Samsher Buildcon is dedicated to providing a safe and healthy working environment for all employees, contractors, and stakeholders across our 200+ construction projects. We believe that all workplace injuries and environmental incidents are preventable through proper planning, comprehensive training, and systematic implementation of safety protocols based on international standards including OHSAS 18001, ISO 14001, and ISO 45001.'),
                    React.createElement('p', {
                        key: 'commitment-text2',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Our QHSE (Quality, Health, Safety, and Environment) policy is integrated into all aspects of our business operations, from initial project planning and design to execution, monitoring, and completion. We maintain a zero-accident safety record with over 10 million safe man-hours worked across our projects.'),
                    React.createElement('p', {
                        key: 'commitment-text3',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Our commitment extends beyond compliance to creating a culture of safety excellence where every team member takes personal responsibility for their safety and that of their colleagues. We invest over ₹50 lakhs annually in safety training, equipment, and system improvements.')
                ]),

                React.createElement('section', {
                    key: 'health-safety',
                    className: 'mb-12'
                }, [
                    React.createElement('h2', {
                        key: 'health-title',
                        className: 'text-2xl font-bold text-gray-900 mb-6 font-playfair'
                    }, 'Health & Safety Standards'),
                    React.createElement('ul', {
                        key: 'health-list',
                        className: 'text-gray-600 space-y-3 mb-6'
                    }, [
                        React.createElement('li', { key: 'health1' }, '• Comprehensive safety training for all personnel before project commencement'),
                        React.createElement('li', { key: 'health2' }, '• Regular safety audits and inspections at all construction sites'),
                        React.createElement('li', { key: 'health3' }, '• Provision of appropriate personal protective equipment (PPE) for all workers'),
                        React.createElement('li', { key: 'health4' }, '• Implementation of emergency response procedures and first aid facilities'),
                        React.createElement('li', { key: 'health5' }, '• Zero tolerance policy for unsafe work practices'),
                        React.createElement('li', { key: 'health6' }, '• Regular health monitoring and occupational health assessments'),
                        React.createElement('li', { key: 'health7' }, '• Incident reporting and investigation procedures'),
                        React.createElement('li', { key: 'health8' }, '• Continuous improvement of safety management systems')
                    ])
                ]),

                React.createElement('section', {
                    key: 'environmental',
                    className: 'mb-12'
                }, [
                    React.createElement('h2', {
                        key: 'env-title',
                        className: 'text-2xl font-bold text-gray-900 mb-6 font-playfair'
                    }, 'Environmental Protection'),
                    React.createElement('p', {
                        key: 'env-intro',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'We are committed to minimizing our environmental impact and promoting sustainable construction practices:'),
                    React.createElement('ul', {
                        key: 'env-list',
                        className: 'text-gray-600 space-y-3 mb-6'
                    }, [
                        React.createElement('li', { key: 'env1' }, '• Compliance with all environmental regulations and standards'),
                        React.createElement('li', { key: 'env2' }, '• Waste reduction and proper disposal of construction materials'),
                        React.createElement('li', { key: 'env3' }, '• Water conservation and pollution prevention measures'),
                        React.createElement('li', { key: 'env4' }, '• Air quality monitoring and dust control procedures'),
                        React.createElement('li', { key: 'env5' }, '• Use of environmentally friendly construction materials where possible'),
                        React.createElement('li', { key: 'env6' }, '• Noise control measures to minimize community impact'),
                        React.createElement('li', { key: 'env7' }, '• Restoration of construction sites upon project completion'),
                        React.createElement('li', { key: 'env8' }, '• Regular environmental impact assessments')
                    ])
                ]),

                React.createElement('section', {
                    key: 'quality',
                    className: 'mb-12'
                }, [
                    React.createElement('h2', {
                        key: 'quality-title',
                        className: 'text-2xl font-bold text-gray-900 mb-6 font-playfair'
                    }, 'Quality Assurance'),
                    React.createElement('p', {
                        key: 'quality-text',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Quality is at the core of everything we do. Our quality management system ensures:'),
                    React.createElement('ul', {
                        key: 'quality-list',
                        className: 'text-gray-600 space-y-3 mb-6'
                    }, [
                        React.createElement('li', { key: 'quality1' }, '• Adherence to industry standards and building codes'),
                        React.createElement('li', { key: 'quality2' }, '• Regular quality inspections throughout project lifecycle'),
                        React.createElement('li', { key: 'quality3' }, '• Use of certified materials and equipment'),
                        React.createElement('li', { key: 'quality4' }, '• Skilled workforce with appropriate certifications'),
                        React.createElement('li', { key: 'quality5' }, '• Continuous monitoring and improvement processes'),
                        React.createElement('li', { key: 'quality6' }, '• Client satisfaction and feedback integration')
                    ])
                ]),

                React.createElement('section', {
                    key: 'responsibilities',
                    className: 'mb-12'
                }, [
                    React.createElement('h2', {
                        key: 'resp-title',
                        className: 'text-2xl font-bold text-gray-900 mb-6 font-playfair'
                    }, 'Responsibilities'),
                    React.createElement('div', {
                        key: 'resp-content',
                        className: 'grid md:grid-cols-2 gap-8'
                    }, [
                        React.createElement('div', {
                            key: 'management'
                        }, [
                            React.createElement('h3', {
                                key: 'mgmt-title',
                                className: 'text-lg font-semibold text-gray-900 mb-3'
                            }, 'Management Responsibilities'),
                            React.createElement('ul', {
                                key: 'mgmt-list',
                                className: 'text-gray-600 space-y-2'
                            }, [
                                React.createElement('li', { key: 'mgmt1' }, '• Provide leadership and resources for QHSE implementation'),
                                React.createElement('li', { key: 'mgmt2' }, '• Ensure compliance with all applicable regulations'),
                                React.createElement('li', { key: 'mgmt3' }, '• Regular review and improvement of policies'),
                                React.createElement('li', { key: 'mgmt4' }, '• Promote safety culture throughout the organization')
                            ])
                        ]),
                        React.createElement('div', {
                            key: 'employee'
                        }, [
                            React.createElement('h3', {
                                key: 'emp-title',
                                className: 'text-lg font-semibold text-gray-900 mb-3'
                            }, 'Employee Responsibilities'),
                            React.createElement('ul', {
                                key: 'emp-list',
                                className: 'text-gray-600 space-y-2'
                            }, [
                                React.createElement('li', { key: 'emp1' }, '• Follow all safety procedures and protocols'),
                                React.createElement('li', { key: 'emp2' }, '• Report unsafe conditions immediately'),
                                React.createElement('li', { key: 'emp3' }, '• Participate in safety training programs'),
                                React.createElement('li', { key: 'emp4' }, '• Use appropriate personal protective equipment')
                            ])
                        ])
                    ])
                ]),

                React.createElement('section', {
                    key: 'contact-hse',
                    className: 'bg-gray-50 p-8 rounded-lg'
                }, [
                    React.createElement('h2', {
                        key: 'contact-title',
                        className: 'text-2xl font-bold text-gray-900 mb-4 font-playfair'
                    }, 'QHSE Contact Information'),
                    React.createElement('p', {
                        key: 'contact-text',
                        className: 'text-gray-600 mb-4'
                    }, 'For any questions regarding our Health, Safety & Environment policy, or to report safety concerns, please contact our QHSE department.'),
                    React.createElement('p', {
                        key: 'contact-commitment',
                        className: 'text-gray-600 font-medium'
                    }, 'This policy is reviewed annually and updated as necessary to ensure continuous improvement in our QHSE performance.')
                ])
            ])
        ])
    ]);
};

export const ServerApp = ({ pathname = '/' }) => {
    const renderPage = () => {
        if (pathname.startsWith('/hse-policy')) {
            return React.createElement(ServerHSEPolicyPage);
        }
        return React.createElement(ServerMainPage);
    };

    return React.createElement('div', {
        className: 'bg-[#EDE8DF] text-gray-900 overflow-x-hidden'
    }, [
        React.createElement(ServerHeader, { key: 'header', isScrolled: false }),
        React.createElement('main', {
            key: 'main',
            className: 'pt-24'
        }, renderPage()),
        React.createElement(ServerFooter, { key: 'footer' })
    ]);
};