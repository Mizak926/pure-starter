export default (req, res) => {
  const { name = 'login' } = req.query
  res.status(200).send(`Hello loo${name}!`)
}
