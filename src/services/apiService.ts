import toast from "react-hot-toast";
import { AlumnoType } from "../models/Alumno.type";
import instance from "./serviceInstance";
import { ProfesorType } from "../models/ProfesorType";
import { GradoType } from "../models/GradoType";
import { AsignaturaType } from "../models/AsignaturaType";


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
        toast.success('Operación Exitosa!');
        return response.data;
      } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
      }
}

export const eliminarAlumno =async (alumno: AlumnoType): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            await instance.delete(`/alumnos/${alumno.id}`);
            toast.success('Operación Exitosa!');
            resolve();
        } catch (error) {
            toast.error('Ups! Ocurrió un error.');
            reject (error);
        }
    });    
}

export const modificarAlumno = async (alumno: AlumnoType): Promise<AlumnoType> => {
    try {
        const response = await instance.put(`/alumnos/${alumno.id}`, alumno);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

/*  -------------------------------------- */



export const getProfesores = async (): Promise<ProfesorType[]> => {
    try {
        const response = await instance.get('/profesores/getAllProfesores');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const crearProfesor = async (profesor: ProfesorType): Promise<ProfesorType> => {
    try {
        const response = await instance.post('/profesores/createProfesor', profesor);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const eliminarProfesor = async (profesor: ProfesorType): Promise<void> => {
    try {
        await instance.delete(`/profesores/${profesor.id}`);
        toast.success('Operación Exitosa!');
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const modificarProfesor = async (profesor: ProfesorType): Promise<ProfesorType> => {
    try {
        const response = await instance.put(`/profesores/${profesor.id}`, profesor);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

/*  -------------------------------------- */

export const getGrados = async (): Promise<GradoType[]> => {
    try {
        const response = await instance.get('/grados/getAllGrados');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const crearGrado = async (grado: GradoType): Promise<GradoType> => {
    try {
        const response = await instance.post('/grados/createGrado', grado);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const eliminarGrado = async (grado: GradoType): Promise<void> => {
    try {
        await instance.delete(`/grados/${grado.id}`);
        toast.success('Operación Exitosa!');
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const modificarGrado = async (grado: GradoType): Promise<GradoType> => {
    try {
        const response = await instance.put(`/grados/${grado.id}`, grado);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

/*  -------------------------------------- */


export const getAsignaturas = async (): Promise<AsignaturaType[]> => {
    try {
        const response = await instance.get('/asignaturas/getAllAsignaturas');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const crearAsignatura = async (asignatura: AsignaturaType): Promise<AsignaturaType> => {
    try {
        const response = await instance.post('/asignaturas/createAsignatura', asignatura);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const eliminarAsignatura = async (asignatura: AsignaturaType): Promise<void> => {
    try {
        await instance.delete(`/asignaturas/${asignatura.id}`);
        toast.success('Operación Exitosa!');
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

export const modificarAsignatura = async (asignatura: AsignaturaType): Promise<AsignaturaType> => {
    try {
        const response = await instance.put(`/asignaturas/${asignatura.id}`, asignatura);
        toast.success('Operación Exitosa!');
        return response.data;
    } catch (error) {
        toast.error('Ups! Ocurrió un error.');
        throw error;
    }
};

