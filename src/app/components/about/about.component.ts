import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id= "about" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto w-full">
        <div class="flex flex-col items-center">
          <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl text-center mb-4">Transformando ideias em código.</h2>
          <h3><span class=" text-4xl font-bold text-indigo-600 sm:text-5xl md:text-3xl text-center"> Ariel Nicollas | Desenvolvedor Web</span></h3>
          <div class="mt-8 text-xl text-gray-500 leading-8 text-center max-w-3xl">
            <p class="animate-fade-in">
            Um desenvolvedor apaixonado e focado em criar soluções inovadoras através de código. Com experiência em tecnologias web modernas, adoro transformar ideias em realidade e construir aplicativos fáceis de usar que fazem a diferença.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
              <div class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Technical Skills</h3>
                
                <div class="space-y-6">
                  <div>
                    <h4 class="text-lg font-medium text-indigo-600 mb-2">Frontend Development</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Angular</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">TailwindCSS</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">TypeScript</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Next.js</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-600 mb-2">Backend Development</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Node.js</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">NestJS</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Go</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-600 mb-2">Database & Cloud</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Google Cloud</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">MongoDB</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">AWS</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Docker</span>
                      

                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Habilidades e Interesses</h3>
                <div class="space-y-6">
                  <div>
                    <h4 class="text-lg font-medium text-indigo-600 mb-2">Práticas de Desenvolvimento</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Clean Code</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">TDD</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">CI/CD</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Agile</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-600 mb-2">Habilidades Pessoais</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Trabalho em Equipe</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Comunicação</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Resolução de Problemas</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-600 mb-2">Outros</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Git</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Jira</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Figma</span>
                      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">VS Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
