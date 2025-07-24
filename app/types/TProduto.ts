import { StaticImageData } from "next/image"

export type TProduto = {
    id: string,
    descricao: string,
    titulo: string,
    foto_1: {large: StaticImageData},
    foto_2: {large: StaticImageData},
    foto_3: {large: StaticImageData},
    foto_4: {large: StaticImageData},
}