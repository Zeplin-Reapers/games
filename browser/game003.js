
'use strict'

const estado =
{
  turno:0,
}

const html =
{
  arena:document.querySelector( '#tabuleiro' ),
  casas:document.querySelectorAll( '.casa' ),
}

const click = document.addEventListener( 'click', ( evento )=>
{
  if( evento.target.id.substring( 0, 4 ) === 'casa'
  && evento.target.innerHTML === '' )
  {
    ////////////////////////////////////////////////////////////////////////////
    //
    estado.turno % 2 === 0
    ? evento.target.innerHTML = 'X'
    : evento.target.innerHTML = 'O'

    let key = null

    ////////////////////////////////////////////////////////////////////////////
    //
    if( html.casas[ 0 ].innerHTML === html.casas[ 4 ].innerHTML
    && html.casas[ 4 ].innerHTML === html.casas[ 8 ].innerHTML
    || html.casas[ 2 ].innerHTML === html.casas[ 4 ].innerHTML
    && html.casas[ 4 ].innerHTML === html.casas[ 6 ].innerHTML
    || html.casas[ 3 ].innerHTML === html.casas[ 4 ].innerHTML
    && html.casas[ 4 ].innerHTML === html.casas[ 5 ].innerHTML
    || html.casas[ 1 ].innerHTML === html.casas[ 4 ].innerHTML
    && html.casas[ 4 ].innerHTML === html.casas[ 7 ].innerHTML )
    {
      if( html.casas[ 4 ].innerHTML !== '' ){ key = html.casas[ 4 ].innerHTML }
    }

    else if( html.casas[ 0 ].innerHTML === html.casas[ 1 ].innerHTML
    && html.casas[ 1 ].innerHTML === html.casas[ 2 ].innerHTML
    || html.casas[ 0 ].innerHTML === html.casas[ 3 ].innerHTML
    && html.casas[ 3 ].innerHTML === html.casas[ 6 ].innerHTML )
    {
      if(html.casas[ 0 ].innerHTML !== '' ){ key = html.casas[ 0 ].innerHTML }
    }

    else if( html.casas[ 2 ].innerHTML === html.casas[ 5 ].innerHTML
    && html.casas[ 5 ].innerHTML === html.casas[ 8 ].innerHTML
    || html.casas[ 6 ].innerHTML === html.casas[ 7 ].innerHTML
    && html.casas[ 7 ].innerHTML === html.casas[ 8 ].innerHTML )
    {
      if(html.casas[ 8 ].innerHTML !== '' ){ key = html.casas[ 8 ].innerHTML }
    }

    else if( estado.turno === 8 )
    {
      key = 'empate'
    }

    ////////////////////////////////////////////////////////////////////////////
    //
    estado.turno ++

    ////////////////////////////////////////////////////////////////////////////
    //
    if( key !== null )
    {
      setTimeout( ()=>
      {
        key === 'empate'
        ? alert( 'Stale Mate' )
        : alert( key + ' won!' )

        Array.from( html.casas ).forEach( ( casa )=>{ casa.innerHTML = '' } )

        estado.turno = 0
      }, 100 )
    }
  }
}, false)
