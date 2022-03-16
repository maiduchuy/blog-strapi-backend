module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'tucD4g79XK9uTiaFoo9YWekDTXLYes6H'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f5c2a79abd7d447bc471c8f29061052'),
  },
});
