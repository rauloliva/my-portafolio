'use client';

import type { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/system';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
