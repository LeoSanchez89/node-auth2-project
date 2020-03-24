const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/all", (req, res) => {

	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

router.get("/", (req, res) => {

	Users.findByDepartment(req.decodedToken.department)
		.then(users => {
			res.json(users);
		})
		.catch(err => {
			res.status(500).json({
				message: "error fetching users", err
			});
		});
})

module.exports = router;
