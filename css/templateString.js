/**
 * 
 * js file
 */
function generateTemplateStr(Apiresponse) {

    //extract filterArr
    filterArr = Apiresponse.filterArr

    const temStrings = [];
    for (let index = 0; index < filterArr.length; index++) {

        //code of insert Li
        templateStr = ' <tr> </tr>'

        //template string is generated


        //push it to arr
        temStrings.push(templateStr)
    }
    return temStrings //array of template strings
}


//generateing pdf
//
{
    templateStrs: generateTemplateStr(res) //passing to ejs
        ...
}

/**
 * 
 * ejs file
 */
// initialize var
templateStrs = <% JSON.stringify(templateStrs) %>;

// insertLi Fn
function insertLi(i) {

    console.log(templateStrs[i])

    li = $(templateStrs[i])
    //append operation goes here


    return li
}

/// for within script
for (let index = 0; index < filterArr.length; index++) {

    li = insertLi(index);

    ///blah
}