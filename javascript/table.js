let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';document.getElementById('ij22yo').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('i99tku').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};window.onload = () => {apiBlogApi.getAllblog((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("ihxtc").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].title;
        }
       } catch (e) { console.log(e) };try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'date']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].date;
        }
       } catch (e) { console.log(e) };try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'image']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].image;
        }
       } catch (e) { console.log(e) };
        
      }
    });
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].remove()})}});};