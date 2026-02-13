

function Highlithis() {



    return (  
    <section className="bg-black py-20 px-6 " id="design">      
        <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
                <p className="text-xl text-gray-400">O iPhone 17 apresenta um design elegante com bordas finas e acabamento em vidro e alumínio, proporcionando uma experiência premium ao usuário.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="titanium design"></img>
                    <h3 className="font-bold text-3xl mb-2">Estrutura em Titânio</h3>
                    <p className="text-gray-300">Acabamento em titânio para maior durabilidade e leveza.</p>
                </div>


                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="iOS features"></img>
                   <h3 className="font-bold text-3xl mb-2">iOS 26</h3>
                   <p className="text-gray-300">O iPhone 17 vem com o iOS 26, oferecendo uma experiência de usuário fluida e intuitiva.</p>
               </div>
            </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip A18 Pro oferece desempenho excepcional e eficiência energética.</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg"></img>

                    <ul className="space-y-3 text-gray-300" >
                        <li>Desempenho 20% mais rápido</li>
                        <li>Gráficos aprimorados</li>
                        <li>Maior duração da bateria</li>
                        <li>Suporte avançado para IA e aprendizado de máquina</li>
                    </ul>
                </div>

                <div id="camera" className="text-center">
                    <h2 className="text-4xl font-bold mb-10">Sistema de Câmera Avançado</h2>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold mb-4 text-blue-600">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Câmera Tripla</h4>
                            <p className="text-gray-400">Capture fotos e vídeos incríveis com o sistema de câmera tripla do iPhone 17, que inclui uma lente ultra-angular, grande-angular e teleobjetiva.</p>
                        </div>
                                        
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold mb-4 text-orange-500">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visão ultra amplo para capturar mais em cada foto.</p>
                        </div>
                                      
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold mb-4 text-blue-600">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x para capturar detalhes distantes com clareza.</p>
                        </div>
                    </div>

                </div>



          </div>
    </section>
    );
}

export default Highlithis;