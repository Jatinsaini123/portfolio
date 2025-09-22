import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const { elementRef, isVisible } = useScrollReveal({ triggerOnce: true });

  const handleFilterChange = (newFilter: string) => {
    if (newFilter === activeFilter) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(newFilter);
      setIsAnimating(false);
    }, 200);
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce website built with React, Redux, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com/Jatinsaini123/eshop.git',
      liveUrl: 'https://jatinsaini123.github.io/eshop/'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using multiple weather APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b952?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'GSAP', 'TailwindCSS', 'Framer Motion'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A scalable API gateway with authentication, rate limiting, and monitoring capabilities for microservices architecture.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'AWS'],
      category: 'backend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={elementRef} className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Filter className="w-5 h-5 text-muted-foreground mr-2 mt-2" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-primary text-white shadow-glow scale-105'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.id}-${activeFilter}`}
                className={`project-card glass-card group ${
                  isAnimating ? 'filter-exit' : 'filter-enter'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;