/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const [html, setHtml] = useState('');
 const [data, setData] =  useState([]);

 useEffect( () => {
  fetch('https://apps.parcelforce.com/sso/').then((resp) => {
    return resp.text()
  })
  .then(function(html) {
    setHtml(html);
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
 },[])

 useEffect( () => {
  fetch('https://www.royalmail.com/capi/rml/bf/v1/locations/branchFinder?postCode=SY14%208QQ&latitude=53.020465&longitude=-2.761422&searchRadius=40&count=7&appliedFilters=null&officeType=postboxes&type=2').then((resp) => {
    return resp.json()
  })
  .then(function(data) {
    setData(data);
    console.log(data);
})
.catch(function(err) {  
    console.log('Failed to fetch page: ', err);  
});
 },[])


const hostWidgetInIframe = () => {
  var targetEl = document.body;
  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', 'safe-space-iframe');
  iframe.setAttribute('title', 'safe-space-widget-iframe');
  targetEl.appendChild(iframe);
  targetEl.style.overflow = "hidden";
  iframe.setAttribute("style", "height:100%;width:100%;position:fixed;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.26);");
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();
  iframe.focus();
 } 

  return (
    <div className="App">
      <header className="App-header">
       <a  onClick={hostWidgetInIframe} href="javascript:void(0)">
          <img src="/Assets/img/safespace.png"  alt="safe-space" />
       </a>
       
      </header>
    </div>
  );
}

export default App;
