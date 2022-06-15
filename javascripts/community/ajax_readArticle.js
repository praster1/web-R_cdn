function ajax_readArticle()
{
	url = "/get_readArticle_board_community/?requestUUID=" + {{requestUUID}}
	
	$.ajax({
		url : url,
		success:function(data){
			console.log(data)
		
			// 제목
			title = data.title.toString()
			html = '<h2>' + title + '</h2>'
			$("#title").append(html)
			changeTitle(title)		// 메타 태그: 타이틀 변경
			
			// 작성자
			html = '<b>작성자: </b>' + data.user_name.toString()
			$("#username").append(html)
			
			// 작성 일시
			html = '<b>작성 일시:</b> ' + data.created_at.toString()
			$("#created_at").append(html)
			
			// 조회수
			html = "조회 수: " + data.details.readed_count.toString() + "건"
			$("#viewer_count").append(html)
			
			// 내용
			html = data.content.toString()
			$("#content").append(html)
		}
	})
}