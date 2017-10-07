exports.index = function(req,res) {
	let content = {
		banner: [
		{
			id: 3,
			url: '//image/img-3.jpg',
			title : 'news3'
		},
		{
			id: 4,
			url: '//image/img-4.jpg',
			title : 'news4'

		}

		]
	}

res.json(content)
}