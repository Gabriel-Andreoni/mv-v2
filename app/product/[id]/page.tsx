import { Menu } from "@/app/componentes/Menu";
import { ProductCard } from "@/app/componentes/ProductCard";
import { ProductSlide } from "@/app/componentes/ProductSlide";
import { manifest } from "@/app/lib/manifest";
import { Footer } from "@/app/sections/Footer";
import { TProduto } from "@/app/types/TProduto";


export default async function Produto({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const playground: Pick<TProduto, "id" | "titulo" | "foto_1" | "foto_2" | "foto_3" | "foto_4"> = await manifest.from("produtos_relacionados").findOneById(id);

    console.log(playground)

    const produtosRelacionados = await manifest.from("produtos_relacionados").find()
    return (
        <section className="w-full">
            <Menu />
            <div className="w-full mt-24 flex flex-col lg:flex-row">
                {/* IMAGENS */}
                <div className="w-5/12 h-full p-12">
                    <ProductSlide
                        id={playground?.id}
                        foto_1={playground.foto_1}
                        foto_2={playground.foto_2}
                        foto_3={playground.foto_3}
                        foto_4={playground.foto_4}
                        titulo={playground.titulo}

                    />
                </div>
                {/* CONTEÚDO */}
                <div className="w-full lg:w-1/2 flex items-center">
                    <div className="w-4/5 mx-auto py-16 flex flex-col">
                        <h1 className="text-5xl font-bold">Playground de Madeira</h1>
                        <p className="mt-8 leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, harum quae error aut nam aliquid odio quod corrupti, ullam delectus molestias! Nesciunt repellat magni quidem deleniti minima alias dolor molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla quam natus iure assumenda necessitatibus, facere possimus at esse totam culpa quo provident odio id velit fugit aperiam vero? Quidem.
                        </p>
                        <p className="mt-8 leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, harum quae error aut nam aliquid odio quod corrupti, ullam delectus molestias! Nesciunt repellat magni quidem deleniti minima alias dolor molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla quam natus iure assumenda necessitatibus, facere possimus at esse totam culpa quo provident odio id velit fugit aperiam vero? Quidem.
                        </p>
                        <button className="w-2/5 mt-8 py-4 rounded-lg bg-[#2B569C] text-white font-bold text-lg">
                            Fazer Orçamento
                        </button>
                    </div>
                </div>
            </div>

            {/* PRODUTOS RELACIONADOS */}
            <div className="w-full my-16">
                <ul className="w-[90%] mx-auto flex flex-wrap gap-16">
                    <h2 className="w-full text-2xl font-semibold">
                        Produtos Relacionados
                    </h2>

                    {produtosRelacionados.data.map((pR: any) => {
                        return (
                            <ProductCard
                                key={pR.id}
                                alt={pR.titulo}
                                image={pR.foto_1.large}
                                title={pR.titulo}
                                description={pR.descricao}
                                width={500}
                                height={500}
                                link={"#"}
                            />
                        );
                    })}
                </ul>
            </div>

            <Footer />
        </section>
    )
}