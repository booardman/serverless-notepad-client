export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-va"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ofwkdeqz1c.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9vwlO94Gn",
    APP_CLIENT_ID: "4r21cs3cg2qvgj17kp6m8d8843",
    IDENTITY_POOL_ID: "us-east-1:adf1ccef-0f3c-4c6e-bd65-e009fd302deb"
  },
  STRIPE_KEY: "pk_test_51HMIOzDitwBAhzQBIupJ5PFwDPv73cBiMVhcdRPJP2gqQabVtPeHtr5PpG9tvMKLIM3DwM1tdzw567tCbaytr7Er00kxQtHxDj"
};