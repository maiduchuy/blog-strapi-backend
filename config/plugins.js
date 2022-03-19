module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: env('BUCKET_NAME', '#bucketName#'),
            publicFiles: false,
            uniform: false,
            basePath: '',
        },
      },
    },
});
