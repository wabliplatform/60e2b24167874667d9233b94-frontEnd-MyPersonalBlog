let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';window.onload = () => {apiBlogApi.getAllblog((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("i9lgq").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'date']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].date;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].title;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'posttext']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].posttext;
        }
       } catch (e) { console.log(e) };
      }
    });
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].remove()})}});};