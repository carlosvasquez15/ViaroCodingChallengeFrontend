import { AlumnoType } from "../models/Alumno.type";
import instance from "./serviceInstance";
//import { toast } from "react-toastify";

export const getAlumnos = async (): Promise<AlumnoType[]> => {
    try {
      const response = await instance.get('/alumnos/getAllAlumnos');
      return response.data;
    } catch (error) {
      throw error;
    }
};


export const crearAlumno =async (alumno: AlumnoType): Promise<AlumnoType> => {
    try {
        const response = await instance.post('/alumnos/createAlumno', alumno);
        //toast.success('Operación Exitosa!');
        return response.data;
      } catch (error) {
        //toast.error('Ups! Ocurrió un error.');
        throw error;
      }
}

export const eliminarAlumno =async (alumno: AlumnoType): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            await instance.delete(`/alumnos/${alumno.id}`);
            //toast.success('Operación Exitosa!');
            resolve();
        } catch (error) {
            //toast.error('Ups! Ocurrió un error.');
            reject (error);
        }
    });    
}

export const modificarAlumno = async (alumno: AlumnoType): Promise<AlumnoType> => {
    try {
        const response = await instance.put(`/alumnos/${alumno.id}`, alumno);
        //toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        //toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

