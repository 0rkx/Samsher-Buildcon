import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import HSEPolicyPage from './components/HSEPolicyPage';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
    const { pathname } = window.location;
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);



    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY;
                    setIsScrolled(scrollPosition > 50);
                    setShowBackToTop(scrollPosition > 400);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const timer = setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
                return () => clearTimeout(timer);
            }
        } else if (!pathname.startsWith('/hse-policy')) { // Don't scroll to top if there's a hash
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
        });

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, [pathname]); // Rerun observer on page change

    const renderPage = () => {
        if (pathname.startsWith('/hse-policy')) {
            return <HSEPolicyPage />;
        }
        return <MainPage />;
    };

    return (
        <div className="bg-[#EDE8DF] text-gray-900 overflow-x-hidden">
            <Header isScrolled={isScrolled} />
            <main className="pt-24">
                {renderPage()}
            </main>
            <Footer />
            <BackToTopButton isVisible={showBackToTop} />
        </div>
    );
};

export default App;
