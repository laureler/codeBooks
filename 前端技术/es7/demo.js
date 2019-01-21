const express = require('express');
const app = express();
app.listen(8000, '127.0.0.1');
app.get('/', (require, resp) => {
	resp.json({
		status: true,
		data: [
			{
				name: "wuyunlong",
				age: 14
			}, {
				name: "wuyunlong",
				age: 14
			}, {
				name: "wuyunlong",
				age: 14
			}
		]
	})
})
