const testingController = (req,res) => {
    res.status(200).send("<h1>Welcome to TODO app</h1>")
};


module.exports = { testingController };