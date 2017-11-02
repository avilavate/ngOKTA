/*  Author: Jordan Melberg */
/** Copyright © 2016, Okta, Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Configuration file for login-widget-oidc
 *
 *  Reference http://developer.okta.com/docs/api/resources/okta_signin_widget.html#oidc-options
 **/

angular
.module("WidgetConfig", [])
.constant("CONFIG", {
    options : {
	      baseUrl: "http://localhost:8080",
        clientId: "0oaco08qr07M3irIi0h7",
        redirectUri: "http://localhost:8080",
  	    authParams: {
    	      responseType: ["id_token", "token"],
    	      responseMode: "okta_post_message",
    	      scopes : [
      		      "openid",
      		      "email",
      		      "profile",
      		      "address",
      		      "phone"
    	      ]
  	    }
    }
});