import type { ReactNode } from 'react';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface ExpandibleProps {
  children: ReactNode;
}

const Expandible = ({ children }: ExpandibleProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2 max-w-md">
      {/* 
        if 'expand' false, set 'line-clamp-2' to show only 2 lines
        otherwiser, the class is removed to show all content
      */}
      <motion.div
        initial={false}
        animate={{ height: expand ? 'auto' : '3.3rem' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`overflow-hidden ${expand ? '' : 'line-clamp-2'}`}
      >
        <div className="text-default-400">{children}</div>
      </motion.div>

      <Button
        size="sm"
        variant="light"
        onPress={() => setExpand(!expand)}
        className="text-blue-200 text-sm px-0 data-[hover=true]:bg-transparent underline"
      >
        {expand ? 'Show less' : 'Show more'}
      </Button>
    </div>
  );
};

export default Expandible;
