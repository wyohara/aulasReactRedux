import React from 'react';

/*
  Componente que é encapsulado com fragment
    - quando se usa fragment os componentes não serão exibidos com uma tag html encapsulando
      - outra forma de usar o React.Fragment é usar <> dados</>
*/
export default function ComponenteComFragmento(){
  return (
    <React.Fragment>
      <h2>Componente com Fragmento</h2>
      <strong> Inspecione este componente que você não verá uma div envolvendo-o</strong>
    </React.Fragment>
  );
}
