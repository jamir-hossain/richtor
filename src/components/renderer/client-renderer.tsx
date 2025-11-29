'use client';

import { createProcessor } from '@/lib/processor';
import { createElement, Fragment, useEffect, useState } from 'react';
import { components } from './components';

interface ClientRendererProps {
   children: string;
}

const ClientRenderer = ({ children }: ClientRendererProps) => {
   const [Content, setContent] = useState(createElement(Fragment));

   useEffect(
      function () {
         (async function () {
            const processor = createProcessor({ components });
            const output = await processor.process(children);

            setContent(output.result);
         })();
      },
      [children],
   );

   return <div className="rte-renderer tiptap ProseMirror !py-0">{Content}</div>;
};

export default ClientRenderer;
