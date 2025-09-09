const testingController = (req,res) => {
    res.status(200).send("<h1>Welcom to TODO app</h1>")
};


module.exports = { testingController };