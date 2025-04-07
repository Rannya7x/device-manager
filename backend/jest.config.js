export default{
    transform: {
      "^.+\\.js$": "babel-jest"
    },
    testMatch: [
        "**/__tests__/unit/**/*.test.js",
        "**/__tests__/integration/**/*.test.js" 
    ],     
};