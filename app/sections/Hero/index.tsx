import HeroImage from './img/hero-background.jpg';

export function Hero() {
    return (
        <section className="w-full h-screen p-16 flex flex-col overflow-hidden">
            <div className={`relative w-full h-[85%] flex flex-col justify-center items-center rounded-[4em] bg-cover bg-center`} style={{ backgroundImage: `url(${HeroImage.src})` }}>
                <div className="absolute inset-0 bg-black/30 rounded-[4em] z-[1]" />
                <h1 className="w-full mb-[0.1em] lg:text-[6em] md:text-[4em] text-center text-white z-[100]">
                    Crie <span className="text-[#EA9D2B]">Memórias Incríveis</span>
                </h1>

                <p className="w-[70%] text-[1.2em] text-center leading-[1.5em] text-white z-[100] text-balance">
                    Transforme o espaço da sua escola, condomínio ou parque em um lugar mágico. Com playgrounds seguros, duráveis e cheios de diversão, oferecemos experiências que encantam crianças e tranquilizam adultos. Conheça nossas soluções e crie memórias que vão durar para sempre.
                </p>

                <button className="w-[30%] mt-8 p-8 rounded-[0.8em] bg-[#EA9D2B] text-white cursor-pointer text-[1.1em] z-[100]">
                    Faça um orçamento
                </button>
            </div>
        </section>
    );
}
