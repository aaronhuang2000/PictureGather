
/* ===========================================================
 * bootstrap-tooltip.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



/* Toolbar */
$(document).ready(function(){
	
	$('a').on('click', function(){
		chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ){
			if( tabs.length != 0 ) {
				chrome.tabs.sendRequest(tabs[0].id, {msg: 'gather_pictures'}, function(response) {
					
				});
			}	
		});	
	});

});