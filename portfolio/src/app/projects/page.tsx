import Link from 'next/link';
import Image from 'next/image';
import { otherProducts } from '@/data/products';
import { universityProjects } from '@/data/achievements';

const INDUSTRY_COLORS: Record<string, string> = {
  industrial: '#FF6B35',
  enterprise: '#3B82F6',
  healthcare: '#10B981',
  education: '#8B5CF6',
  hospitality: '#F59E0B',
  fintech: '#06B6D4',
  hr: '#EC4899',
};

const STATUS_MAP: Record<string, string> = {
  live: 'LIVE',
  'launching-2026': 'LAUNCHING 2026',
  'in-development': 'IN DEVELOPMENT',
  'in-beta': 'IN BETA',
  'under-nda': 'UNDER NDA',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen section-dark px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity"
          style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <h1
          className="font-bold tracking-tight mb-4"
          style={{
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontFamily: 'var(--font-sans)',
            color: '#FAFAFA',
          }}
        >
          OTHER PROJECTS
        </h1>
        <p
          className="text-base mb-12"
          style={{
            fontFamily: 'var(--font-sans)',
            color: '#737373',
          }}
        >
          Additional products, client projects, and academic work.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Client / product projects */}
          {otherProducts.map((product) => {
            const industryColor =
              INDUSTRY_COLORS[product.industry] || '#FF6B35';
            return (
              <div
                key={product.id}
                className="flex flex-col rounded-lg overflow-hidden border border-white/10"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: industryColor }}
                />
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] uppercase tracking-widest font-medium"
                      style={{
                        color: industryColor,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {product.industry}
                    </span>
                    {product.logoPath && (
                      <div className="relative w-8 h-8 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={product.logoPath}
                          alt={`${product.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <h3
                    className="text-lg font-bold mt-3 leading-tight"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: '#FAFAFA',
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-relaxed flex-1"
                    style={{
                      color: 'rgba(250, 250, 250, 0.6)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <span
                      className="text-[11px] uppercase tracking-widest"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color:
                          product.status === 'live' ? '#10B981' : '#737373',
                      }}
                    >
                      {STATUS_MAP[product.status] || product.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* University / academic projects */}
          {universityProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-lg overflow-hidden border border-white/10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div
                className="h-1.5"
                style={{ backgroundColor: '#8B5CF6' }}
              />
              <div className="flex flex-col flex-1 p-6">
                <span
                  className="text-[11px] uppercase tracking-widest font-medium"
                  style={{
                    color: '#8B5CF6',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  project
                </span>

                <h3
                  className="text-lg font-bold mt-3 leading-tight"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: '#FAFAFA',
                  }}
                >
                  {project.name}
                </h3>

                <p
                  className="mt-2 text-sm leading-relaxed flex-1"
                  style={{
                    color: 'rgba(250, 250, 250, 0.6)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'rgba(139, 92, 246, 0.12)',
                        color: '#8B5CF6',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Featured Project Showcases ─── */}
        <div className="mt-24 space-y-28">
          {/* IoT Bot — Systems Limited */}
          <section id="iot-bot" className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-[2px]"
                  style={{ backgroundColor: '#3B82F6' }}
                />
                <span
                  className="text-[11px] uppercase tracking-widest font-medium"
                  style={{ color: '#3B82F6', fontFamily: 'var(--font-mono)' }}
                >
                  Systems Limited
                </span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
                style={{ fontFamily: 'var(--font-sans)', color: '#FAFAFA' }}
              >
                IoT Bot
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  color: 'rgba(250, 250, 250, 0.6)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Designed and deployed interactive software for an autonomous robot
                featuring Face Recognition (FaceID), eye-tracking and facial
                animations, GPT integration for natural language queries,
                hardware-software integration with multiple sensors and actuators,
                Node-Red middleware, and an AI-powered Large Action Model (LAM).
                Built companion web apps with Node.js, Django, and Flask. Deployed
                to AWS/Azure.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'FaceID',
                  'Eye Tracking',
                  'GPT',
                  'Node-Red',
                  'LAM',
                  'Robotics',
                  'Node.js',
                  'Django',
                  'AWS',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      color: '#3B82F6',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-80 flex-shrink-0 rounded-lg overflow-hidden relative">
              <Image
                src="/images/projects/iot-bot.png"
                alt="IoT Bot — Systems Limited"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* Final Year Project */}
          <section id="fyp">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-[2px]"
                style={{ backgroundColor: '#FF6B35' }}
              />
              <span
                className="text-[11px] uppercase tracking-widest font-medium"
                style={{ color: '#FF6B35', fontFamily: 'var(--font-mono)' }}
              >
                Final Year Project &middot; Top Grade
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-sans)', color: '#FAFAFA' }}
            >
              ML-Based Industrial Sorting Platform
            </h2>
            <p
              className="text-sm leading-relaxed max-w-2xl mb-8"
              style={{
                color: 'rgba(250, 250, 250, 0.6)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Developed a platform capable of moving objects in omnidirectional
              paths using machine learning to optimize movements. Modular
              hexagonal panels connect magnetically, allowing reconfigurable
              sizing. Powered by Q-learning with an interactive GUI for
              real-time visualization.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {[
                'Q-Learning',
                'Modular Hardware',
                'Magnetic Assembly',
                'Omnidirectional',
                'Interactive GUI',
                'Reconfigurable',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'rgba(255, 107, 53, 0.12)',
                    color: '#FF6B35',
                    border: '1px solid rgba(255, 107, 53, 0.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  src: '/images/projects/fyp-2.png',
                  alt: 'ML Sorting Platform — overview',
                },
                {
                  src: '/images/projects/fyp-poster.jpg',
                  alt: 'ML Sorting Platform — hexagonal panels',
                },
                {
                  src: '/images/projects/fyp-1.gif',
                  alt: 'ML Sorting Platform — GUI visualization',
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative rounded-lg overflow-hidden border border-white/10"
                  style={{ aspectRatio: '8568 / 9023' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Junior Year Robotics Competition */}
          <section id="robotics">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-[2px]"
                style={{ backgroundColor: '#10B981' }}
              />
              <span
                className="text-[11px] uppercase tracking-widest font-medium"
                style={{ color: '#10B981', fontFamily: 'var(--font-mono)' }}
              >
                Competition Winner &middot; 1st Place
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-sans)', color: '#FAFAFA' }}
            >
              Robotics Competition — Maze-Solving Robots
            </h2>
            <p
              className="text-sm leading-relaxed max-w-2xl mb-8"
              style={{
                color: 'rgba(250, 250, 250, 0.6)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Developed multiple autonomous robots with maze mapping,
              path-finding, and wireless data transmission and control for maze
              mapping and maze solving challenges. 1st Place in competition.
              Received full funding from GIK Institute for the project.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {[
                'Maze Mapping',
                'Path-Finding',
                'Wireless Control',
                'Autonomous Robotics',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    color: '#10B981',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
              {[
                {
                  src: '/images/projects/jyc-1.png',
                  alt: 'Maze-solving robot — overview',
                },
                {
                  src: '/images/projects/jyc-2.png',
                  alt: 'Maze-solving robot — competition',
                },
                {
                  src: '/images/projects/jyc-3.png',
                  alt: 'Maze-solving robot — maze setup',
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="rounded-lg overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
