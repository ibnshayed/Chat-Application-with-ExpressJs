
// get login page
const getInbox = (req, res, next) => {
	// res.render('inbox', {
	// 	title: 'Inbox - Chat Aplication',
	// })

	// decorateHtmlResponse handle title
	res.render('inbox')
}

module.exports = {
	getInbox,
}