module.exports = (req, res, next) => {
    const { keyword } = req.body;
    const regEx = /^([a-zA-Z0-9 ]+)$/;
  
    function errorSend(message) {
      res.send({ error: true, message });
    }
  
    if (keyword.length === '') return errorSend('Please type a keyword');
    if (!regEx.test(keyword)) return errorSend('Keyword should include only letters, numbers and spaces');
    if (keyword.length > 39) return errorSend('Keyword should be up to 40 symbols');
  
    next();
  };
  