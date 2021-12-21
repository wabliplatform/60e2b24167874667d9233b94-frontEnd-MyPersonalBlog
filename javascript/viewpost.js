let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';document.getElementById('imdv').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('i5t1j').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('ihs4a').onclick = (event) => {
    event.preventDefault();
    { location.href= '/createpost';}};window.onload = () => {let blogId = window.location.pathname.replace('/viewpost/','');apiBlogApi.getblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = date]').textContent = response.body.query.date ;document.querySelector('[annotationname = title]').textContent = response.body.query.title ;document.querySelector('[annotationname = posttext]').textContent = response.body.query.posttext ;document.querySelector('[annotationname = image]').src = response.body.query.image ;}});};