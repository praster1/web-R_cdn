function ajax_readArticleComments()
{
	url = "/get_readArticle_board_community_comments/?requestUUID=" + {{requestUUID}}
	
	$.ajax({
		url : url,
		success:function(data){
			console.log(data)
			$("#commentList").append(data.comments.toString())
		}
	})
}