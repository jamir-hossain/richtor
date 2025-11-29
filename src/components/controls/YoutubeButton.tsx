import { useEditorState } from '@tiptap/react';
import { useState } from 'react';
import MenuButton from '../MenuButton';
import { useTiptapContext } from '../Provider';
import Button from '@/components/ui/Button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Input from '../ui/Input';
import Label from '../ui/Label';

const YoutubeButton = () => {
   const { editor } = useTiptapContext();
   const [open, setOpen] = useState(false);
   const [url, setUrl] = useState('https://www.youtube.com/watch?v=DupfnOCH-JI');

   const state = useEditorState({
      editor,
      selector: (ctx) => {
         return {
            active: ctx.editor.isActive('youtube'),
            disabled: !ctx.editor.isEditable,
         };
      },
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (url.trim()) {
         editor.chain().focus().embedYoutube({ src: url }).run();
         setOpen(false);
         setUrl('https://www.youtube.com/watch?v=DupfnOCH-JI');
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <MenuButton icon="Youtube" tooltip="Youtube" onClick={() => setOpen(true)} {...state} />
         <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit}>
               <DialogHeader>
                  <DialogTitle>Embed YouTube Video</DialogTitle>
                  <DialogDescription>Enter the YouTube video URL to embed it in your content.</DialogDescription>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                  <div className="grid gap-3">
                     <Label>YouTube URL</Label>
                     <Input
                        id="youtube-url"
                        placeholder="https://www.youtube.com/watch?v=..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        autoFocus
                     />
                  </div>
               </div>
               <DialogFooter>
                  <DialogClose asChild>
                     <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" variant="primary">
                     Embed Video
                  </Button>
               </DialogFooter>
            </form>
         </DialogContent>
      </Dialog>
   );
};

export default YoutubeButton;
