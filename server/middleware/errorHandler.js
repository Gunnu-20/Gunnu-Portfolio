export const notFound = (req, res, next) => {
  res.status(404).json({ success: false, error: `Route ${req.originalUrl} not found` });
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ success: false, error: err.message });
};