  let root = document.getElementById("root");
  let tittle = document.createElement('h1');
  tittle.innerHTML = "TODO CAT List";
  root.insertBefore(tittle, root.appendChild[0]);

  let searchConatiner = document.createElement('div');
  root.insertBefore(searchConatiner, root.appendChild[0]);
  searchConatiner.className = "search-conatiner";

  let itemInput = document.createElement('input');
  searchConatiner.insertBefore(itemInput, searchConatiner.appendChild[0]);
  itemInput.id = "imput-text";
  itemInput.type = "text";
  itemInput.placeholder = "Add new action";
  itemInput.size = 30;
  itemInput.className = "item-input";

  let itemBottonContainer = document.createElement('button')
  searchConatiner.insertBefore(itemBottonContainer, searchConatiner.appendChild[0]);
  itemBottonContainer.className = "item-input-button-container";
  itemBottonContainer.type = "button";
  itemBottonContainer.id = "button-click";
  itemBottonContainer.innerHTML = '<i class="material-icons item-input-button">add_box</i>';
  document.getElementById("button-click").addEventListener("click", createlist);

  let line = document.createElement('hr');
  root.insertBefore(line, root.appendChild[0]);

  let n=0;
  let j=1;

  function createlist() {

  let textValue = document.getElementById('imput-text').value;

    let lichilnin = [];

    if (textValue !== "") {

      for (let i=n; i<j; i++) {

        lichilnin[i] = i;

        if (lichilnin.length<=10) {

        let listConatinerId = ["list-conatiner-0",
             "list-conatiner-1",
             "list-conatiner-2",
             "list-conatiner-3",
             "list-conatiner-4",
             "list-conatiner-5",
             "list-conatiner-6",
             "list-conatiner-7",
             "list-conatiner-8",
             "list-conatiner-9",
             "list-conatiner-10"]

        let itemBottonDoneIconsId = ["button-done-0",
             "button-done-1",
             "button-done-2",
             "button-done-3",
             "button-done-4",
             "button-done-5",
             "button-done-6",
             "button-done-7",
             "button-done-8",
             "button-done-9",
             "button-done-10"];

        let buttonChangeId = ["button-change-0",
             "button-change-1",
             "button-change-2",
             "button-change-3",
             "button-change-4",
             "button-change-5",
             "button-change-6",
             "button-change-7",
             "button-change-8",
             "button-change-9",
             "button-change-10"];

        let buttonDeleteId = ["button-delete-0",
             "button-delete-1",
             "button-delete-2",
             "button-delete-3",
             "button-delete-4",
             "button-delete-5",
             "button-delete-6",
             "button-delete-7",
             "button-delete-8",
             "button-delete-9",
             "button-delete-10"];

        let inputValuePChangeId= ["input-Value-P-Change-0",
             "input-Value-P-Change-1",
             "input-Value-P-Change-2",
             "input-Value-P-Change-3",
             "input-Value-P-Change-4",
             "input-Value-P-Change-5",
             "input-Value-P-Change-6",
             "input-Value-P-Change-7",
             "input-Value-P-Change-8",
             "input-Value-P-Change-9",
             "input-Value-P-Change-10"];

        let listConatiners = document.createElement('div');
        root.insertBefore(listConatiners, root.appendChild[0]);
        listConatiners.className ="dropzone";

        let listConatiner = document.createElement('div');
        listConatiners.insertBefore(listConatiner, listConatiners.appendChild[0]);
        listConatiner.className = "list-conatiner";
        listConatiner.id = listConatinerId[i];

        let doneIconsContainer = document.createElement('div');
        listConatiner.insertBefore(doneIconsContainer, listConatiner.appendChild[0]);
        doneIconsContainer.className = "done-icons-container";

        let itemBottonDoneIcons = document.createElement('button')
        doneIconsContainer.insertBefore(itemBottonDoneIcons, doneIconsContainer.appendChild[0]);
        itemBottonDoneIcons.className = "item-botton-done-icons";
        itemBottonDoneIcons.type = "button";
        itemBottonDoneIcons.id =itemBottonDoneIconsId[i]
        itemBottonDoneIcons.innerHTML = '<i class="material-icons item-Botton-not-done">check_box_outline_blank</i>';


        document.getElementById(itemBottonDoneIconsId[i]).addEventListener("click", function () {
            textValue = document.getElementById('imput-text').value;
            itemBottonDoneIcons.innerHTML = '<i class="material-icons item-Botton-done"">check_box</i>';
            document.getElementById(buttonChangeId[i]).setAttribute("disabled", "true");
            textValueP.innerHTML = '<p class="text-cont bloced-paragraf " id="'+inputValuePChangeId[i]+'">'
            +textValue+'</p>';
            buttonValueP.innerHTML = '<i class="material-icons item-Botton-change bloced-paragraf">create</i>';
          });

        let textValueContainer = document.createElement('div');
        listConatiner.insertBefore(textValueContainer, listConatiner.appendChild[0]);
        textValueContainer.className = "text-value-container";

        let textValueP = document.createElement('div');
        textValueContainer.insertBefore(textValueP, textValueContainer.appendChild[0]);
        textValueP.innerHTML = '<p class="text-cont" id="'+inputValuePChangeId[i]+'">'+textValue+'</p>';

        let buttonValueP = document.createElement('button');
        textValueContainer.insertBefore(buttonValueP, textValueContainer.appendChild[0]);
        buttonValueP.id = buttonChangeId[i];
        buttonValueP.className = "button-value-p";
        buttonValueP.innerHTML = '<i class="material-icons item-Botton-change">create</i>';
        document.getElementById(buttonChangeId[i]).addEventListener("click", function () {
          textValue = document.getElementById('imput-text').value;
          textValueP.innerHTML = '<input class="input-list-style" id="'+inputValuePChangeId[i]+'">';
          buttonValueP.innerHTML = '<i class="material-icons item-Botton-change">save</i>';
          itemBottonDoneIcons.innerHTML = '<i class="material-icons item-Botton-not-done button-display-none">'+
          'check_box_outline_blank</i>';
          let imputValuePChange = document.getElementById(inputValuePChangeId[i]);
          imputValuePChange.value= textValue;
          document.getElementById(buttonChangeId[i]).addEventListener("click", function () {
            let textValueNew = document.getElementById(inputValuePChangeId[i]).value;
            textValueP.innerHTML = '<p class="text-con" id="'+inputValuePChangeId[i]+'">'+textValueNew+'</p>';
            buttonValueP.innerHTML = '<i class="material-icons item-Botton-change">create</i>';
            itemBottonDoneIcons.innerHTML = '<i class="material-icons item-Botton-not-done button-display-norm">'+
            'check_box_outline_blank</i>';
            document.getElementById(buttonChangeId[i]).setAttribute("disabled", "true");
          });
          });

        let deleteIconsContainer = document.createElement('div');
        listConatiner.insertBefore(deleteIconsContainer, listConatiner.appendChild[0]);
        doneIconsContainer.className = "done-icons-container";

        let buttonDelete = document.createElement('button');
        deleteIconsContainer.insertBefore(buttonDelete, deleteIconsContainer.appendChild[0]);
        buttonDelete.className = "Button-delete";
        buttonDelete.id = buttonDeleteId[i];
        buttonDelete.innerHTML = '<i class="material-icons item-Button-delete">delete</i>';
        document.getElementById(buttonDeleteId[i]).addEventListener("click", function(){
          listConatiner = document.getElementById(listConatinerId[i]);
          listConatiner.parentNode.removeChild(listConatiner)
        });

      } else {
        document.getElementById("button-click").setAttribute("disabled", "true");
        itemBottonContainer.innerHTML = '<i class="material-icons item-input-button-disabled">add_box</i>';
        tittle.innerHTML = '<p class=warning>Maximum item per list are created</p> \nTODO CAT List';
      }
    }
    n+=1;
    j+=1;
  }
}
