var state = {
  items: [{itemName:'apples', checked: false},
          {itemName:'oranges', checked: false},
          {itemName:'bread', checked: false},
          {itemName:'milk', checked: true}]
}

var renderHTML = 
     '<li id="$id">'+
        '<span class="shopping-item $checked">$itemname</span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>' +
          '</button>'+
        '</div>'+
      '</li>'

//state management functions

function addItem(state, item) {
  state.items.push({itemName:item, checked: false});
}

function grabId(state, index) {

  return index;
}

function checkItem(state, index) {
  if (state.items[index].checked !== true) {
    state.items[index].checked = true;  
  }

  else {
    state.items[index].checked = false;
  }
}

function deleteItem(state, index) {
  
  state.items.splice(index, 1);
}


//render functions
function renderItem(item, index) {    
  var checkedClass = "";
  var id = index;
  if (item.checked) {

    checkedClass = 'shopping-item-checked';

  }
    
  return renderHTML
    .replace('$itemname',item.itemName )
    .replace("$checked", checkedClass)
    .replace("$id", id);



  }

function render(state) {
  

  var renderedItems = state.items.map(renderItem);
  $('.shopping-list').html(renderedItems.join(''));



  deleteItemButton();
  checkItemButton();
}



//event listeners
function addItemSubmit() {
$('#js-shopping-list-form').on('submit', function(event) {
  event.preventDefault();
  console.log('12345')
  var itemadd = $('#shopping-list-entry').val();
  addItem(state, itemadd);
  render(state);


  
})
};

function deleteItemButton() {
  $('.shopping-item-delete').on('click', function() {
    var theindex = parseInt($(this).parents('li').attr('id'));

    deleteItem(state, theindex);
    render(state);
  })
}


function checkItemButton() {

$('.shopping-item-toggle').on('click', function() {

  var theindex = parseInt($(this).parents('li').attr('id'));

  checkItem(state, theindex);
  render(state);

})
}

//on-load callbacks
$(function() {
  addItemSubmit();
  render(state);


})

