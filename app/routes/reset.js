module.exports = function(app){
	app.get('/password/reset',function(request, response){
		request.render("cadastro/reset");
	})
}