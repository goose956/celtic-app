export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from ' + 'celtic' + ' API!',
    timestamp: new Date().toISOString(),
    method: req.method,
    app: 'celtic'
  })
}