import app from './firebaseConfig.js';

import { getDatabase, ref, push, set, onValue} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const myApp = {}

const database = getDatabase(app);

// const dbRef = ref(database);

// const pushReturnObject = push(dbRef, "my first push");
// console.log(pushReturnObject)


// onValue(dbRef, (snapshot) => {
//  const dbData = (snapshot.val());

//  myApp.data = dbData;
// console.log(myApp.data);
// // const arrayOfData = [];
// // for (let dta in dbData) {
// //   console.log(dbData);
// // }

// })

// console.log(myApp.Data);

var editorJsOutput = {
    "time": 1679854188043,
    "blocks": [
        {
            "id": "IvKUo7N95f",
            "type": "paragraph",
            "data": {
                "text": "first paragraph <br>"
            }
        },
        {
            "id": "HSfmf5svJW",
            "type": "header",
            "data": {
                "text": "First H1",
                "level": 1
            }
        },
        {
            "id": "FK5DQ6Ooh-",
            "type": "header",
            "data": {
                "text": "first h2",
                "level": 2
            }
        },
        {
            "id": "mBU1s2_RJO",
            "type": "header",
            "data": {
                "text": "First h3",
                "level": 3
            }
        },
        {
            "id": "fq6zDfWORT",
            "type": "paragraph",
            "data": {
                "text": "second paragraph<br>"
            }
        },
        {
            "id": "BoZFLD8uzh",
            "type": "header",
            "data": {
                "text": "First h4",
                "level": 4
            }
        },
        {
            "id": "x7gY8nUOIz",
            "type": "checklist",
            "data": {
                "items": [
                    {
                        "text": "jbhfkdl",
                        "checked": true
                    },
                    {
                        "text": "kdljbkxlb",
                        "checked": true
                    },
                    {
                        "text": "dljfyklby",
                        "checked": true
                    },
                    {
                        "text": "c",
                        "checked": true
                    }
                ]
            }
        },
        {
            "id": "HSfmf5svJA",
            "type": "header",
            "data": {
                "text": "First h5",
                "level": 5
            }
        },
        {
            "id": "3lOaRYiEao",
            "type": "table",
            "data": {
                "content": [
                    [
                        "Car",
                        "model",
                        "year"
                    ],
                    [
                        "Kia",
                        "Rio",
                        "2023"
                    ]
                ]
            }
        }
    ],
    "version": "2.26.5"
}


// EDITOR JS

const editor = new EditorJS({
 
  holderId : 'editorjs', 
  placeholder: 'Let`s write an awesome story!',

  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [1, 2, 3, 4, 5, 6],
        defaultLevel: 3
      }
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
     table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
   }, 

   onReady: () => {
      console.log('Editor.js is ready to work!')
   },
   
    onChange: (api, event) => {
    //  console.log('Now I know that Editor\'s content changed!', event)
     const output = document.getElementById('output');


     editor.save().then((savedData) => {
  console.log('Article data: ', savedData);
  // set(dbRef, JSON.stringify(savedData, null, 4));
  // console.log(JSON.stringify(savedData, null, 4));
//  const outputObject = outputData;
  // output.innerHTML = JSON.stringify(outputData, null, 4);
}).catch((error) => {
  console.log('Saving failed: ', error)
});
    //  console.log(outputObject);
      editor.save().then( savedData => {
        // output.innerHTML = JSON.stringify(savedData, null, 4);

        // set(dbRef, JSON.stringify(savedData, null, 4));
  
      //   console.log(JSON.stringify(savedData, null, 4))
        
      })

      
      
   
   },

 data: editorJsOutput
   

});

// THE HTML OUTPUT

var htmlOutput = '';

// LOOP TROUGH EACH BLOCK AND CONVERT IT TO HTML

for(var i=0; i<editorJsOutput.blocks.length; i++) {
  var block = editorJsOutput.blocks[i];
  switch(block.type) {
    case 'paragraph':
      htmlOutput += '<p>' + block.data.text + '</p>';
      break;
      case 'header':
        htmlOutput += '<h' + block.data.level + '>' + block.data.text + '<h' + block.data.level + '>';
        break;
      case 'checklist':
					htmlOutput += '<ul>';
					for(var j=0; j<block.data.items.length; j++) {
						htmlOutput += '<li>';
						if(block.data.items[j].checked) {
							htmlOutput += '<input type="checkbox" checked>';
						} else {
							htmlOutput += '<input type="checkbox">';
						}
						htmlOutput += block.data.items[j].text + '</li>';
					}
					htmlOutput += '</ul>';
        break;
    case 'table':
      htmlOutput += '<table class="EditorJsTable">';
      block.data.content.forEach(row => {
        htmlOutput += '<tr>';
        row.forEach(cell => {
          htmlOutput += `<td>${cell}</td>`;
        });
        htmlOutput += '</tr>';
      });
  }
}

console.log(htmlOutput)

let output = document.getElementById('editorjs-output');

output.innerHTML = htmlOutput;



