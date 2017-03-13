var state = {
  items: [{itemName:'apples', checked: false},
          {itemName:'oranges', checked: false},
          {itemName:'bread', checked: false},
          {itemName:'milk', checked: true}]
}

var renderHTML = 
     '<li id="yoid">'+
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

  else {
    state.items[index].checked = false;
  }
}

function deleteItem(state, index) {
  
  state.items[index].splice(index, 1);
}


//render functions
function renderItem(x, index) {    
  var checked = "";
  var id = index
     return renderHTML
      .replace('$itemname',x.itemName )
      .replace("$checked", checked)
      .replace("yoid", index);

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

    alert($(this).parents('li').attr('id'))
  })
}


function checkItemButton() {

$('.shopping-item-toggle').on('click', function() {

 var theindex = $(this).parents('li').attr('id')

  state.items.map(function (x, indexx) {
    if (indexx === theindex) {

      alert('we have found a match!')
    }

  })
})

}

//on-load callbacks
$(function() {
  render(state);
})

