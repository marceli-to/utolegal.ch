(function () {

  const selectors = {
    listItem: '[data-list]',
    portraitItem: '[data-portrait]',
  };

  const init = () => {
    // Add the following functions:
    // 1. on hover of a list item, add the class 'opacity-80' to all portrait items except the one matching the list item
    // 2. on mouse leave of a list item, remove the class 'opacity-80' from all portrait items
    // Go!

    const listItems = document.querySelectorAll(selectors.listItem);
    const portraitItems = document.querySelectorAll(selectors.portraitItem);

    listItems.forEach(listItem => {
      listItem.addEventListener('mouseover', () => {
        portraitItems.forEach(portraitItem => {
          if (portraitItem.dataset.portrait === listItem.dataset.list) {
            portraitItem.classList.remove('opacity-70');
          } else {
            portraitItem.classList.add('opacity-70');
            portraitItem.classList.add('transition-opacity');
          }
        });
      });

      listItem.addEventListener('mouseleave', () => {
        portraitItems.forEach(portraitItem => {
          portraitItem.classList.remove('opacity-70');
        });
      });
    });

    // Add the following functions:
    // 1. on hover of a portrait item, add the class 'text-graphite' to all list items except the one matching the portrait item
    // 2. on mouse leave of a portrait item, remove the class 'text-graphite' from all list items
    // Go!

    portraitItems.forEach(portraitItem => {
      portraitItem.addEventListener('mouseover', () => {
        listItems.forEach(listItem => {
          if (portraitItem.dataset.portrait === listItem.dataset.list) {
            listItem.classList.remove('text-graphite');
          } else {
            listItem.classList.add('text-graphite');
            listItem.classList.add('transition-colors');
          }
        });
      });

      portraitItem.addEventListener('mouseleave', () => {
        listItems.forEach(listItem => {
          listItem.classList.remove('text-graphite');
        });
      });
    });

  };

  init();
  
})();