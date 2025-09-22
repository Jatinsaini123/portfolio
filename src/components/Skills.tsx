import { useState, useEffect, useRef } from 'react';
import { Code, Palette, Database, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 95 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SASS/SCSS', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Principles', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      icon: Zap,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Webpack/Vite', level: 80 },
        { name: 'Docker', level: 60 },
        { name: 'Testing (Jest)', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-background-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`glass-card transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-primary mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="progress-bar">
                        <div
                          className={`progress-fill ${animateProgress ? 'animate' : ''}`}
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-semibold mb-6 gradient-text">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'GraphQL', 'Firebase', 'AWS', 'Figma', 'Adobe XD',
                'WordPress', 'Shopify', 'Three.js', 'WebGL', 'PWA', 'WebSocket'
              ].map((tech) => (
                <span
                  key={tech}
                  className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;