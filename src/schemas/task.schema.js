import { z } from "zod";

export const createTaskSchema = z.object({
  titulo: z.string({
    required_error: "El título es obligatorio",
  }),
  descripcion: z.string().optional(),
  estado: z.enum(["pendiente", "en progreso", "completada"], {
    required_error: "El estado es obligatorio y debe ser 'pendiente', 'en progreso' o 'completada'",
  }),
  prioridad: z.number().int().min(1).max(5).optional(),
  fecha: z.string().datetime().optional(),
});
