# Bus Mall

  ## Welcome to my Bus Mall 
  ### We have everything you might want and need... or not.

  - Display 3 images of different products by chance so the user can decide which one they like better.
   
   - create the constructor function that will create an object associated with each product, and has the following properties :
    - Name of the product
    - file path of the image

   - Create an algorithm that will randomly generate three different products from the images directory and display them side-by-side in the browser.

   - Attach an event listener to the section of the HTML page where the images are going to be displayed.

   - Once the user clicks a product, it will then generate three new products for the user to pick from.

- Be able to track the selections made by the users so we can determine which products to keep for the catalog.
  - in the constructor function define a property to hold the number of times a product has been clicked.
  - after every selection by the user, update the newly added property to reflect if it was clicked.

- Be able to control the number of rounds a user is presented with so that we can control the voting session.
  - by default, the user should be presented with 25 rounds of voting before ending the session.
  - Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

- Then have the ablity to view a report of the results after all rounds have been completed, so that we can evaluate which products were the most popular.
  - create a property attached to the constructor function itself that keeps tract of all the products that are currently being considered.
  - After voting rounds have been completed, remove the event listeners on the product.
  - Display the list of all the products followed by the votes recieved and number of times seen for each. ex. ``banana slicer had 3 votes and was shown 5 times`` 

  ## J/S and HTML was assisted by Ryan Gallaway, Henry Funk and Scott Falbo.       
