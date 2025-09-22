import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Lovely professional university",
      year: "2022-2025",
      description: "Specialized in Web Development and Software Engineering"
    }
  ];

  const experience = [
    {
      position: "Frontend Developer",
      company: "ELEVATE LABS.",
      period: "2025 ",
      description: "Developing responsive web applications using React, TypeScript, and modern CSS frameworks."
    },
    
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and professional journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="glass-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate web developer with a love for creating beautiful, functional, 
                    and user-friendly websites. My journey in web development started during my 
                    university years, where I discovered the perfect blend of creativity and logic 
                    that coding provides.
                  </p>
                  <p>
                    With expertise in modern JavaScript frameworks, responsive design, and 
                    user experience optimization, I strive to build applications that not only 
                    look great but also perform exceptionally well across all devices.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Education */}
              <div className="glass-card">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold gradient-text">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4 pb-4">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                      <p className="text-muted-foreground mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="glass-card">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-secondary mr-3" />
                  <h3 className="text-2xl font-semibold gradient-text">Experience</h3>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-secondary/30 pl-4 pb-4">
                      <h4 className="font-semibold text-lg">{exp.position}</h4>
                      <p className="text-secondary font-medium">{exp.company}</p>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;