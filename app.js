const  express  =  require ( 'express' ) ;
const  app  =  express ( ) ;
const  porta  =  8080 ;

aplicativo . get ( '/' ,  ( req ,  res )  =>  res.send ( ' Hello World!' ) ) ;

aplicativo . escutar ( porta ) ;
consola . log ( `App rodando em http://localhost: ${ port } ` ) ;
