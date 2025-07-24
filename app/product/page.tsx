import Image from "next/image";
import MainImage from "./images/main-image.jpg";

import { Menu } from "../componentes/Menu";
import { Footer } from "../sections/Footer";
import Link from "next/link";
import { manifest } from "../lib/manifest";
import { ProductCard } from "../componentes/ProductCard";

export default async function PageDetail() {
  const produtosRelacionados = await manifest
    .from("produtos-relacionados")
    .find();
    
  return (
    <section className="w-full">
      <Menu />
      <div className="w-full mt-24 flex flex-col lg:flex-row">
        {/* IMAGENS */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="w-full flex justify-center">
            <Image
              src={MainImage}
              alt="Imagem principal"
              width={800}
              height={600}
              className="rounded-[4em] object-cover"
            />
          </div>

          <div className="w-[90%] my-8 flex gap-4 justify-center items-center flex-wrap"></div>
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
                image={pR.foto.large}
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
  );
}
