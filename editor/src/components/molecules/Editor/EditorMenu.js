import {
  Button,
  ButtonGroup,
  OutlinedInput,
  MenuItem,
  Select,
} from '@mui/material';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ImageIcon from '@mui/icons-material/Image';
import { FormatStrikethrough } from '@mui/icons-material';
import { useState } from 'react';
import AddImageUrl from '../../organisms/AddImageUrl';
import TextField from '@mui/material/TextField';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const EditorMenu = ({ editor }) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const handleImageModalOpen = () => setImageModalOpen(true);
  const handleImageModalClose = () => {
    setImageModalOpen(false);
    handleAddImageURL();
  };
  const handleAddImageURL = () => {
    if (imageURL) {
      editor.chain().focus().setImage({ src: imageURL }).run();
    }
  };
  const ImageUrlInput = () => (
    <TextField
      id='standard-basic'
      label='Standard'
      variant='standard'
      value={imageURL}
      onChange={(e) => setImageURL(e.target.value)}
    />
  );

  return (
    <div>
      <ButtonGroup
        size='small'
        variant='contained'
        aria-label='outlined primary button group'
      >
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <FormatSizeIcon />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBold().run()}>
          <FormatBoldIcon />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <FormatItalicIcon />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
          <FormatStrikethrough />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <FormatListBulletedIcon />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <FormatListNumberedIcon />
        </Button>
        <Button onClick={handleImageModalOpen}>
          <ImageIcon />
        </Button>
      </ButtonGroup>
      <AddImageUrl
        open={imageModalOpen}
        handleClose={handleImageModalClose}
        handleOpen={handleImageModalOpen}
        ImageInput={ImageUrlInput}
      />
    </div>
  );
};

export default EditorMenu;

/* <Button>
          <FormatAlignCenterIcon />
        </Button>
        <Button>
          <FormatAlignRightIcon />
        </Button>
        <Button>
          <FormatAlignLeftIcon />
        </Button>
         */
