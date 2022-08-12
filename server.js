var http = reqiure('http');
function onRequest(request,responce)
{
    responce.write("hello i am a server for fyp");
    responce.end();

}
http.createServer(onRequest).listen(8000);
