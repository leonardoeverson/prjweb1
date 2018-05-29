function dadosDispositivos(connection){
	this._connection = connection;
}

dadosDispositivos.prototype.getData = function(id, callback){
		this._connection.query('select nome_dispositivo, topic, descricao from devices where id_usuario ='+id, callback);
}

dadosDispositivos.prototype.insertData = function(session_id, body, callback){
		var query = 'insert into devices (id_usuario, nome_dispositivo, topic, ip, protocolo, data_criacao, descricao ) VALUES';
		query += '('+session_id+',"'+body.nome_dispositivo+'","'+body.topic+'","'+body.ip+'","'+body.protocolo+'", NOW(), "'+body.descricao+'")';
		this._connection.query(query, callback);
}

module.exports = function(){
	return dadosDispositivos;
}

