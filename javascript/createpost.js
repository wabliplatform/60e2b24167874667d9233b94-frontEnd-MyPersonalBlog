let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';let blog = new TempApi.Blog();document.getElementById('i4un6').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('iyypu').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('izz9c').onclick = (event) => {
    event.preventDefault();
    blog['date'] = document.querySelector("[annotationname = 'date']").value;blog['title'] = document.querySelector("[annotationname = 'title']").value;blog['posttext'] = document.querySelector("[annotationname = 'posttext']").value;blog['image'] = document.querySelector("[annotationname = 'image']").value;apiBlogApi.createblog( blog, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/Home/'+response.body.query._id+'';}}});};