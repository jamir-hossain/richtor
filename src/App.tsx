import { useState } from 'react';
import Editor from './editor';
import Renderer from './renderer';

function App() {
   const [data, setData] = useState('');

   return (
      <div className="container mx-auto py-10">
         <Editor
            output="html"
            placeholder={{
               paragraph: 'Enter text here...',
               imageCaption: 'Enter image caption here...',
            }}
            contentMinHeight={260}
            contentMaxHeight={600}
            initialContent={data}
            onContentChange={(value) => setData(value as string)}
         />

         <div className="mt-10">
            <Renderer value={data} />
         </div>
      </div>
   );
}

export default App;
