var state = {
  items: [{itemName:'apples', checked: false},
          {itemName:'oranges', checked: false},
          {itemName:'bread', checked: false},
          {itemName:'milk', checked: true}]
}

var renderHTML = 
     '<li>'+
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

function checkItem(state, index) {
  if (state.items[index].checked !== true) {
    state.items[index].checked = true;  
  }
}

function deleteItem(state, index) {
  
  state.items[index].splice(index, 1);
}


//render functions
function renderItem(x) {    
  var checked = "";
     return renderHTML
      .replace('$itemname',x.itemName )
      .replace("$checked", checked);


  
  }
function render(state) {
  

  var renderedItems = state.items.map(renderItem);
  $('.shopping-list').html(renderedItems.join(''));


  addItemSubmit();
  deleteItemButton();
  checkItemButton();
}



//event listeners
function addItemSubmit() {
$('#js-shopping-list-form').on('submit', function(event) {
  event.preventDefault();
  var itemadd = $('#shopping-list-entry').val();
  addItem(state, itemadd);
  render(state);

  
})
};

function deleteItemButton() {
  $('.shopping-item-delete').on('click', function() {
    console.log($(this).closest('li').child('.shopping-item');
    currentindex = $(this).index();
    deleteItem(state, currentindex);
    $(this).remove();
  })
  
}

function checkItemButton() {


  checkItemIndex = $(this).index();

  checkItem(state, checkItemIndex);


}

//on-load callbacks
$(function() {
  render(state);
})

