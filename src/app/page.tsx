"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Equivalent to the scroll active function
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 50;
        const sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize ScrollReveal if it exists in the browser
    if (typeof window !== 'undefined') {
      // Import is dynamic to avoid SSR issues
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true
        });

        // Apply reveal animations
        sr.reveal('.home-title', {});
        sr.reveal('.home-scroll', {delay: 200});
        sr.reveal('.home-img', {origin: 'right', delay: 400});
        sr.reveal('.about-img', {delay: 500});
        sr.reveal('.about-subtitle', {delay: 300});
        sr.reveal('.about-profession', {delay: 400});
        sr.reveal('.about-text', {delay: 500});
        sr.reveal('.about-social-icon', {delay: 600, interval: 200});
        sr.reveal('.skills-subtitle', {});
        sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 100});
        sr.reveal('.skills-img', {delay: 400});
        sr.reveal('.portfolio-img', {interval: 200});
        sr.reveal('.contact-subtitle', {});
        sr.reveal('.contact-text', {interval: 200});
        sr.reveal('.contact-input', {delay: 400});
        sr.reveal('.contact-button', {delay: 600});
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[var(--nav-bg-start)] to-[var(--nav-bg-end)]">
        <nav className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
          <Link href="#" className="text-white font-medium text-xl md:text-2xl">
            John Doe
          </Link>

          <div className="flex items-center">
            <ThemeToggle />
            
            <div className={`fixed top-16 md:top-20 right-0 w-4/5 h-full p-8 bg-[var(--card-bg)]/30 backdrop-blur-md transition-all duration-500 md:static md:h-auto md:w-auto md:p-0 md:bg-transparent md:backdrop-blur-none ${menuOpen ? 'right-0' : '-right-full'}`}>
              <ul className="md:flex">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id} className="mb-8 md:mb-0 md:ml-10">
                    <Link 
                      href={`#${item.id}`} 
                      className={`relative text-[var(--foreground)] md:text-white hover:text-[var(--primary)] md:hover:text-white text-base md:text-lg ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => handleNavLinkClick(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute left-0 top-8 w-full h-[0.18rem] bg-[var(--primary)] md:bg-white"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-white text-3xl cursor-pointer md:hidden ml-2" onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative bg-gradient-to-r from-[var(--nav-bg-start)] to-[var(--nav-bg-end)] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 h-screen pt-12">
            <div className="self-end text-white leading-none home-title">
              <h1 className="text-[6.25rem] md:text-[10.5rem] drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]">
                <TypeAnimation
                  sequence={[
                    'HELLO!!',
                    1000,
                    "I'm a Software Engineer",
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </h1>
            </div>

            <div className="self-end pb-8 home-scroll">
              <Link 
                href="#about" 
                className="writing-vertical-lr rotate-180 text-white inline-flex items-center"
              >
                
              </Link>
            </div>

            <div className="absolute right-0 bottom-0 home-img">
              <img 
                src="https://i.postimg.cc/XYKSjSKs/image-removebg-preview.png" 
                alt="John Doe" 
                className="w-[500px] md:w-[800px]"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <h2 className="relative text-[1.25rem] md:text-[2rem] text-[var(--foreground)] text-center mb-8 md:mb-12 section-title">
            About
            <span className="absolute w-8 md:w-16 h-[0.18rem] left-0 right-0 mx-auto top-8 md:top-12 bg-[var(--primary)]"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 text-center md:text-left">
            <div className="about-img">
              <div className="flex justify-center pt-4 w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-[var(--primary)] rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/mr5Gq3y4/4b6459411ea14f8e40ccda2dbabc98b9.jpg" 
                  alt="John Doe image" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[1.25rem] md:text-[2rem] text-[var(--primary)] mb-2 about-subtitle">I'm John Doe</h2>
              <span className="block mb-4 about-profession">Web Designer</span>
              <p className="mb-8 about-text">As a passionate web designer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience</p>

              <div className="about-social">
                <a href="#" className="text-2xl mx-2 hover:text-[var(--primary)] about-social-icon"><i className="bx bxl-linkedin"></i></a>
                <a href="#" className="text-2xl mx-2 hover:text-[var(--primary)] about-social-icon"><i className="bx bxl-github"></i></a>
                <a href="#" className="text-2xl mx-2 hover:text-[var(--primary)] about-social-icon"><i className="bx bxl-instagram"></i></a>
              </div>
            </div>   
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className="relative text-[1.25rem] md:text-[2rem] text-[var(--foreground)] text-center mb-8 md:mb-12 section-title">
            Skills
            <span className="absolute w-8 md:w-16 h-[0.18rem] left-0 right-0 mx-auto top-8 md:top-12 bg-[var(--primary)]"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="skills-box">
              <h3 className="text-[var(--primary)] mb-6 skills-subtitle">Development</h3>

              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">HTML</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">CSS</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">JAVASCRIPT</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">SCSS</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">REACT</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">VUE</span>

              <h3 className="text-[var(--primary)] mb-6 skills-subtitle">Design</h3>

              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">FIGMA</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">ADOBE XD</span>
              <span className="inline-block text-[0.813rem] md:text-[0.875rem] mr-4 mb-6 px-2 py-1 rounded-sm transition-all hover:bg-[var(--primary)] hover:text-white skills-name">PHOTOSHOP</span>
            </div>

            <div className="skills-img">
              <img 
                src="https://i.postimg.cc/fL7Z1bFw/skill.jpg" 
                alt="skills image"  
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-12 bg-[var(--card-bg)]">
          <h2 className="relative text-[1.25rem] md:text-[2rem] text-[var(--foreground)] text-center mb-8 md:mb-12 section-title">
            Portfolio
            <span className="absolute w-8 md:w-16 h-[0.18rem] left-0 right-0 mx-auto top-8 md:top-12 bg-[var(--primary)]"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              "https://i.postimg.cc/c4LgMqgK/work1.jpg",
              "https://i.postimg.cc/CxZRXj4S/work2.jpg",
              "https://i.postimg.cc/wjS1p7WJ/work3.jpg",
              "https://i.postimg.cc/N0m5fBVn/work4.jpg",
              "https://i.postimg.cc/vHTTxWkf/work5.jpg",
              "https://i.postimg.cc/cHT1rHcF/work6.jpg"
            ].map((img, index) => (
              <div key={index} className="portfolio-img relative overflow-hidden">
                <img 
                  src={img} 
                  alt={`work image ${index + 1}`} 
                  className="rounded-lg"
                />

                <div className="portfolio-link absolute -bottom-full w-full h-full flex justify-center items-center bg-[var(--card-bg)]/30 backdrop-blur-md rounded-lg cursor-pointer transition-all duration-300 hover:bottom-0">
                  <a href="#" className="text-[var(--foreground)]">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="relative text-[1.25rem] md:text-[2rem] text-[var(--foreground)] text-center mb-8 md:mb-12 section-title">
            Contact
            <span className="absolute w-8 md:w-16 h-[0.18rem] left-0 right-0 mx-auto top-8 md:top-12 bg-[var(--primary)]"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="contact-info">
              <h3 className="text-[var(--primary)] contact-subtitle">EMAIL</h3>
              <span className="inline-block mb-4 contact-text">info.mail.com</span>

              <h3 className="text-[var(--primary)] contact-subtitle">PHONE</h3>
              <span className="inline-block mb-4 contact-text">+20 999-999</span>

              <h3 className="text-[var(--primary)] contact-subtitle">ADDRESS</h3>
              <span className="inline-block mb-4 contact-text">Sacramento, California, USA</span>
            </div>

            <form className="contact-form">
              <div className="grid grid-cols-2 gap-4 contact-inputs">
                <input type="text" placeholder="Name" className="w-full p-3 outline-none border-[1.5px] border-[var(--border-color)] rounded-lg mb-8 bg-transparent contact-input" />
                <input type="email" placeholder="Email" className="w-full p-3 outline-none border-[1.5px] border-[var(--border-color)] rounded-lg mb-8 bg-transparent contact-input" />
              </div>

              <textarea rows={10} className="w-full p-3 outline-none border-[1.5px] border-[var(--border-color)] rounded-lg mb-8 resize-none bg-transparent contact-input"></textarea>

              <button type="submit" className="block bg-[var(--primary)] text-white py-3 px-10 ml-auto rounded-lg border-none outline-none cursor-pointer contact-button">Send</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--footer-bg)] py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-data">
            <h2 className="text-white mb-4">John Doe</h2>
            <p className="text-[var(--footer-text)]">I'm John Doe and this is my personal website</p>
          </div>

          <div className="footer-data">
            <h2 className="text-white mb-4">EXPLORE</h2>
            <ul>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id} className="mb-1">
                  <Link href={`#${item.id}`} className="text-[var(--footer-text)] hover:text-[var(--primary)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-data">
            <h2 className="text-white mb-4">FOLLOW</h2>
            <div>
              <a href="#" className="text-2xl text-[var(--footer-text)] mr-4 hover:text-[var(--primary)]"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="text-2xl text-[var(--footer-text)] mr-4 hover:text-[var(--primary)]"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="text-2xl text-[var(--footer-text)] mr-4 hover:text-[var(--primary)]"><i className="bx bxl-twitter"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}