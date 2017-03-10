var state = {
  items: []
}

var renderHTML = 
     '<li>'+
        '<span class="shopping-item">$itemname</span>'+
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

function render(state) {
  

  state.items.map(function(x) {
    
    $('.shopping-list').append(renderHTML.replace('$itemname',x.itemName ));
    
    
  });

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

