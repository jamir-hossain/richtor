import '@/style/editor.css';

import ClientRenderer from './components/renderer/client-renderer';
import ServerRenderer from './components/renderer/server-renderer';

interface TiptapRendererProps {
   value: string;
   ssr?: boolean;
}

const TiptapRenderer = ({ value, ssr = false }: TiptapRendererProps) => {
   if (ssr) {
      return <ServerRenderer>{value}</ServerRenderer>;
   }

   return <ClientRenderer>{value}</ClientRenderer>;
};

export default TiptapRenderer;
