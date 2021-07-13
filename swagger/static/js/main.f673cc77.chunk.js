(this["webpackJsonpdashboard-v1"]=this["webpackJsonpdashboard-v1"]||[]).push([[10],{22:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(24),a="#009999",n="#FFCC66",i="#E6F5F5",o="#1EA5A5",c=Object(s.a)({palette:{primary:{main:a,light:"#4db6ac"},secondary:{light:"#FFFAE2",main:n},background:{default:"#FFFFFF",paper:"#f5f6f8"},action:{disabledBackground:"#F5F5F5",disabled:"#BFBFBF"},text:{primary:"#000000",secondary:"#00000099"},error:{main:"#ff6666"},warning:{main:n,dark:"#ff4540"},success:{main:"#32C8CD"},info:{main:a,dark:"#007AFF"},grey:{100:"#F9F9F9",200:"#E8E8E855",300:"#E5E5E5",400:"#DAD7FE",600:"#A6A6A6",700:"#7E7278"},filters:[{main:i,contrastText:o},{main:"#EFF2FE",contrastText:"#8A8AE9"},{main:i,contrastText:o},{main:"#FFFAE2",contrastText:"#EE9518"}]}})},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return y})),r.d(t,"f",(function(){return g}));var s=r(9),a=r(19),n=r.n(a),i=r(34),o=r(25),c=r(29),u=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},l=function(e){return new Promise((function(t){return setTimeout(t,e)}))},d=function(e,t){if(null===t)localStorage.setItem("version",e);else{var r=e.split("."),s=t.split("."),a=parseInt(r[0]),n=parseInt(s[0]),i=parseInt(r[1]),o=parseInt(s[1]),c=parseInt(r[2]),u=parseInt(s[2]);(n<a||o<i||u<c)&&(localStorage.clear(),window.location.reload())}},p=function(e){return e.substring(e.indexOf(":")+1,e.indexOf(";"))},m=function(e){return new Promise((function(t,r){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){return t(s.result)},s.onerror=function(e){return r(e)}}))},f=function(e){return e.split(/\n/)},y=function(){var e=Object(o.a)(n.a.mark((function e(t,r,s,a,o){var c,u,l,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={data:[]},t&&f(t).forEach((function(e){e&&c.data.push({text:e})})),null===r||void 0===r?void 0:r.length){u=Object(i.a)(r);try{for(u.s();!(l=u.n()).done;)d=l.value,c.data.push({uri:d})}catch(n){u.e(n)}finally{u.f()}}return s.forEach((function(e){var t=a[e],r=o[e];if(t&&r){var s="";try{s=JSON.parse(r)}catch(n){s=r}c[t]=s}})),e.abrupt("return",JSON.stringify(c,null," "));case 5:case"end":return e.stop()}}),e)})));return function(t,r,s,a,n){return e.apply(this,arguments)}}(),g=function(e){var t="",r=[],a=[],n={},i={};try{var o=JSON.parse(e);o.data.forEach((function(e){e.text&&(t+=e.text+"\n"),e.uri&&r.push(e.uri)})),Object.entries(o).forEach((function(e){var t=Object(s.a)(e,2),r=t[0],o=t[1];if("data"!==r){var u,l=Object(c.a)();a.push(l),n[l]=r,u="object"===typeof o&&null!==o?JSON.stringify(o):o,i[l]=u}}))}catch(u){console.log("ERROR:",u)}return{text:t,uris:r,keys:n,values:i,rows:a}}},55:function(e,t,r){"use strict";r.r(t);var s=r(3),a=(r(1),r(27)),n=r.n(a),i=r(46),o=r(69),c=r(22),u=r(28),l=r(64).version,d=localStorage.getItem("version");Object(u.e)(l,d);r(66)("./".concat("Swagger")).then((function(e){var t=e.default;n.a.render(Object(s.jsx)(o.a,{theme:c.a,children:Object(s.jsx)(i.c,{theme:c.a,children:Object(s.jsx)(t,{})})}),document.getElementById("root"))}))},64:function(e){e.exports=JSON.parse('{"name":"dashboard-v1","version":"1.3.0","private":true,"homepage":".","scripts":{"analyze-build":"source-map-explorer \'build/static/js/*.js\'","dev":"npm-run-all --parallel start_dev-server start","start":"react-scripts -r @cypress/instrument-cra start","start_dev-server":"node dev-resources/testServer.js","build":"CI=false react-scripts build","build-small":"GENERATE_SOURCEMAP=false npm run build","build-cdn":"PUBLIC_URL=https://api.jina.ai/swagger npm run build-small","dashboard":"REACT_APP_TARGET=Dashboard npm run","hub":"REACT_APP_TARGET=Hub npm run","swagger":"REACT_APP_TARGET=Swagger npm run","styleguide":"REACT_APP_TARGET=Styleguide npm run","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build","format":"prettier --write \\"src/**/*.{js,jsx, ts, tsx}\\"","lint":"eslint \\"src/**/*.{js,jsx, ts, tsx}\\" --max-warnings=0","cy:dev":"npx cypress open","cy:run":"percy exec -- npx cypress run"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"src/**/*.{js,jsx,ts,tsx,json,md}":["prettier --write","eslint --max-warnings=0"],"src/**/*.{css,scss}":["prettier --write","stylelint --max-warnings=0"]},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@emotion/core":"^11.0.0","@emotion/react":"^11.1.4","@emotion/styled":"^11.0.0","@material-ui/core":"^5.0.0-alpha.32","@material-ui/icons":"^4.11.2","@projectstorm/react-diagrams":"^6.0.1-beta.7","@reduxjs/toolkit":"^1.5.0","@sentry/react":"^6.1.0","@sentry/tracing":"^6.1.0","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@types/chart.js":"^2.9.27","@types/file-saver":"^2.0.1","@types/jest":"^26.0.13","@types/lodash":"^4.14.161","@types/node":"^14.6.4","@types/react":"^16.9.49","@types/react-dom":"^16.9.8","@types/react-grid-layout":"^1.1.1","@types/react-modal":"^3.10.6","@types/react-redux":"^7.1.15","@types/react-router-dom":"^5.1.6","@types/react-syntax-highlighter":"^13.5.0","@types/redux-mock-store":"^1.0.2","@types/swagger-ui-react":"^3.35.1","axios":"^0.21.1","bootstrap":"^4.4.1","chalk":"^4.1.0","chart.js":"^2.9.4","cli-cursor":"^3.1.0","closest":"^0.0.1","cookie-parser":"^1.4.5","cors":"^2.8.5","csvtojson":"^2.0.10","dagre":"^0.8.5","date-fns":"^2.16.1","eventsource":"^1.0.7","express-session":"^1.17.1","express-ws":"^4.0.0","file-saver":"^2.0.2","flexsearch":"^0.6.32","flux":"^3.1.3","fs-extra":"^9.0.1","gh-pages":"^2.2.0","html2canvas":"^1.0.0-rc.7","immer":"^8.0.1","lodash":"^4.17.15","log-symbols":"^4.0.0","lunr":"^2.3.8","mathjs":"^7.5.1","minisearch":"^2.6.2","mockdate":"^3.0.2","mongodb":"^3.5.6","multer":"^1.4.2","nanoid":"^3.1.20","node-sass":"^4.13.1","passport":"^0.4.1","passport-github2":"^0.1.12","path":"^0.12.7","pathfinding":"^0.4.18","paths-js":"^0.4.10","react":"^17.0.0","react-bootstrap":"^1.0.0","react-dom":"^17.0.0","react-error-boundary":"^3.0.2","react-flow-renderer":"^8.8.0","react-ga":"^2.7.0","react-grid-layout":"^1.2.4","react-minisearch":"^2.6.3","react-modal":"^3.11.2","react-redux":"^7.2.2","react-router-dom":"^5.1.2","react-scripts":"4.0.0","react-select":"^3.1.0","react-syntax-highlighter":"^12.2.1","react-virtualized":"^9.21.2","react-virtualized-auto-sizer":"^1.0.2","react-window":"^1.8.5","redux-devtools-extension":"^2.13.8","redux-mock-store":"^1.5.4","redux-thunk":"^2.3.0","resize-observer-polyfill":"^1.5.1","shards-react":"^1.0.3","styled-components":"^5.2.1","swagger-ui-react":"^3.50.0","typescript":"^3.9.7","uuid":"^8.3.2","yaml":"^1.8.3","yamljs":"^0.3.0","yargs":"^16.1.0"},"devDependencies":{"@cypress/code-coverage":"^3.9.2","@cypress/instrument-cra":"^1.4.0","@percy/cypress":"^2.3.4","@types/lunr":"^2.3.3","@types/react-select":"^3.0.19","@types/react-test-renderer":"^17.0.0","@types/react-virtualized-auto-sizer":"^1.0.0","@types/react-window":"^1.8.2","axios-mock-adapter":"^1.19.0","chokidar":"^3.5.1","cypress":"^6.8.0","dotenv":"^8.2.0","eslint-plugin-flowtype":"^5.2.0","husky":"^4.2.5","lint-staged":"^10.2.11","npm-run-all":"^4.1.5","prettier":"^2.0.5","react-test-renderer":"^17.0.1","redux-devtools":"^3.7.0","source-map-explorer":"^2.5.2","stylelint":"^13.8.0","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^20.0.0"}}')},66:function(e,t,r){var s={"./Dashboard":[51,0,1,2,3,4],"./Dashboard.tsx":[51,0,1,2,3,4],"./Hub":[52,0,1,2,3,5],"./Hub.tsx":[52,0,1,2,3,5],"./Styleguide":[54,0,1,3,6],"./Styleguide.tsx":[54,0,1,3,6],"./Swagger":[53,0,2,9,7],"./Swagger.tsx":[53,0,2,9,7],"./utils":[47,1,8],"./utils.ts":[47,1,8]};function a(e){if(!r.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],a=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(a)}))}a.keys=function(){return Object.keys(s)},a.id=66,e.exports=a}},[[55,11,12]]]);