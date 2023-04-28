import React from 'react';
import Grid from '@mui/material/Grid';
import { useBearStore, codeService } from '../../core/services';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TitlePaper from '../molecules/TitlePaper';

const contentNamesArray = [
  { content: 'sequential', name: 'Secuenciales' },
  { content: 'conditionals', name: 'Condicionales' },
  { content: 'functions', name: 'Funciones' },
  { content: 'loops', name: 'Ciclos' },
  { content: 'strings', name: 'Strings' },
  { content: 'lists', name: 'Listas' },
  { content: 'files', name: 'Archivos' },
  { content: 'dicts', name: 'Diccionarios' },
];

const ConfigArea = () => {
  const semesters = useBearStore((state) => state.semesters);
  const semester = useBearStore((state) => state.semester);
  const content = useBearStore((state) => state.content);
  const code = useBearStore((state) => state.code);
  const setContent = useBearStore((state) => state.setContent);
  const setSemester = useBearStore((state) => state.setSemester);
  const setMetrics = useBearStore((state) => state.setMetrics);
  const updateSuggestions = useBearStore((state) => state.updateSuggestions);
  const metricsType = useBearStore((state) => state.metricsType);
  const setMetricsType = useBearStore((state) => state.setMetricsType);

  return (
    <Grid container direction={'column'} rowSpacing={2}>
      <Grid item>
        <TitlePaper Icon={EditIcon} content={'Configuración'} />
      </Grid>
      <Grid item>
        <Grid container direction={'column'} spacing={3}>
          <Grid item>
            <FormControl fullWidth>
              <FormHelperText>Contenido de la tarea</FormHelperText>
              <Select
                labelId='demo-simple-select-helper-label'
                id='demo-simple-select-helper'
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  setMetrics(codeService.getMetrics(code));
                  updateSuggestions();
                }}
              >
                {contentNamesArray.map(({ content: value, name }, i) => (
                  <MenuItem key={`content-sel-${i}`} value={value}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormHelperText>Semestre a comparar</FormHelperText>
              <Select
                labelId='demo-simple-select-helper-label2'
                value={semester}
                onChange={(e) => {
                  setSemester(e.target.value);
                  setMetrics(codeService.getMetrics(code));
                  updateSuggestions();
                }}
              >
                {semesters.map((name, i) => (
                  <MenuItem key={`semester-sel-${i}`} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormHelperText>Tareas a comparar</FormHelperText>
              <Select
                labelId='demo-simple-select-helper-label2'
                id='demo-simple-select-helper2'
                value={metricsType}
                onChange={(e) => {
                  setMetricsType(e.target.value);
                }}
              >
                <MenuItem value={'students'}>Estudiantes</MenuItem>
                <MenuItem value={'teachers'}>Profesores</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConfigArea;
