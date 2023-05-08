import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TitlePaper from '../molecules/TitlePaper';
import { getCodeString } from 'rehype-rewrite';
import CodeIcon from '@mui/icons-material/Code';
import katex from 'katex';
import 'katex/dist/katex.css';

const mdKaTeX = `# Tarea N° 5: El Bazar de Pythonia 

En Pythonia existe un bazar que suele vender distintos productos, pero que siempre tiene problemas de logística con sus proveedores, por eso, te ha pedido a ti que como programador, le ayudes a calcular la distancia a la que se encuentra de cada uno, para así darle prioridad a aquellos proveedores que se encuentran más lejos, a la hora de insistir con los horarios de llegada de sus pedidos. 

Recuerda que la fórmula de distancia es:

\`\`\`KaTeX
d = \\sqrt{(x_{2} - x_{1})^2 + (y_{2} - y_{1})^2}
\`\`\`

## Instrucciones

Desarrolla un programa que:

1. Solicite la posición del bazar en formato (x, y)
2. Solicite la cantidad de proveedores a analizar
3. Por cada proveedor, solicite su posición en formato (x, y)
4. Finalmente, muestre en pantalla la posición del proveedor más lejano

## Ejemplos


\`\`\`
Hola!, por favor ingresa los siguientes datos para continuar:

Posición del bazar (x, y): 123.4, 9.3
Cantidad de proveedores: 4
Posición proveedor 1: 1.0, 9.0
Posición proveedor 2: 2.0, 190.0
Posición proveedor 3: 999.9, 999.9
Posición proveedor 4: 125.5, 15.5

El proveedor más lejano se encuentra en 999.9, 999.9
\`\`\`

## Recomendaciones

* Recuerda utilizar sólo los contenidos vistos en clase
* El ejemplo es sólo explicativo, y no requiere que la salida de la tarea sea exactamente igual`;
const EditorArea = () => {
  const [value, setValue] = React.useState(mdKaTeX);
  return (
    <Grid container direction={'column'} rowSpacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid item>
        <TitlePaper
          Icon={CodeIcon}
          content={'Resolver tarea'}
          showMetricsButton
          showDownloadButton
        />
      </Grid>

      <Grid item>
        <Box height='90vh'>
          <MDEditor
            height={'100%'}
            value={value}
            onChange={setValue}
            visibleDragbar={false}
            previewOptions={{
              components: {
                code: ({ inline, children = [], className, ...props }) => {
                  const txt = children[0] || '';
                  if (inline) {
                    if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
                      const html = katex.renderToString(
                        txt.replace(/^\$\$(.*)\$\$/, '$1'),
                        {
                          throwOnError: false,
                        }
                      );
                      return (
                        <code dangerouslySetInnerHTML={{ __html: html }} />
                      );
                    }
                    return <code>{txt}</code>;
                  }
                  const code =
                    props.node && props.node.children
                      ? getCodeString(props.node.children)
                      : txt;
                  if (
                    typeof code === 'string' &&
                    typeof className === 'string' &&
                    /^language-katex/.test(className.toLocaleLowerCase())
                  ) {
                    const html = katex.renderToString(code, {
                      throwOnError: false,
                    });
                    return (
                      <code
                        style={{ fontSize: '150%' }}
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    );
                  }
                  return <code className={String(className)}>{children}</code>;
                },
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditorArea;
