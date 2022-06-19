import * as trpc from '@trpc/server';

import { z } from 'zod';

export const appRouter = trpc
  .router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    async resolve({ input }) {
      const res = await fetch(`https://akabab.github.io/superhero-api/api/id/${input?.text}.json`);
      const rs = await res.json();
      return {
        name: rs.name,
        image:rs.images.lg
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
