"use client";

import { SwiperSlide } from "swiper/react";
import { SwiperSlideComponent } from "../SwiperSlide";
import Image from "next/image";
import { TProduto } from "@/app/types/TProduto";

export function ProductSlide({ titulo, foto_1, foto_2, foto_3, foto_4 }: Pick<TProduto, "id" | "titulo" | "foto_1" | "foto_2" | "foto_3" | "foto_4">) {
    return (
        <SwiperSlideComponent>
            <SwiperSlide className="w-[200px] h-[200px] rounded-[50px]">
                <Image
                    src={foto_1.large}
                    alt={titulo}
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-inherit"
                />
            </SwiperSlide>
            <SwiperSlide className="w-[200px] h-[200px] rounded-[50px]">
                <Image
                    src={foto_2.large}
                    alt={titulo}
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-inherit"
                />
            </SwiperSlide>
            <SwiperSlide className="w-[200px] h-[200px] rounded-[50px]">
                <Image
                    src={foto_3.large}
                    alt={titulo}
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-inherit"
                />
            </SwiperSlide>
            <SwiperSlide className="w-[200px] h-[200px] rounded-[50px]">
                <Image
                    src={foto_4.large}
                    alt={titulo} width={500}
                    height={500}
                    className="w-full object-cover rounded-inherit"
                />
            </SwiperSlide>
        </SwiperSlideComponent>
    )
}