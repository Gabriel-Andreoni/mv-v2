import { ProductCard } from "@/app/componentes/ProductCard";
import { manifest } from "@/app/lib/manifest";

export async function ProductList() {
  const produtosHomePage = await manifest.from("produtos-homepages").find();

  return (
    <section className="w-full min-h-auto px-[6em] bg-[#a52a2a]">
      <h1 className="py-2 flex flex-col text-center text-[6em] text-white text-balance">
        O Playground <span className="text-[#EA9D2B]">dos sonhos está aqui!</span>
      </h1>

      <ul className="w-full pb-[8em] flex justify-center flex-wrap gap-[2em] relative">
        {produtosHomePage.data.map((produto: any, index: number) => {
            return (
                <ProductCard
                    key={index}
                    image={produto.foto.large}
                    width={500}
                    height={232}
                    alt={produto.titulo}
                    title={produto.titulo}
                    description={produto.descricao}
                    link={'#'}
                />
            )
        })}
      </ul>
    </section>
  );
}