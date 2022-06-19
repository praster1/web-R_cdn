function ajax_readArticleComments(inputURL)
{
	url = "/" + inputURL + "/?requestUUID=" + {{requestUUID}}
	
	$.ajax({
		url : url,
		success:function(data){
			console.log(data)
			$("#commentList").append(data.comments.toString())
		}
	})
}