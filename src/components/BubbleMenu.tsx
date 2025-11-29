import { type BubbleMenuPluginProps, BubbleMenuPlugin } from '@tiptap/extension-bubble-menu';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type BubbleMenuProps = Omit<Optional<BubbleMenuPluginProps, 'pluginKey' | 'editor'>, 'element'> & {
   className?: string;
   children: React.ReactNode;
};

export const BubbleMenu = ({ editor, className, children, ...props }: BubbleMenuProps) => {
   const menuEl = useRef<HTMLDivElement>(document.createElement('div'));

   useEffect(() => {
      if (editor?.isDestroyed) {
         return;
      }

      const { pluginKey = 'bubbleMenu', options = {}, updateDelay, resizeDelay, shouldShow = null, appendTo, getReferencedVirtualElement } = props;

      const menuEditor = editor;

      if (!menuEditor) {
         console.warn('BubbleMenu component is not rendered inside of an editor component or does not have editor prop.');
         return;
      }

      const plugin = BubbleMenuPlugin({
         updateDelay,
         resizeDelay,
         editor: menuEditor || editor,
         element: menuEl.current,
         pluginKey,
         shouldShow,
         appendTo,
         getReferencedVirtualElement,
         options,
      });

      menuEditor.registerPlugin(plugin);
      return () => {
         menuEditor.unregisterPlugin(pluginKey);
         window.requestAnimationFrame(() => {
            if (menuEl.current.parentNode) {
               menuEl.current.parentNode.removeChild(menuEl.current);
            }
         });
      };
   }, [editor]);

   const portal = createPortal(<div className={clsx('rte-bubble-menu', className)}>{children}</div>, menuEl.current);

   return portal;
};
