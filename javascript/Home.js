let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';document.getElementById('isif').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('id022').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('i24n55').onclick = (event) => {
    event.preventDefault();
    { location.href= '/table';}};document.getElementById('ilrqo').onclick = (event) => {
    event.preventDefault();
    { location.href= '/createpost';}};window.onload = () => {apiBlogApi.getAllblog((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("i1pxk").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'image']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].image;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'date']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].date;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].title;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/viewpost/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};document.getElementById('isa8p').onclick = (event) => {
    event.preventDefault();
    { location.href= '/viewpost';}};