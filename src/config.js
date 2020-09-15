const dev = {
  STRIPE_KEY: "pk_test_51HMIOzDitwBAhzQBIupJ5PFwDPv73cBiMVhcdRPJP2gqQabVtPeHtr5PpG9tvMKLIM3DwM1tdzw567tCbaytr7Er00kxQtHxDj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notepad-api-2-dev-attachmentsbucket-10ukexxj5co55"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rr3nkoycpg.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_tTJZK03EA",
    APP_CLIENT_ID: "k7up2ot55mnsksfnp4kqvud5p",
    IDENTITY_POOL_ID: "us-east-1:350cd92a-1639-49f5-8533-1faa1f630de7"
  },
};

const prod = {
  STRIPE_KEY: "pk_test_51HMIOzDitwBAhzQBIupJ5PFwDPv73cBiMVhcdRPJP2gqQabVtPeHtr5PpG9tvMKLIM3DwM1tdzw567tCbaytr7Er00kxQtHxDj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notepad-api-2-serverlessdeploymentbuck-1pohozxffmh8k"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://m34yrxmzh0.execute-api.us-east-1.amazonaws.com/prod" 
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hjeHqjYV2", 
    APP_CLIENT_ID: "7fce5k0buvh8h4no1ukhted29u", 
    IDENTITY_POOL_ID: "us-east-1:edb290a2-520c-4e4c-8472-9bc504c2307b"
  }
};
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod' ? prod
    : dev;

export default {
  // Add common config values here 
  MAX_ATTACHMENT_SIZE: 5000000, 
  ...config
};