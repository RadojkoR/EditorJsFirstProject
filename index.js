console.log("hello")

const editor = new EditorJS({
 
  holderId : 'editorjs', 
  placeholder: 'Let`s write an awesome story!',

  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [2, 3, 4],
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
     console.log('Now I know that Editor\'s content changed!', event)
     const output = document.getElementById('output');
     
      editor.save().then( savedData => {
        output.innerHTML = JSON.stringify(savedData, null, 4);
      })
   
   }

});



