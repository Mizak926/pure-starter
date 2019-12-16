export default (req, res) => {
  const { name = 'from helllo page' } = req.query
  res.status(200).send(`Hello ${name}!`)
}
