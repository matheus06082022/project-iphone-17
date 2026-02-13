

function Footer() {

    const sections = [
        {
            title: 'Comprar e Saber mais',
            links: ['iPhone 17', 'iPhone 17 Pro', 'Compare os Modelos, Acessórios']
        },
        {
            title: 'Especificações',
            links: ['Tela', 'Processador', 'Câmera', 'Bateria']
        },
        {
            title: 'Suporte',
            links: ['Manual do Usuário', 'Assistência Técnica', 'Garantia']
        },
        {
            title: 'Sobre a Apple',
            links: ['Carreiras', 'Sustentabilidade', 'Diversidade e Inclusão']
        }
    ];

    const buttonsLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];

    return (
        <footer className="bg-gray-900 border-t bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-semibold mb-2">{section.title}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {section.links.map((link, linkIndex) => (

                                <li key={linkIndex}>
                                <a className="hover:text-white cursor-pointer">{link}</a>
                                </li>

                            ))}
                        </ul>
                    </div>                                                   
                ))}    
                </div>   
            </div>


            <div className="pt-6 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-md text-gray-400 font-semibold mb-4">Copyrtight 2025 Apple Inc. Todos os direitos reservados.</p>
                    <div className="flex text-gray-500 gap-6">
                        {buttonsLinks.map((link, index) => (
                            <button key={link} className=" text-white hover:text-white mb-4">{link}</button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer