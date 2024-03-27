import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import internal from "stream";

export type TodoDataType = {
  // userId: number;
  id: number;
  name: string;
  Description: string;
  Price:internal;
  image: ImageData;
};

export interface navDataI {
  id: number;
  text: string;
  href: '/about' | '/contact' | '/';
}


export interface brandDataI extends Pick<TodoDataType, 'id' | "title"> {
  description: string,
  icon: ReactNode
}

export interface productDataI extends Pick<TodoDataType, 'id' | "title"> {
  image: StaticImageData,
  price: number
}
export interface GlobalDataI extends Pick<TodoDataType, 'id' | "title"> {
  description: string,
  image: StaticImageData
}
