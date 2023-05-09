import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TitlePaper from '../molecules/TitlePaper';
import { getCodeString } from 'rehype-rewrite';
import CodeIcon from '@mui/icons-material/Code';
import katex from 'katex';
import html2pdf from 'html2pdf.js';
import 'katex/dist/katex.css';

const mdKaTeX = `# Tarea N° X: Título de la Tarea

![](https://raw.githubusercontent.com/VadokDev/Ishvel/main/editor/public/kiwi.png)

En este párrafo se debería dar el contexto del problema que buscamos resolver, se sugiere que éste sea corto para no aburrir al estudiante, interesante para captar su atención y que refleje un problema real, para que así el estudiante le encuentre sentido a resolver un problema utilizando la programación, de esta manera el proceso de aprendizaje y desarrollo que el estudiante vivirá gracias a esta tarea será mucho mejor. En el caso de no tener alguna idea sobre el contexto en que se puede basar esta tarea, se recomienda utilizar la sugerencia de Google Trends que está en la esquina inferior derecha de este editor, es una sugerencia por defecto y con ella se pueden sacar muy buenas ideas!.

El formato de escritura de este editor es **Markdown**, el cual con la barra de herramientas de arriba, permite estilizar fácilmente la tarea, desde aspectos en la tipografía, hasta fórmulas matemáticas:

\`\`\`KaTeX
d = \\sqrt{(x_{2} - x_{1})^2 + (y_{2} - y_{1})^2}
\`\`\`

## Objetivos

Aquí se deben listar los objetivos de aprendizaje que esta tarea busca, se recomienda utilizar una lista no enumerada para ello.

* Utilizar los operadores aritméticos para realizar cálculos complejos
* Aplicar los métodos de entrada y salida para pedir y mostrar datos al usuario

## Instrucciones

En esta sección se deberían dar las instrucciones de lo que se busca desarrollar, se recomienda utilizar una lista enumerada, para facilitar el entendimiento al estudiante sobre lo que tiene que convertir de lenguaje humano a lenguaje máquina:

1. Solicite la coordenada x de la posición del camión
2. Solicite la coordenada y de la posición del camión
3. Calcule la distancia del camión con respecto a la coordenada (123, 456)
4. Finalmente, muestre en pantalla la distancia calculada

## Ejemplos

\`\`\`
Hola!, por favor ingresa la posición del camión:

Coordenada X: 0
Coordenada Y: 25

La distancia al camión es de: 448.20754121277344
\`\`\`

## Recomendaciones

En esta sección se pueden dar indicios o hints a los estudiantes, que puedan ayudar en su proceso de desarrollo de la tarea, así como también, a evitar que utilicen herramientas o librerías que no son parte de los objetivos que la tarea busca evaluar.

* Recuerda utilizar sólo los contenidos vistos en clase
* El ejemplo es sólo explicativo, y no requiere que la salida de la tarea sea exactamente igual
* Recuerda que la raíz de un número es equivalente a elevar ese número a 1/2`;

const EditorArea = () => {
  const [value, setValue] = React.useState(mdKaTeX);
  const previewRef = React.useRef();

  const downloadPDF = () => {
    const element = previewRef.current.container.lastChild.lastChild.firstChild;
    const opt = {
      margin: 20,
      filename: 'homework.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true, useCORS: true },
      jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <Grid container direction={'column'} rowSpacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid item>
        <TitlePaper
          Icon={CodeIcon}
          content={'Resolver tarea'}
          showMetricsButton
          showDownloadButton
          downloadButtonHandler={downloadPDF}
        />
      </Grid>

      <Grid item>
        <Box height='90vh'>
          <MDEditor
            data-color-mode='light'
            ref={previewRef}
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
