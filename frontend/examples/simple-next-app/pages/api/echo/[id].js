export default function getById(req, res) {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify({
  //   message: req.query.id ?? 'Base message'
  // }));
  res.json({ yourId: req.query.id });
}