import { createProcessor } from '../../lib/processor';
import { components } from './components';

interface ServerRendererProps {
   children: string;
}

const ServerRenderer = ({ children }: ServerRendererProps) => {
   const processor = createProcessor({ components });
   const processed = processor.processSync(children);

   return <div className="rte-renderer tiptap ProseMirror !py-0">{processed.result}</div>;
};

export default ServerRenderer;
