export const apiToBO = apiobject => {
  return {
    name: apiobject.nombre,
    unit: apiobject.unidad_medida,
    code: apiobject.codigo,
  };
};
export const indicatorTransform = indicatorsApi => {
  const avoidKeys = ['version', 'autor', 'fecha'];
  return Object.keys(indicatorsApi).reduce((acc, el) => {
    if (avoidKeys.includes(el)) {
      return acc;
    }
    return [...acc, apiToBO(indicatorsApi[el])];
  }, []);
};

const seriesTransform = series => {
  return series.reduce((acc, el) => {
    return [...acc, {date: el.fecha, value: el.valor}];
  }, []);
};

export const oneIndicatorToBO = indicator => {
  console.log('api indicator', indicator);
  return {
    name: indicator.nombre,
    code: indicator.codigo,
    unit: indicator.unidad_medida,
    prefix: units[indicator.unidad_medida],
    date: indicator.serie[0].fecha,
    serie: [...seriesTransform(indicator.serie)],
  };
};

export const units = {
  Pesos: '$',
  Porcentaje: '%',
};
