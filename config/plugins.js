module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
          bucketName: env('GCS_BUCKET_NAME'),
          uniform: false,
          basePath: '',
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    },
  },
});
