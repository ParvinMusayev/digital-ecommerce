"use client";

import { PropsWithChildren, useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const Providers = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpc.QueryClientProvider)
  return <div>Provider</div>;
};

export default Providers;
