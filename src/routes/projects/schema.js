import { z } from 'zod';

export const formSchema = z.object({
	project_name: z.string().min(1, 'Project name is required'),
	project_start_date: z.date().optional(),
	project_end_date: z.date().optional(),
	project_description: z.string().optional(),
});
