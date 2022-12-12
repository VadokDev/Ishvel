import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { CodeService } from '../../core/services/CodeService';
import CodeArea from '../organisms/CodeArea';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const ToolsArea = ({ SuggestionsArea, TestingArea }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const testCodeService = async () => {
    const codeService = await CodeService();
    codeService.getMetrics(`while(5 > 1):
        print("hola mundo")`);
  };
  return (
    <Grid container direction={'column'} rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item>
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
          <AppBar position='static'>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='secondary'
              textColor='inherit'
              variant='fullWidth'
              aria-label='full width tabs example'
            >
              <Tab label='Sugerencias' {...a11yProps(0)} />
              <Tab label='Resolución' {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <SuggestionsArea />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <CodeArea />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Grid>
      <Grid item>
        <Button>Descargar Tarea</Button>
      </Grid>
    </Grid>
  );
};
export default ToolsArea;
