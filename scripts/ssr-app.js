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
            }, 'Building Excellence'),
            React.createElement('h2', {
                key: 'subtitle',
                className: 'text-2xl md:text-3xl text-gray-700 mb-8 font-playfair scroll-animate'
            }, 'Premier Construction & Infrastructure Solutions'),
            React.createElement('p', {
                key: 'description',
                className: 'text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed scroll-animate'
            }, 'With years of expertise in civil and mechanical contracting, we deliver quality construction services, infrastructure development, and comprehensive project management solutions.'),
            React.createElement('div', {
                key: 'cta-buttons',
                className: 'flex flex-col sm:flex-row gap-4 justify-center scroll-animate'
            }, [
                React.createElement('a', {
                    key: 'projects-btn',
                    href: '#projects',
                    className: 'bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
                }, 'View Our Projects'),
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
                }, 'About Samsher Buildcon'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'A trusted name in construction and infrastructure development with years of proven expertise')
            ]),
            React.createElement('div', {
                key: 'content',
                className: 'grid md:grid-cols-2 gap-12 items-center'
            }, [
                React.createElement('div', {
                    key: 'text',
                    className: 'scroll-animate'
                }, [
                    React.createElement('h3', {
                        key: 'heading',
                        className: 'text-2xl font-bold text-gray-900 mb-6 font-playfair'
                    }, 'Excellence in Every Project'),
                    React.createElement('p', {
                        key: 'para1',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Samsher Buildcon stands as a premier construction company with extensive experience in civil and mechanical contracting. We specialize in delivering high-quality building services, infrastructure development, and comprehensive project management solutions across residential, commercial, and industrial sectors.'),
                    React.createElement('p', {
                        key: 'para2',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Our commitment to excellence, safety, and timely delivery has made us a trusted partner for clients across various sectors. We combine traditional craftsmanship with modern technology to create structures that stand the test of time.'),
                    React.createElement('p', {
                        key: 'para3',
                        className: 'text-gray-600 mb-6 leading-relaxed'
                    }, 'With a focus on quality, health, safety, and environmental (QHSE) standards, we ensure every project meets the highest industry benchmarks while maintaining cost-effectiveness and adherence to project timelines.'),
                    React.createElement('div', {
                        key: 'strengths',
                        className: 'mt-8'
                    }, [
                        React.createElement('h4', {
                            key: 'strengths-title',
                            className: 'text-lg font-semibold text-gray-900 mb-4'
                        }, 'Our Core Strengths:'),
                        React.createElement('ul', {
                            key: 'strengths-list',
                            className: 'text-gray-600 space-y-2'
                        }, [
                            React.createElement('li', { key: 'strength1' }, '• Experienced team of civil and mechanical engineers'),
                            React.createElement('li', { key: 'strength2' }, '• Comprehensive project management capabilities'),
                            React.createElement('li', { key: 'strength3' }, '• Strong focus on health, safety, and environmental compliance'),
                            React.createElement('li', { key: 'strength4' }, '• Quality assurance and timely project delivery'),
                            React.createElement('li', { key: 'strength5' }, '• Modern equipment and construction technology'),
                            React.createElement('li', { key: 'strength6' }, '• Proven track record across multiple industry sectors')
                        ])
                    ])
                ]),
                React.createElement('div', {
                    key: 'image',
                    className: 'scroll-animate'
                }, [
                    React.createElement('img', {
                        key: 'about-img',
                        src: '/images/Untitled-design-5.png',
                        alt: 'Samsher Buildcon construction site showing quality workmanship and modern construction techniques',
                        className: 'rounded-lg shadow-lg w-full h-auto'
                    })
                ])
            ])
        ])
    ]);
};

const ServerServicesSection = () => {
    const services = [
        {
            title: 'Building Construction',
            description: 'Complete residential and commercial building construction services with focus on quality and durability. We handle everything from foundation to finishing, ensuring structural integrity and aesthetic appeal.',
            icon: '🏗️',
            details: ['Residential construction', 'Commercial buildings', 'Industrial facilities', 'Renovation and remodeling']
        },
        {
            title: 'Infrastructure Development',
            description: 'Large-scale infrastructure projects including roads, bridges, and public facilities. Our expertise covers urban development and public infrastructure projects.',
            icon: '🌉',
            details: ['Road construction', 'Bridge development', 'Public facilities', 'Urban infrastructure']
        },
        {
            title: 'Project Management',
            description: 'Comprehensive project management services ensuring timely delivery and cost-effectiveness. We oversee every aspect from planning to completion.',
            icon: '📋',
            details: ['Project planning', 'Resource management', 'Quality control', 'Timeline management']
        },
        {
            title: 'Civil Engineering',
            description: 'Professional civil engineering services for complex construction and infrastructure projects. Our engineers provide technical expertise and innovative solutions.',
            icon: '⚙️',
            details: ['Structural design', 'Site analysis', 'Technical consulting', 'Engineering solutions']
        },
        {
            title: 'Mechanical Contracting',
            description: 'Specialized mechanical contracting services including HVAC systems, plumbing, and mechanical installations for various building types.',
            icon: '🔧',
            details: ['HVAC systems', 'Plumbing services', 'Mechanical installations', 'System maintenance']
        },
        {
            title: 'QHSE Compliance',
            description: 'Quality, Health, Safety, and Environmental compliance services ensuring all projects meet industry standards and regulatory requirements.',
            icon: '🛡️',
            details: ['Safety protocols', 'Environmental compliance', 'Quality assurance', 'Risk management']
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
                }, 'Our Services'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Comprehensive construction and infrastructure solutions')
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
                    service.details && React.createElement('ul', {
                        key: 'details',
                        className: 'text-sm text-gray-500 space-y-1'
                    }, service.details.map((detail, detailIndex) =>
                        React.createElement('li', {
                            key: detailIndex
                        }, `• ${detail}`)
                    ))
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
            title: 'Commercial Complex Development',
            description: 'Multi-story commercial complex with modern amenities and sustainable design features.',
            category: 'Commercial Construction'
        },
        {
            title: 'Residential Housing Project',
            description: 'Large-scale residential development with focus on quality living spaces and community facilities.',
            category: 'Residential Construction'
        },
        {
            title: 'Infrastructure Development',
            description: 'Road construction and bridge development project improving regional connectivity.',
            category: 'Infrastructure'
        },
        {
            title: 'Industrial Facility Construction',
            description: 'State-of-the-art industrial facility with specialized mechanical systems and safety features.',
            category: 'Industrial Construction'
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
                }, 'Our Projects'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-xl text-gray-600 max-w-3xl mx-auto'
                }, 'Showcasing our expertise across diverse construction and infrastructure projects')
            ]),
            React.createElement('div', {
                key: 'projects-grid',
                className: 'grid md:grid-cols-2 gap-8'
            }, projects.map((project, index) =>
                React.createElement('div', {
                    key: index,
                    className: 'bg-gray-50 p-6 rounded-lg'
                }, [
                    React.createElement('span', {
                        key: 'category',
                        className: 'text-sm text-amber-600 font-semibold'
                    }, project.category),
                    React.createElement('h3', {
                        key: 'title',
                        className: 'text-xl font-bold text-gray-900 mt-2 mb-3 font-playfair'
                    }, project.title),
                    React.createElement('p', {
                        key: 'description',
                        className: 'text-gray-600'
                    }, project.description)
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
                }, 'We have successfully completed projects for government agencies, private corporations, residential developers, and industrial clients. Our diverse portfolio demonstrates our capability to handle projects of varying scales and complexities.'),
                React.createElement('div', {
                    key: 'sectors',
                    className: 'grid md:grid-cols-3 gap-6 mt-12'
                }, [
                    React.createElement('div', {
                        key: 'government',
                        className: 'bg-white p-6 rounded-lg shadow'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-3'
                        }, 'Government Sector'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600'
                        }, 'Public infrastructure projects, government buildings, and municipal facilities')
                    ]),
                    React.createElement('div', {
                        key: 'private',
                        className: 'bg-white p-6 rounded-lg shadow'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-3'
                        }, 'Private Sector'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600'
                        }, 'Commercial buildings, corporate offices, and private development projects')
                    ]),
                    React.createElement('div', {
                        key: 'industrial',
                        className: 'bg-white p-6 rounded-lg shadow'
                    }, [
                        React.createElement('h3', {
                            key: 'title',
                            className: 'text-lg font-bold text-gray-900 mb-3'
                        }, 'Industrial Sector'),
                        React.createElement('p', {
                            key: 'description',
                            className: 'text-gray-600'
                        }, 'Manufacturing facilities, warehouses, and specialized industrial structures')
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
                }, 'Ready to start your next construction project? Contact Samsher Buildcon today for professional consultation and competitive quotes. Our experienced team is here to help bring your vision to life.'),
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
                    }, 'We provide comprehensive construction services including building construction, infrastructure development, project management, civil engineering, mechanical contracting, and QHSE compliance.'),
                    React.createElement('p', {
                        key: 'cta',
                        className: 'text-lg font-semibold text-amber-600'
                    }, 'Contact us today for your construction project consultation')
                ])
            ])
        ])
    ]);
};

const ServerMainPage = () => {
    return React.createElement('div', {}, [
        React.createElement(ServerHeroSection, { key: 'hero' }),
        React.createElement(ServerAboutSection, { key: 'about' }),
        React.createElement(ServerServicesSection, { key: 'services' }),
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
                    }, 'Samsher Buildcon is dedicated to providing a safe and healthy working environment for all employees, contractors, and stakeholders. We believe that all workplace injuries and environmental incidents are preventable through proper planning, training, and implementation of safety protocols.'),
                    React.createElement('p', {
                        key: 'commitment-text2',
                        className: 'text-gray-600 mb-4 leading-relaxed'
                    }, 'Our QHSE (Quality, Health, Safety, and Environment) policy is integrated into all aspects of our business operations, from project planning to execution and completion.')
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