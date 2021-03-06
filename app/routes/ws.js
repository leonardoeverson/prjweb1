
module.exports = function(app){
	
	/*Etapas
	1 - Validar assinante
	2 - Detectar o envio de mensagens 
	3 - Enviar a mensagem recebida para o cliente inscrito para o tópico
	*/

	app.ws('/ws', (ws, req) => {
	    ws.on('message', msg => {
			var subscribe;	
			try{
				var mensagem  = JSON.parse(msg);
				if(mensagem["command"] == "subscribe"){
					console.log("cliente tentando estabelecer comunicação na porta:",req.connection.remotePort);				
					app.app.controllers.subscribe_controller.subscribe_check(app, req, JSON.parse(msg), ws)
				}else{
					ws.close();
				}
			}catch(e){
				console.log("Erro ao tentar interpretar os dados de entrada: ",e)
			}
	    })

	    ws.on('close', (ws, req) => {
	        console.log('WebSocket was closed')
		})
		
		ws.on('error',function(error){
			console.log(error)
		})
	
	})
}