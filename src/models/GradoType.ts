import { ProfesorType } from "./ProfesorType";

export interface GradoType {
    id: string;
    nombre: string;
    profesorId: string;
    profesor?: ProfesorType;
  }