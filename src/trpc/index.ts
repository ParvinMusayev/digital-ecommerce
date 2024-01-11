import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "@/lib/validators/query-validator";

export const appRouter = router({
    auth: authRouter,

    getInfiniteProducts: publicProcedure.input(z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator
    }))
})

export type AppRouter = typeof appRouter