module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f5c2a79abd7d447bc471c8f29061052'),
  },
});
