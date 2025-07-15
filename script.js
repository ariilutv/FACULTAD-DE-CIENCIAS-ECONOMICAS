const materias = [
  // Área Contable / Auditoría
  { nombre: 'CONTABILIDAD I', semestre: 1, area: 'rosado', prereqs: [] },
  { nombre: 'CONTABILIDAD II', semestre: 2, area: 'rosado', prereqs: ['CONTABILIDAD I'] },
  { nombre: 'CONTABILIDAD III', semestre: 3, area: 'rosado', prereqs: ['CONTABILIDAD II'] },
  { nombre: 'COSTOS I', semestre: 4, area: 'rosado', prereqs: ['CONTABILIDAD III'] },
  { nombre: 'COSTOS II', semestre: 5, area: 'rosado', prereqs: ['COSTOS I'] },
  { nombre: 'TALLER DE COSTOS', semestre: 6, area: 'rosado', prereqs: ['COSTOS II'] },
  { nombre: 'CONTAB. DE BANCOS Y ENT. FINANCIERAS', semestre: 4, area: 'rosado', prereqs: ['CONTABILIDAD III'] },
  { nombre: 'CONTAB. AGROPECUARIA', semestre: 5, area: 'rosado', prereqs: ['COSTOS I'] },
  { nombre: 'CONTAB. DE SERVICIOS', semestre: 5, area: 'rosado', prereqs: ['COSTOS I'] },
  { nombre: 'CONTAB. PETROLERA Y MINERA', semestre: 5, area: 'rosado', prereqs: ['CONTAB. DE BANCOS Y ENT. FINANCIERAS'] },
  { nombre: 'GABINETE DE CONTABILIDAD', semestre: 6, area: 'rosado', prereqs: ['CONTAB. PETROLERA Y MINERA'] },
  { nombre: 'PRESUPUESTOS EMPRESARIALES', semestre: 5, area: 'rosado', prereqs: ['COSTOS I'] },
  { nombre: 'ANÁLISIS E INTERP. DE E.F.', semestre: 6, area: 'rosado', prereqs: ['CONTAB. DE SERVICIOS', 'CONTAB. AGROPECUARIA'] },
  { nombre: 'PRESUPUESTOS FISCALES', semestre: 7, area: 'rosado', prereqs: ['PRESUPUESTOS EMPRESARIALES'] },
  { nombre: 'AUDITORÍA I', semestre: 7, area: 'rosado', prereqs: ['GABINETE DE CONTABILIDAD', 'ANÁLISIS E INTERP. DE E.F.'] },
  { nombre: 'AUDITORÍA II', semestre: 8, area: 'rosado', prereqs: ['AUDITORÍA I'] },
  { nombre: 'AUDITORÍA TRIBUTARIA I', semestre: 8, area: 'rosado', prereqs: ['AUDITORÍA I'] },
  { nombre: 'AUDITORÍA TRIBUTARIA II', semestre: 9, area: 'rosado', prereqs: ['AUDITORÍA TRIBUTARIA I'] },
  { nombre: 'GABINETE DE AUDITORÍA', semestre: 9, area: 'rosado', prereqs: ['AUDITORÍA II'] },
  { nombre: 'AUDITORÍA FORENSE', semestre: 9, area: 'rosado', prereqs: ['SEMINARIO SUPERIOR'] },
  { nombre: 'AUDITORÍA DE GESTIÓN', semestre: 9, area: 'rosado', prereqs: ['AUDITORÍA II'] },
  { nombre: 'CONTABILIDAD INTEGRADA', semestre: 8, area: 'rosado', prereqs: ['PRESUPUESTOS FISCALES'] },
  { nombre: 'SEMINARIO SUPERIOR', semestre: 8, area: 'rosado', prereqs: ['PRESUPUESTOS FISCALES'] },
  { nombre: 'ADMINISTRACIÓN FINANCIERA', semestre: 9, area: 'rosado', prereqs: ['ANÁLISIS E INTERP. DE E.F.'] },
  { nombre: 'TALLER DE TITULACIÓN', semestre: 9, area: 'rosado', prereqs: [] }, // Validación final se puede manejar extra

  // Área Matemática
  { nombre: 'ÁLGEBRA', semestre: 1, area: 'verde', prereqs: [] },
  { nombre: 'MATEMÁTICA FINANCIERA', semestre: 1, area: 'verde', prereqs: [] },
  { nombre: 'CÁLCULO', semestre: 2, area: 'verde', prereqs: ['ÁLGEBRA'] },
  { nombre: 'ESTADÍSTICA I', semestre: 3, area: 'verde', prereqs: ['CÁLCULO'] },
  { nombre: 'ESTADÍSTICA II', semestre: 4, area: 'verde', prereqs: ['ESTADÍSTICA I'] },
  { nombre: 'INVESTIGACIÓN OPERATIVA', semestre: 3, area: 'verde', prereqs: ['ÁLGEBRA'] },
  { nombre: 'INFORMÁTICA I', semestre: 4, area: 'verde', prereqs: ['INVESTIGACIÓN OPERATIVA'] },
  { nombre: 'INFORMÁTICA II', semestre: 5, area: 'verde', prereqs: ['INFORMÁTICA I'] },
  { nombre: 'GESTIÓN DE RIESGOS', semestre: 4, area: 'verde', prereqs: ['ESTADÍSTICA I'] },

  // Área Económica
  { nombre: 'ECONOMÍA GENERAL', semestre: 2, area: 'celeste', prereqs: [] },
  { nombre: 'MICROECONOMÍA', semestre: 3, area: 'celeste', prereqs: ['CÁLCULO', 'ECONOMÍA GENERAL'] },
  { nombre: 'MACROECONOMÍA', semestre: 3, area: 'celeste', prereqs: ['ECONOMÍA GENERAL'] },
  { nombre: 'ECONOMÍA FISCAL', semestre: 7, area: 'celeste', prereqs: ['MICROECONOMÍA'] },
  { nombre: 'ECONOMÍA MONETARIA', semestre: 7, area: 'celeste', prereqs: ['MACROECONOMÍA'] },
  { nombre: 'PREP. Y EVAL. DE PROYECTOS', semestre: 7, area: 'celeste', prereqs: ['TALLER DE COSTOS'] },
  { nombre: 'COMERCIO INTERNACIONAL', semestre: 8, area: 'celeste', prereqs: ['ECONOMÍA MONETARIA'] },
  { nombre: 'SEMINARIO BÁSICO', semestre: 2, area: 'celeste', prereqs: [] },

  // Área Administrativa
  { nombre: 'ADMINISTRACIÓN GENERAL', semestre: 1, area: 'morado', prereqs: [] },
  { nombre: 'SISTEMAS ADMINISTRATIVOS', semestre: 2, area: 'morado', prereqs: ['ADMINISTRACIÓN GENERAL'] },
  { nombre: 'ADMINISTRACIÓN DE PERSONAL', semestre: 4, area: 'morado', prereqs: ['DERECHO DEL TRABAJO', 'SISTEMAS ADMINISTRATIVOS'] },
  { nombre: 'ORGANIZACIÓN Y MÉTODOS', semestre: 6, area: 'morado', prereqs: ['ADMINISTRACIÓN DE PERSONAL'] },

  // Área Jurídica
  { nombre: 'DERECHO COMERCIAL', semestre: 1, area: 'naranja', prereqs: [] },
  { nombre: 'DERECHO DEL TRABAJO', semestre: 2, area: 'naranja', prereqs: ['DERECHO COMERCIAL'] },
  { nombre: 'DERECHO TRIBUTARIO', semestre: 5, area: 'naranja', prereqs: ['DERECHO DEL TRABAJO'] },

  // Área Metodología
  { nombre: 'MÉTODOS Y TÉC. DE INVESTIGACIÓN', semestre: 9, area: 'rojo', prereqs: ['ORGANIZACIÓN Y MÉTODOS'] }
];

const estadoMaterias = {};

function render() {
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '';
  const porSemestre = {};
  materias.forEach(m => {
    if (!porSemestre[m.semestre]) porSemestre[m.semestre] = [];
    porSemestre[m.semestre].push(m);
  });

  for (let s in porSemestre) {
    const div = document.createElement('div');
    div.className = 'semestre';
    div.innerHTML = `<h3>${s}° Semestre</h3>`;
    porSemestre[s].forEach(m => {
      const divMat = document.createElement('div');
      const aprobado = estadoMaterias[m.nombre];
      const prereqIncompleto = m.prereqs.some(p => !estadoMaterias[p]);

      divMat.className = `materia ${m.area}`;
      if (aprobado) divMat.classList.add('aprobado');
      else if (prereqIncompleto) divMat.classList.add('bloqueado');

      divMat.textContent = m.nombre;

      if (!prereqIncompleto) {
        divMat.onclick = () => {
          estadoMaterias[m.nombre] = !estadoMaterias[m.nombre];
          render();
        };
      }

      div.appendChild(divMat);
    });
    contenedor.appendChild(div);
  }
}

render();
