angular
.module("OktaConfig", [])
.constant("CONFIG", {
    options : {
	    url: "dev-342341.oktapreview.com",
	    clientId: "0oaco08qr07M3irIi0h7",
      redirectUri: "http://localhost:8080",
  	  authParams: {
    	  responseType: ["id_token", "token"],
    	  responseMode: "okta_post_message",
    	  scope : [
      		"openid",
      		"email",
      		"profile",
      		"address",
      		"phone"
    	  ]
  	  }
    },
    apiUrl : "http://localhost:9000/protected"
});