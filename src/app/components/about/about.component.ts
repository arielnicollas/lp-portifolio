import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id= "about" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div class="max-w-4xl mx-auto w-full">
        <div class="flex flex-col items-center">
          <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl text-center mb-4">Transformando ideias em código.</h2>
          <h3><span class=" text-4xl font-bold text-indigo-600 sm:text-5xl md:text-3xl text-center"> Ariel Nicollas | Software Engineer</span></h3>
          <div class="mt-8 text-xl text-gray-500 leading-8 text-center max-w-3xl">
            <p class="animate-fade-in font-medium">
            Um desenvolvedor apaixonado e focado em criar soluções inovadoras através de código. Com experiência em tecnologias web modernas, adoro transformar ideias em realidade e construir aplicativos fáceis de usar que fazem a diferença.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
              <div class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Competências Técnicas</h3>
                
                <div class="space-y-6">
                  <div>
                    <h4 class="text-lg font-medium text-indigo-700 mb-2">Frontend Development</h4>
                    <div class="flex flex-wrap gap-2 text-indigo-700">
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">React</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Angular</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">TailwindCSS</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">TypeScript</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Next.js</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-700 mb-2">Backend Development</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Node.js</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">NestJS</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Go</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-700 mb-2">Database & Cloud</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Google Cloud</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">MongoDB</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">AWS</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Docker</span>
                      

                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Soft Skills & Ferramentas</h3>
                <div class="space-y-6">
                  <div>
                    <h4 class="text-lg font-medium text-indigo-700 mb-2">Práticas de Desenvolvimento</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Clean Code</span>
                      <span class="px-3 py-1 bg-indigo-100  text-green-700 rounded-full text-sm font-bold">TDD</span>
                      <span class="px-3 py-1 bg-indigo-100  text-green-700 rounded-full text-sm font-bold">CI/CD</span>
                      <span class="px-3 py-1 bg-indigo-100  text-green-700 rounded-full text-sm font-bold">Agile</span>
                    </div>
                  </div>

                  <div> 
                    <h4 class="text-lg font-medium text-indigo-700 mb-2">Habilidades Pessoais</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Trabalho em Equipe</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Comunicação</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Resolução de Problemas</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-lg font-medium text-indigo-700 mb-2">Outros</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Git</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Jira</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">Figma</span>
                      <span class="px-3 py-1 bg-indigo-100 text-green-700 rounded-full text-sm font-bold">VS Code</span>
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
