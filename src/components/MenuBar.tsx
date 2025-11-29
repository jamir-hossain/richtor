import { memo } from 'react';

import { Toolbar, ToolbarDivider } from './ui/Toolbar';

import TableButton from '@/components/controls/TableButton';
import AlignPopover from './controls/AlignPopover';
import BoldButton from './controls/BoldButton';
import BulletListButton from './controls/BulletListButton';
import HeadingDropdown from './controls/HeadingDropdown';
import ItalicButton from './controls/ItalicButton';
import LinkButton from './controls/LinkButton';
import MoreMarkDropdown from './controls/MoreMarkPopover';
import OrderedListButton from './controls/OrderedList';
import RedoButton from './controls/RedoButton';
import TextColorButton from './controls/TextColorButton';
import TextHighlightButton from './controls/TextHighlightButton';
import UnderlineButton from './controls/UnderlineButton';
import UndoButton from './controls/UndoButton';
import ImageButton from './controls/ImageButton';
import YoutubeButton from './controls/YoutubeButton';
import CodeBlockButton from './controls/CodeBlockButton';
import BlockquoteButton from './controls/BlockquoteButton';

const MenuBar = () => {
   return (
      <div className="rte-menu-bar">
         <Toolbar dense>
            <UndoButton />
            <RedoButton />
            {/* <ClearFormatButton /> */}

            <ToolbarDivider />

            <HeadingDropdown />

            <ToolbarDivider />

            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <MoreMarkDropdown />

            <ToolbarDivider />

            <TextColorButton />
            <TextHighlightButton />

            <ToolbarDivider />

            <AlignPopover />
            <BulletListButton />
            <OrderedListButton />

            <ToolbarDivider />

            <BlockquoteButton />
            <LinkButton />
            <ImageButton />
            <YoutubeButton />
            <CodeBlockButton />
            <TableButton />
            {/* <InsertDropdown /> */}
         </Toolbar>
      </div>
   );
};

export default memo(MenuBar);
