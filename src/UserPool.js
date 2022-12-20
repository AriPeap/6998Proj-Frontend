import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: "us-east-1_cuqcY7N3g",
  ClientId: "6an11orkrkrfsq3hhu36olrprk",
};
export default new CognitoUserPool(poolData);
