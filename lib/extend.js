module.exports = function( destination, source ){
  for( var k in source ){
    if( source.hasOwnProperty( k ) ){
      destination[ k ] = source [ k ];
    }
  }
  return destination;
}